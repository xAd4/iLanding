from rest_framework import viewsets
from .models import FeatureItem, FeatureItemLeft
from .serializers import FeatureItemSerializer, FeatureItemSerializerLeft

class FeatureItemViewSet(viewsets.ModelViewSet):
    queryset = FeatureItem.objects.all()
    serializer_class = FeatureItemSerializer

class FeatureItemViewSetLeft(viewsets.ModelViewSet):
    queryset = FeatureItemLeft.objects.all()
    serializer_class = FeatureItemSerializerLeft