from django.views import View
import json
from django.http import JsonResponse, HttpResponse
from stripe import Price
from .models import Cliente, AboutInfo, Experiences, Prices
from django.db.models import Q
from django.forms.models import model_to_dict


class AboutInfoView(View):
    def get(self, request):
        about = AboutInfo.objects.first()
        return JsonResponse({"about": model_to_dict(about)})

    def put(self, request):
        jd = json.loads(request.body)
        about = AboutInfo.objects.filter(id=1).update(**jd)
        return HttpResponse("oki", status=200)


class Formulario(View):
    def get(self, request):
        return JsonResponse({"message": "nice"})

    def post(self, request):
        jd = json.loads(request.body)
        email = jd["correo"]
        phone = jd["telefono"]
        try:
            client = Cliente.objects.get(Q(correo=email) | Q(telefono=phone))
            client.__dict__.update(jd)
            client.save()
            return HttpResponse("OK", status=200)
        except Cliente.DoesNotExist:
            return HttpResponse("bad", status=404)


class Login(View):
    def post(self, request):
        jd = json.loads(request.body)
        credential = jd.get("credential", None)
        # print(credential, "here")
        try:
            user = Cliente.objects.get(Q(correo=credential) | Q(telefono=credential))

            if user.password == jd["password"]:
                return JsonResponse({"user": model_to_dict(user)})
            else:
                return HttpResponse("wrong", status=500)
        except Cliente.DoesNotExist:
            return HttpResponse("not found", status=404)


class SignUp(View):
    def post(self, request):
        jd = json.loads(request.body)
        email = jd["email"]
        phone = jd["phone"]
        try:
            Cliente.objects.get(Q(correo=email) | Q(telefono=phone))
            return HttpResponse("badass", status=500)
        except Cliente.DoesNotExist:
            Cliente.objects.create(
                correo=jd["email"],
                telefono=jd["phone"],
                password=jd["password"],
            )
            return HttpResponse("ok", status=200)


class Testing(View):
    def post(self, request):
        return JsonResponse({"message": "success"})


class PricesView(View):
    def get(self, request):
        price = Prices.objects.get(id=1)
        price = model_to_dict(price)
        return JsonResponse({"prices": price})


class Exps(View):
    def get(self, request):
        exps = list(Experiences.objects.values())
        return JsonResponse({"exps": exps})

    def post(self, request):
        jd = json.loads(request.body)
        Experiences.objects.create(**jd)
        return HttpResponse("oki", status=200)


class ClientsView(View):
    def get(self, request, client_id=0):
        if client_id > 0:
            client = Cliente.objects.filter(id=client_id).first()
            client = model_to_dict(client)
            return JsonResponse({"client": client})
        else:
            clients = list(Cliente.objects.values())[::-1]
            return JsonResponse({"clients": clients})

    def put(self, request, client_id):
        jd = json.loads(request.body)
        client = Cliente.objects.get(id=client_id)
        client.trainer_comments = jd["comments"]
        client.accept_payment = jd["approved"]
        if len(jd["imageTraining"]) > 0:
            client.imageTraining = jd["imageTraining"]
        if len(jd["img_diet"]) > 0:
            client.img_diet = jd["img_diet"]
        client.save()
        return HttpResponse("oki", status=200)
