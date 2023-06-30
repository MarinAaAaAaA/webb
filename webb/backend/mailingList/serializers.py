from rest_framework import serializers
from mailingList.models import MailingList

class MailingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MailingList
        fields = ['email']