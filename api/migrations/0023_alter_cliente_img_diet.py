# Generated by Django 4.1.9 on 2023-07-08 20:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0022_cliente_img_diet'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='img_diet',
            field=models.TextField(blank=True, default='', verbose_name='Dieta'),
        ),
    ]
