"""
URL configuration for server project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
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
from django.urls import path, include
from django.conf import settings
from server import settings
from contact import urls
from stats import urls
from feature import urls
from featureTwo import urls
from clients import urls
from services import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('contact/', include("contact.urls")),
    path('stats/', include("stats.urls")),
    path('feature/', include("feature.urls")),
    path('featureTwo/', include("featureTwo.urls")),
    path('clients/', include("clients.urls")),
    path('services/', include("services.urls")),
]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
