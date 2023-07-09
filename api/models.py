from email.policy import default
from pickle import TRUE
from django.db import models


class Cliente(models.Model):
    nombre = models.CharField(
        max_length=100, verbose_name="Nombre", default="", blank=True
    )
    apellido_p = models.CharField(
        max_length=150, verbose_name="Apellido paterno", default="", blank=True
    )
    apellido_m = models.CharField(
        max_length=150, verbose_name="Apellido materno", default="", blank=True
    )
    genero = models.CharField(
        max_length=100, verbose_name="Genero", default="", blank=True
    )
    fecha_nacimiento = models.CharField(
        max_length=15,
        verbose_name="Fecha nacimiento",
        blank=True,
        null=True,
        default=None,
    )
    direccion = models.CharField(
        max_length=150, verbose_name="Residencia", default="", blank=True
    )
    telefono = models.CharField(verbose_name="Teléfono", blank=True, max_length=10)
    correo = models.CharField(
        max_length=100, verbose_name="Correo", default="", blank=True
    )
    estatura = models.FloatField(verbose_name="Estatura", default=0, blank=True)
    peso = models.FloatField(verbose_name="Peso", default=0, blank=True)
    enfermedades = models.CharField(
        max_length=250, verbose_name="Enfermedades", default="", blank=True
    )
    alergias = models.CharField(
        max_length=200, verbose_name="Alergias", default="", blank=True
    )
    dulces = models.CharField(default="", max_length=20)
    hr_entrenamiento = models.CharField(max_length=10, blank=True)
    hr_despertar = models.CharField(max_length=10, blank=True)
    foto_actual = models.TextField(verbose_name="foto actual", default="", blank=True)
    pago = models.TextField(verbose_name="pago", default="", blank=True)
    hr_dormir = models.CharField(max_length=20, blank=True)
    proteinas = models.CharField(
        max_length=700, verbose_name="Proteinas", default="", blank=True
    )
    carbohidratos = models.CharField(
        max_length=700, verbose_name="Carbohidratos", default="", blank=True
    )
    comidas = models.CharField(
        max_length=400,
        verbose_name="Comidas favoritas",
        default="",
        blank=True,
        null=True,
    )
    objetivo = models.CharField(
        max_length=300, verbose_name="Objetivo(s)", blank=True, null=True, default=None
    )
    accept_payment = models.BooleanField(default=False, verbose_name="aceptar pago")
    is_admin = models.BooleanField(default=False)
    password = models.CharField(
        max_length=200, verbose_name="Password", default="", blank=True
    )
    trainer_comments = models.CharField(
        max_length=100, default="", verbose_name="comentarios entrenador"
    )
    imageTraining = models.TextField(default="", verbose_name="Entrenamiento imagen ")
    service = models.CharField(default="", verbose_name="Servicio", max_length=100)
    favorite_meal = models.CharField(default="", verbose_name="", max_length=100)
    img_diet = models.TextField(default="", verbose_name="Dieta", blank=True)

    def __str__(self):
        return self.correo


class Pagos(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, blank=True)
    servicio_contratado = models.CharField(
        max_length=60, verbose_name="Tipo de servicio contratado", default=""
    )
    tipo_pago = models.CharField(max_length=150, verbose_name="Tipo de pago")
    costo = models.IntegerField(verbose_name="Costo del servicio", default=0)
    # ficha_pago=
    aceptado = models.BooleanField(default=False, verbose_name="Aceptar?")

    def __str__(self):
        return self.cliente


class Seguimiento(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, blank=True)
    estatura = models.FloatField(verbose_name="Estatura", default=0)
    peso = models.FloatField(verbose_name="Peso", default=0)
    # foto_actual=models.TextField(verbose_name)
    medidas = models.CharField(max_length=15, verbose_name="Medidas")


class AboutInfo(models.Model):
    image = models.TextField(verbose_name="imagen")
    text = models.CharField(max_length=300, verbose_name="Texto")


class Experiences(models.Model):
    image = models.TextField(
        verbose_name="image body",
        default="xdxd",
    )
    name = models.CharField(verbose_name="Name", max_length=50)
    text = models.CharField(verbose_name="opinion", max_length=300)

    def __str__(self) -> str:
        return self.name


class Prices(models.Model):
    diet = models.FloatField(verbose_name="Dieta")
    training = models.FloatField(verbose_name="Entrenamiento")
    drugs = models.FloatField(verbose_name="Farmacologia")
