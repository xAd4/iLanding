from rest_framework import routers
from .views import StatsItemViewSet

router = routers.DefaultRouter()

router.register(r'stats', StatsItemViewSet)

urlpatterns = router.urls