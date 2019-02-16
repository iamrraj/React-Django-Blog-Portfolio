from django.db import models

class Contact(models.Model):
	name = models.CharField("First name", max_length=255)
	subject = models.CharField("Last name", max_length=255)
	email = models.EmailField()
	phone = models.CharField(max_length=20)
	message =  models.TextField()
	
	def __str__(self):
		return self.name