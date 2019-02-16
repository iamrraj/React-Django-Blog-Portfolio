from django.db import models
from django.utils import timezone
import datetime

class Customer(models.Model):
	first_name = models.CharField("First name", max_length=255)
	last_name = models.CharField("Last name", max_length=255)
	email = models.EmailField()
	phone = models.CharField(max_length=20)
	address =  models.TextField(blank=True, null=True)
	description = models.TextField(blank=True, null=True)
	createdAt = models.DateTimeField("Created At", auto_now_add=True)
	
	def __str__(self):
		return self.first_name

class Project(models.Model):
	title = models.CharField(max_length=100)
	description = models.TextField()
	image = models.ImageField(blank = True, null = True )#upload_to="chapter/%Y/%m/%D/"
	by = models.CharField(max_length=50)
	link = models.URLField(max_length=150)
	body = models.CharField(max_length= 300, null=True)
	language = models.TextField()
	date = models.DateField()
	github =  models.URLField(max_length=150, null=True)
	readtime = models.CharField(max_length=10, null=True)
    
	def __str__(self):
		return self.title

	