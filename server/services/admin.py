from django.contrib import admin
from .models import Service

# Register your models here.

class ReadOnlyFields(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')

admin.site.register(Service, ReadOnlyFields)
