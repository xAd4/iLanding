from rest_framework import serializers
from .models import FeatureItemCard

class FeatureItemCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeatureItemCard
        fields = ('id', 'title', 'description', 'featureIcon', 'color')