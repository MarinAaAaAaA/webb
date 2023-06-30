from django.conf import settings
from django.core.cache import cache

from rest_framework import viewsets
from course.models import Course
from course.serializers import CourseSerializer

class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    def get_queryset(self):
        return Course.objects.all()
    
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset)
        response = super().list(request, *args, **kwargs)
        
        
        course_cache = cache.get(settings.COURSE_CACHE_NAME) 
        
        if course_cache:
            courses_list = course_cache
        else:
            courses_list = response.data
            cache.set(settings.COURSE_CACHE_NAME, courses_list, 60)
        
        # response_data = {'result' : courses_list}
        # response.data = response_data
        
        response.data =  courses_list
        
        return response
