from django.db import models

from .tasks import send_beat_email

class MailingList(models.Model):
    email = models.EmailField(max_length=255, unique=True)

    def __str__(self):
        return self.email
    
    
    def save(self, *args, **kwargs):
        send_beat_email.delay(self.email)
        return super().save(*args, **kwargs)

# class Contact(models.Model):
#     name = models.CharField(max_length=30)
#     email = models.EmailField(max_length=50)

#     def __str__(self):
#         return self.name