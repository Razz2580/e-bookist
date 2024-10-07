from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('user/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/', views.users),
    path('user/register/', views.rgister_user),
    path('user/profile/', views.user_profile),
    path('product/', views.product_list),
    path('product/<int:id>/', views.product_detail)
]