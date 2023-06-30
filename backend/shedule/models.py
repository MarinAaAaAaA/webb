from django.db import models

class Shedule(models.Model):
    time =  models.TimeField(auto_now=False, auto_now_add=False)
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name
