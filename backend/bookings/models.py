from django.db import models

# Create your models here.
from django.db import models

class ServiceBooking(models.Model):
    customer_name = models.CharField(max_length=100)
    customer_phone = models.CharField(max_length=10)
    car_name = models.CharField(max_length=100)
    vehicle_details = models.TextField()
    service_type = models.CharField(max_length=50)
    specific_issues = models.TextField(blank=True)
    appointment_time = models.DateTimeField()
    preferred_mode = models.CharField(max_length=20)
    customer_address = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.customer_name} - {self.car_name}"
