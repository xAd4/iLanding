from rest_framework import routers
from .views import ClientViewSet

router = routers.DefaultRouter()

router.register(r'clients', ClientViewSet)

urlpatterns = router.urls