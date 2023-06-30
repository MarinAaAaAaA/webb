from celery import shared_task
from .services import transfer_logs_from_redis_to_db

@shared_task
def transfer_logs_to_db():
    transfer_logs_from_redis_to_db()
