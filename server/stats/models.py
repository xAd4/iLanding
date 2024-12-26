from django.db import models

# Create your models here.

class StatsItem(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    statIcon = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Stats Item"
        verbose_name_plural = "Stats Items"

    def __str__(self):
        return f"Stat Item: {self.title}"