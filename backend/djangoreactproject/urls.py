"""djangoreactproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from customers import views
from django.conf.urls import url
from rest_framework import routers
from customers.views import *
from contact.views import *
from django.conf import settings
from django.conf.urls.static import static

# router = routers.DefaultRouter()
# router.register('customer',customers_list)
# router.register('conatct', conatct_list)


urlpatterns = [
    # path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/',include('contact.urls')),
    url(r'^api/customers/$', views.customers_list),
    url(r'^api/customers/$', views.customers_list),
    url(r'^api/customers/(?P<pk>[0-9]+)$', views.customers_detail), 
    url(r'^api/project/$', views.project_list),
    url(r'^api/project/add/$', views.add.as_view()),
    url(r'^api/project/edit/<int:pk>$', views.edit.as_view()),
    url(r'^api/project/(?P<pk>[0-9]+)$', views.project_detail),    

]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
