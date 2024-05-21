from django.contrib.auth.models import Group, User
from rest_framework import serializers
from api.models import *

class DespachoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Despacho
        fields = '__all__'