from django.shortcuts import render
from rest_framework import generics, permissions
from serializer import UserSerializer, ArticleSerializer
from django.contrib.auth.models import User
from .models import Article


# Регистрация пользователя
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


# Просмотр и добавление постов
class ArticleListCreateView(generics.ListCreateAPIView):
    queryset = Article.objects.all().order_by("-date")
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


# Просмотр одного поста
class ArticleDetailView(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [permissions.AllowAny]