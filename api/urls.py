from django.urls import path
from .views import (
    Formulario,
    PricesView,
    Testing,
    Login,
    SignUp,
    AboutInfoView,
    Exps,
    ClientsView,
)
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path("form", csrf_exempt(Formulario.as_view()), name="Formulario"),
    path("test", csrf_exempt(Testing.as_view()), name="Test"),
    path("login", csrf_exempt(Login.as_view()), name="Test"),
    path("signup", csrf_exempt(SignUp.as_view()), name="Test"),
    path("about", csrf_exempt(AboutInfoView.as_view()), name="Test"),
    path("exps", csrf_exempt(Exps.as_view()), name="Test"),
    path("clients", csrf_exempt(ClientsView.as_view()), name="Test"),
    path("prices", csrf_exempt(PricesView.as_view()), name="Test"),
    path("clients/<int:client_id>", csrf_exempt(ClientsView.as_view()), name="Test"),
]
