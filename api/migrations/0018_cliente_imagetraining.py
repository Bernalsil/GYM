# Generated by Django 4.1.9 on 2023-07-03 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_cliente_trainer_comments'),
    ]

    operations = [
        migrations.AddField(
            model_name='cliente',
            name='imageTraining',
            field=models.TextField(default='', verbose_name='Entrenamiento imagen '),
        ),
    ]