

# from django.shortcuts import render

# # Create your views here.
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from .serializers import ServiceBookingSerializer
# from .utils import send_booking_sms

# @api_view(['POST'])
# def create_booking(request):
#     serializer = ServiceBookingSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response({'success': True, 'data': serializer.data})
#     return Response({'success': False, 'errors': serializer.errors})


from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ServiceBookingSerializer
from .utils import send_booking_sms

@api_view(['POST'])
def create_booking(request):
    try:
        serializer = ServiceBookingSerializer(data=request.data)
        if serializer.is_valid():
            booking = serializer.save()

            # Get phone number and format if needed (example for India)
            phone = booking.customer_phone
            if not phone.startswith('+'):
                phone = '+91' + phone  # change '+91' to your country code if needed

            message = f"Hello! Your service booking (ID: {booking.id}) for your car '{booking.car_name}' has been confirmed. Thank you!"


            # Send SMS and catch errors
            try:
                send_booking_sms(phone, message)
                print("SMS sent successfully.")
            except Exception as sms_error:
                print(f"SMS sending failed: {sms_error}")

            return Response(serializer.data, status=201)
        else:
            print("Serializer errors:", serializer.errors)
            return Response(serializer.errors, status=400)
    except Exception as e:
        print(f"Unexpected error in create_booking: {e}")
        return Response({'detail': 'Something went wrong on the server.'}, status=500)
