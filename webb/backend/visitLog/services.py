import redis

def log_visit_to_redis(request):
    # Создаем подключение к Redis
    r = redis.Redis(host='localhost', port=6379, db=0)

    # Извлекаем данные о посещении из запроса
    user = request.user
    ip_address = request.META.get('REMOTE_ADDR')
    request_data = {
        'url': request.build_absolute_uri(),
        'get_params': dict(request.GET),
        'post_params': dict(request.POST),
        'os': request.META.get('HTTP_USER_AGENT'),
        'browser': request.META.get('HTTP_USER_AGENT'),
    }

    # Записываем данные о посещении в кеш Redis
    r.hmset('visit_logs', {user.id: request_data})

def transfer_logs_from_redis_to_db():
    # Создаем подключение к Redis
    r = redis.Redis(host='localhost', port=6379, db=0)

    # Извлекаем все данные о посещениях из кеша Redis
    visit_logs = r.hgetall('visit_logs')

    # Проходимся по каждой записи и сохраняем ее в базе данных
    for user_id, request_data in visit_logs.items():
        user = User.objects.get(id=user_id)
        VisitLog.objects.create(
            user=user,
            ip_address=request_data['ip_address'],
            request_data=request_data,
        )

    # Очищаем кеш Redis после записи в базу данных
    r.delete('visit_logs')
