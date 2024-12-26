from rest_framework import viewsets
from .models import FeatureItemCard
from .serializers import FeatureItemCardSerializer

class FeatureItemCardViewSet(viewsets.ModelViewSet):
    queryset = FeatureItemCard.objects.all()
    serializer_class = FeatureItemCardSerializer