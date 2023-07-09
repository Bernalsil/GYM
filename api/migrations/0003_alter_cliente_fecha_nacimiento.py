# Generated by Django 4.1.1 on 2023-02-26 20:12

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0002_alter_cliente_hr_entrenamiento"),
    ]

    operations = [
        migrations.AlterField(
            model_name="cliente",
            name="fecha_nacimiento",
            field=models.CharField(
                blank=True,
                default=None,
                max_length=15,
                null=True,
                verbose_name="Fecha nacimiento",
            ),
        ),
    ]
