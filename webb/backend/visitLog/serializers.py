from rest_framework import serializers
from visitLog.models import VisitLog

class VisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitLog
        fields = '__all__'