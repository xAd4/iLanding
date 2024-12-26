from django.db import models

# Create your models here.

class FeatureItemCard(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    featureIcon = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Feature Item Card'
        verbose_name_plural = 'Feature Item Cards'

    def __str__(self):
        return self.title