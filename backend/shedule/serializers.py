from rest_framework import serializers
from shedule.models import Shedule

class SheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shedule
        fields = ['id', 'time', 'name', 'description']