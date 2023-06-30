from django.shortcuts import render

from rest_framework import viewsets
from couches.models import Couches
from couches.serializers import CouchesSerializer

class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CouchesSerializer
    def get_queryset(self):
        return Couches.objects.all()