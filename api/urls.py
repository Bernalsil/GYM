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
    UserImagesView,
    TrackFormView,
    ClientCommentsView,
)
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path("form", csrf_exempt(Formulario.as_view()), name="Formulario"),
    path("test", csrf_exempt(Testing.as_view()), name="Test"),
    path("login", csrf_exempt(Login.as_view()), name="Test"),
    path("signup", csrf_exempt(SignUp.as_view()), name="Test"),
    path("about", csrf_exempt(AboutInfoView.as_view()), name="Test"),
    path(
        "user_comments/<int:user_id>",
        csrf_exempt(ClientCommentsView.as_view()),
        name="comments",
    ),
    path("exps", csrf_exempt(Exps.as_view()), name="Test"),
    path(
        "user_images/<int:user_id>",
        csrf_exempt(UserImagesView.as_view()),
        name="user_images",
    ),
    path("clients", csrf_exempt(ClientsView.as_view()), name="Test"),
    path("track_form", csrf_exempt(TrackFormView.as_view()), name="trackform"),
    path(
        "track_form/<int:user_id>",
        csrf_exempt(TrackFormView.as_view()),
        name="trackform",
    ),
    path("prices", csrf_exempt(PricesView.as_view()), name="Test"),
    path("clients/<int:client_id>", csrf_exempt(ClientsView.as_view()), name="Test"),
]
