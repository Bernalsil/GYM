# Generated by Django 4.1.1 on 2023-04-13 21:13

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0011_aboutinfo"),
    ]

    operations = [
        migrations.CreateModel(
            name="Experiences",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("image", models.TextField(verbose_name="image body")),
                ("user_name", models.CharField(max_length=50, verbose_name="Name")),
                ("opinion", models.CharField(max_length=300, verbose_name="opinion")),
            ],
        ),
    ]
