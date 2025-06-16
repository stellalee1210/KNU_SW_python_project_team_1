#user_auth_project/urls.py
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),
    path('api/recipes/', include('recipes.urls')),
    path('loginpage/', TemplateView.as_view(template_name='login.html')),
    path('mainpage/', TemplateView.as_view(template_name='main.html')),
    path('signuppage/', TemplateView.as_view(template_name='signup.html')),
    path('searchpage/', TemplateView.as_view(template_name='search.html')),
    path('recipedetail/', TemplateView.as_view(template_name='RecipeDetail.html')),
]