from rest_framework import viewsets
from .models import StatsItem
from .serializers import StatsItemSerializers

class StatsItemViewSet(viewsets.ModelViewSet):
    queryset = StatsItem.objects.all()
    serializer_class = StatsItemSerializers