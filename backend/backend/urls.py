from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', views.RegisterView.as_view(), name='register'),
    path('api/token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/profile/', views.ProfileView.as_view(), name='profile'),

    path('api/articles/', views.ArticleListView.as_view(), name='articles'),
    path('api/articles/<int:pk>/', views.ArticleDetailView.as_view(), name='article-detail'),
    # path('api/aticles/create/', views.ArticleCreateView.as_view(), name='create_aticles'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)