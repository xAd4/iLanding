from django.contrib import admin
from .models import Client

# Register your models here.

class ReadOnlyFields(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')

admin.site.register(Client, ReadOnlyFields)
