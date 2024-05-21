from django.shortcuts import render
from api.models import Despacho
from rest_framework import permissions, viewsets
from api.serializer import DespachoSerializer
# Create your views here.
class DespachoViewSet(viewsets.ModelViewSet):
    queryset =  Despacho.objects.all()
    serializer_class = DespachoSerializer
