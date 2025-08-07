from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from .form import ReservationForm


# Create your views here.
def hello_world(request):
    return HttpResponse("Hello world")


class hello_Birgunj(View):
    def get(self, request):
        return HttpResponse("hello Birgunj")


def Home(request):
    form = ReservationForm()

    if request.method == "POST":
        form = ReservationForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse("success")
    return render(request, "index.html", {"form": form})
