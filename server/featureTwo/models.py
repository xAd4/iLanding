from django.db import models

# Create your models here.

class FeatureItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    featureIcon = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Feature Item"
        verbose_name_plural = "Feature Items"

    def __str__(self):
        return self.name
    
class FeatureItemLeft(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    featureIcon = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Feature Item"
        verbose_name_plural = "Feature Items"

    def __str__(self):
        return self.name
