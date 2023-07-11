from django.contrib import admin


from .models import (
    Cliente,
    Pagos,
    Seguimiento,
    AboutInfo,
    Experiences,
    Prices,
    UserBodyImages,
    TrackForm,
)

admin.site.register(
    {
        Cliente,
        Pagos,
        Seguimiento,
        AboutInfo,
        Experiences,
        Prices,
        UserBodyImages,
        TrackForm,
    }
)
# Register your models here.
