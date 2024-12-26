from django.db import models
from django.db.models.signals import post_delete
from django.dispatch import receiver

# Create your models here.

#! Images Config
def custom_upload_to(instance, filename):
    if instance.pk:
        old_instance = Client.objects.get(pk=instance.pk)
        old_instance.image.delete()
    return 'clients/' + filename

class Client(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to=custom_upload_to)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Client'
        verbose_name_plural = 'Clients'

    def __str__(self):
        return self.name

@receiver(post_delete, sender=Client)
def delete_image_on_delete(sender, instance, **kwargs):
    if instance.image:
        instance.image.delete(False)