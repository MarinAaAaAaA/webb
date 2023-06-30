from rest_framework import viewsets
from visitLog.models import VisitLog
from visitLog.serializers import VisitSerializer

class VisitViewSet(viewsets.ModelViewSet):
    serializer_class = VisitSerializer
    def get_queryset(self):
        return VisitLog.objects.all()
    


