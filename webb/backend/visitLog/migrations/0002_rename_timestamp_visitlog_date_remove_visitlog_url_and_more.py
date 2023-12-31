# Generated by Django 4.2.1 on 2023-06-24 04:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('visitLog', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='visitlog',
            old_name='timestamp',
            new_name='date',
        ),
        migrations.RemoveField(
            model_name='visitlog',
            name='url',
        ),
        migrations.AddField(
            model_name='visitlog',
            name='request_data',
            field=models.TextField(default='{}'),
        ),
        migrations.AddField(
            model_name='visitlog',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='visitlog',
            name='ip_address',
            field=models.GenericIPAddressField(),
        ),
    ]
