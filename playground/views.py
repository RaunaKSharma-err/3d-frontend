from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def say_hello(request):
    return HttpResponse("hello world")


def showProduct(request):
    return render(request, "home.html")
