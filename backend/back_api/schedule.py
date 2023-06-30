from datetime import timedelta
from celery.schedules import crontab

CELERYBEAT_SCHEDULE = {
    'publish_post_starter': {
        'task': 'publish_post_starter',
        'schedule': timedelta(minutes=1)
    },
    'end_trial_starter': {
        'task': '',
        'schedule': crontab(hour = '10-19', minute = 0)
    }    
}