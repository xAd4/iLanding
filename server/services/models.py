from django.db import models

# Create your models here.

class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    serviceIcon = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Service'
        verbose_name_plural = 'Services'

    def __str__(self):
        return self.name
    
