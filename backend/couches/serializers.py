from rest_framework import serializers
from course.models import Couches

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Couches
        fields = ['id', 'name', 'description', 'image']