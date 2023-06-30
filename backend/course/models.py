from django.db import models
from django.conf import settings
from django.core.cache import cache

class Course(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.IntegerField()
    image = models.ImageField()



    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        cache.delete(settings.COURSE_CACHE_NAME)
        return super().save(self, *args, **kwargs)
