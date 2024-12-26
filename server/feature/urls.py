from rest_framework import routers
from .views import FeatureItemCardViewSet

router = routers.DefaultRouter()

router.register(r'feature', FeatureItemCardViewSet)

urlpatterns = router.urls