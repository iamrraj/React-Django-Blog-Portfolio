# Generated by Django 2.0.4 on 2019-02-16 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0006_project_slink'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='slink',
            new_name='github',
        ),
        migrations.AddField(
            model_name='project',
            name='date',
            field=models.DateField(auto_now=True),
        ),
        migrations.AddField(
            model_name='project',
            name='readtime',
            field=models.CharField(max_length=10, null=True),
        ),
    ]
