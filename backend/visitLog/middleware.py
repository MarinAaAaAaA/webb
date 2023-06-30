from .services import log_visit_to_redis

def should_log_visit(request):
    # Проверяем, нужно ли логировать текущий URL
    excluded_urls = ['/admin/', '/auth/']  # Список URL-адресов, которые не нужно логировать
    return request.path not in excluded_urls


class VisitLoggingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if should_log_visit(request):
            log_visit_to_redis(request)

        response = self.get_response(request)
        return response
