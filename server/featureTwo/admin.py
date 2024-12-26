from django.contrib import admin
from .models import FeatureItem

# Register your models here.

class ReadOnlyFeatureItem(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')

admin.site.register(FeatureItem, ReadOnlyFeatureItem)
