from django.contrib import admin
from .models import *

admin.site.register(Members)

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("login", "password")

admin.site.register(Log)