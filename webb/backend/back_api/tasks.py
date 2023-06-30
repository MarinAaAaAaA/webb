from back_api.celery_app import Celery, shared_task

@app.task
def say_hello():
    print('Hello, world!')
    
say_hello.delay() # задача будет добавлена в очередь и выполнена асинхронно
