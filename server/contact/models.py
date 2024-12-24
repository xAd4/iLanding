from django.db import models

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=150, verbose_name='Your Name')
    email = models.EmailField(max_length=250, verbose_name='Your Email')
    subject = models.CharField(max_length=100, verbose_name='Subject')
    message = models.TextField(verbose_name='Message')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created At')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated At')

    class Meta:
        verbose_name: ('Contact')
        verbose_name_plural: ('Contacts')

    def __str__(self):
        return f"{self.name} sent message. - {self.email}"