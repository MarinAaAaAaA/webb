# Generated by Django 4.2.2 on 2023-06-29 16:00

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('login', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Log',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField(default=datetime.datetime.now)),
                ('url', models.CharField(max_length=255)),
                ('method', models.CharField(max_length=6)),
                ('user_agent', models.CharField(max_length=255)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='members.user')),
            ],
        ),
    ]
