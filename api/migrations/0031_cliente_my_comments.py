# Generated by Django 4.1.9 on 2023-07-11 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0030_trackform_foto_actual'),
    ]

    operations = [
        migrations.AddField(
            model_name='cliente',
            name='my_comments',
            field=models.TextField(blank=True, default='', null=True, verbose_name='comentarios'),
        ),
    ]
