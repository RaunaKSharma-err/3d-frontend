from django.urls import path
from . import views

urlpatterns = [
    path("function", views.hello_world),
    path("class", views.hello_Birgunj.as_view()),
]
