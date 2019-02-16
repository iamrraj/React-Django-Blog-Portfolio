from django.urls import path,include

from rest_framework import routers
from . import views

# router = routers.DefaultRouter()
# router.register('customer',conatct_detail)
# router.register('conatct', conatct_list)

urlpatterns = [
    path('contact/', views.conatct_list),
    path('conatct/<int:pk>/', views.conatct_detail),
]