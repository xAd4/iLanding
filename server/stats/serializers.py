from rest_framework import serializers
from .models import StatsItem

class StatsItemSerializers(serializers.ModelSerializer):
    class Meta:
        model = StatsItem
        fields = ('id','title', 'description', 'statIcon')