import os
import time

from celery import Celery
from django.conf import settings
# Установка переменной окружения для настроек Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'back_api.settings')



# Создание экземпляра Celery
app = Celery('back_api')

# Загрузка настроек Celery из настроек Django
app.config_from_object('django.conf:settings')

app.conf.broker_url = settings.CELERY_BROKER_URL

# Автоматическое обнаружение и регистрация задач в приложениях Django
app.autodiscover_tasks()
