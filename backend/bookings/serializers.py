from rest_framework import serializers
from .models import ServiceBooking

class ServiceBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceBooking
        fields = '__all__'
