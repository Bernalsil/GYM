# Generated by Django 4.1.9 on 2023-07-08 03:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_prices_cliente_favorite_meal_cliente_service'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prices',
            name='diet',
            field=models.IntegerField(verbose_name='Dieta'),
        ),
        migrations.AlterField(
            model_name='prices',
            name='drugs',
            field=models.IntegerField(verbose_name='Farmacologia'),
        ),
        migrations.AlterField(
            model_name='prices',
            name='training',
            field=models.IntegerField(verbose_name='Entrenamiento'),
        ),
    ]
