from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact 
        fields = ('pk','first_name', 'last_name', 'email', 'phone','subject','message')
        