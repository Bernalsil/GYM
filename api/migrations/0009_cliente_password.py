# Generated by Django 4.1.1 on 2023-04-12 03:23

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0008_cliente_is_admin"),
    ]

    operations = [
        migrations.AddField(
            model_name="cliente",
            name="password",
            field=models.CharField(
                blank=True, default="", max_length=200, verbose_name="Password"
            ),
        ),
    ]