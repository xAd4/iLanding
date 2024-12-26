from rest_framework import routers
from .views import FeatureItemViewSet, FeatureItemViewSetLeft

router = routers.DefaultRouter()

router.register(r'featureItems', FeatureItemViewSet)
router.register(r'featureItemsLeft', FeatureItemViewSetLeft)

urlpatterns = router.urls