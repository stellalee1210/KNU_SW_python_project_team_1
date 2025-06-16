from django.shortcuts import render

# Create your views here.
# users/views.py
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.shortcuts import render
from .serializers import RegisterSerializer, LoginSerializer


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

def login_page(request):
    return render(request, "loginPage/login.html")

def main_page(request):
    return render(request, "mainPage/main.html")

def signup_page(request):
    return render(request, "signupPage/signup.html")

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data  # validate()의 리턴값인 token을 받아온다.
        user = token.user
        # ✅ remember_me 체크
        remember_me = request.data.get("remember_me", True)
        if str(remember_me).lower() in ["false", "0", "no"]:  # 문자열로 올 수도 있으니 방어적으로 처리
            request.session.set_expiry(0)  # 브라우저 닫으면 만료
        else:
            request.session.set_expiry(60 * 60 * 24 * 14)  # 2주 정도 유지
        request.session.modified = True

        expiry = request.session.get_expiry_date()

        return Response({"token": token.key, "expires" : expiry, "username": user.username}, status=status.HTTP_200_OK)



class WhoAmIView(APIView):
        permission_classes = [IsAuthenticated]

        def get(self, request):
            return Response({"username": request.user.username})
