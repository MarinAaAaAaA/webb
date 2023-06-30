from rest_framework import viewsets
from shedule.models import Shedule
from shedule.serializers import SheduleSerializer

class SheduleViewSet(viewsets.ModelViewSet):
    serializer_class = SheduleSerializer
    def get_queryset(self):
        return Shedule.objects.all()
