from rest_framework import serializers
from .models import FeatureItem, FeatureItemLeft

class FeatureItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeatureItem
        fields = ('id', 'name', 'description', 'featureIcon')
        fields = ('id', 'name', 'description', 'featureIcon')

class FeatureItemSerializerLeft(serializers.ModelSerializer):
    class Meta:
        model = FeatureItemLeft
        fields = ('id', 'name', 'description', 'featureIcon')
        fields = ('id', 'name', 'description', 'featureIcon')