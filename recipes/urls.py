from django.urls import path
from . import views

urlpatterns = [
    path('api/search/', views.search_recipes, name='search_recipes'),
]
