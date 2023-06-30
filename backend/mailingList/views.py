# from django.shortcuts import render

from rest_framework import viewsets
from mailingList.models import MailingList
from mailingList.serializers import MailingListSerializer
from django.http import JsonResponse
from .tasks import send_beat_email

class MailingListViewSet(viewsets.ModelViewSet):
    serializer_class = MailingListSerializer

    def get_queryset(self):
        return MailingList.objects.all()
    
def subscribe(request):
    email = request.POST.get('email')

    # Выполняйте дополнительную валидацию email, если необходимо

    # Запускайте задачу отправки email через Celery
    send_beat_email.delay(email)

    return JsonResponse({'status': 'success'})