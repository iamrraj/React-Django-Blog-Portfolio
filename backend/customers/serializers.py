from rest_framework import serializers
from .models import Customer,Project

class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer 
        fields = ('pk','first_name', 'last_name', 'email', 'phone','address','description')
        

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project 
        fields = ('pk','title', 'description', 'image', 'by','link','body','language','github','date','readtime')
        
