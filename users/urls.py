#users/urls.py
from django.urls import path
from .views import RegisterView, LoginView, login_page, main_page, signup_page, WhoAmIView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('loginPage/', login_page),
    path('mainPage/', main_page),
    path('signupPage/', signup_page),
    path('whoami/', WhoAmIView.as_view()),

]
