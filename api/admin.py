from django.contrib import admin


from .models import Cliente, Pagos, Seguimiento, AboutInfo, Experiences, Prices

admin.site.register({Cliente, Pagos, Seguimiento, AboutInfo, Experiences, Prices})
# Register your models here.
