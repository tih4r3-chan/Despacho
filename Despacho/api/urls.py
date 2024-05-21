from django.urls import include, path
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'despachos', views.DespachoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]