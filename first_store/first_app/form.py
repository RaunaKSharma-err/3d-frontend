from django import forms
from .models import Reserrvation


class ReservationForm(forms.ModelForm):
    class Meta:
        model = Reserrvation
        fields = "__all__"
