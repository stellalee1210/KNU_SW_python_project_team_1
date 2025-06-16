from django import forms
from django.contrib.auth.forms import AuthenticationForm

class LoginForm(AuthenticationForm):
    remember_me = forms.BooleanField(required=False, label='로그인 상태 유지하기')
