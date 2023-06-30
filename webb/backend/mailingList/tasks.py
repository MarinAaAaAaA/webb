from celery import shared_task
from django.core.mail import send_mail
# from .models import Contact
# from back_api.celery import app


@shared_task
def send_beat_email(email):
    admin_email = 'admin@example.com'
    admin_subject = 'New Subscriber'
    admin_message = f'You have a new subscriber. Contact email: {email}'
    subscriber_subject = 'subscription Confirmation'
    subscriber_message = 'You have received this email because you subscribed to the newsletter.'

    # Отправка электронной почты администратору
    send_mail(
        admin_subject,
        admin_message,
        'admin@example.com',
        [admin_email],
        fail_silently=False,
    )

    # Отправка подтверждения подписчику
    send_mail(
        subscriber_subject,
        subscriber_message,
        'noreply@example.com',  # Адрес "От" (From)
        [email],  # Адрес "Кому" (To)
        fail_silently=False,
    )

@shared_task
def send_beat_mail():
    for contact in Contact.objects.all():
        send_mail(
        'SPAM',
        [contact.email],
        fail_silently=False,
    )
