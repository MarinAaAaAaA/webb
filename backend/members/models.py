from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

class Members(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, verbose_name='Пользователь', on_delete=models.CASCADE)

    def str(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.pk: 
            if self.user.is_authenticated:
                self.user = self.user  #Текущий пользователь 
            else:
                self.user = None

        super().save(*args, **kwargs)

#Создаём экземпляр класса
member = Members(name="Имя участника", user=request.user)
member.save()

class User(models.Model):
    login = models.CharField(max_length=50)
    password = models.CharField(max_length=100)


class Log(models.Model):
    user = models.ForeignKey(User, on_delete=models.RESTRICT)
    time = models.DateTimeField(default=datetime.now)
    url = models.CharField(max_length=255)
    method = models.CharField(max_length=6)
    user_agent = models.CharField(max_length=255)