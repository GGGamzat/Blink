from django.urls import path
from .views import ArticleListCreateView, RegisterView

urlpatterns = [
    path("articles/", ArticleListCreateView.as_view(), name="articles"),
    path("articles/<int:pk>/", ArticleDetailView.as_view(), name="article-detail"),

    path('register/', RegisterView.as_view(), name="register"),
    # path('login/', ),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('token/refresh/', TokenRefreshView.as_view(), name="token_refresh"),
]