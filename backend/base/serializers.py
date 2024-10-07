from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import Product

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(method_name='getName')
    isAdmin = serializers.SerializerMethodField(method_name='getAdminStatus')

    class Meta:
        model = User
        fields = ['id', 'name', 'username', 'email', 'isAdmin']

    def getAdminStatus(self, user: User):
        return user.is_staff

    def getName(self, user: User):
        name = user.first_name
        if(name == ''): 
            name = user.email
        return name
    


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(method_name='getToken')

    class Meta:
        model = User
        fields = ['id', 'name', 'username', 'email', 'isAdmin', 'token']

    def getToken(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
    # id = serializers.IntegerField()
    # name = serializers.CharField(max_length=255)
    # price = serializers.DecimalField(max_digits=7, decimal_places=2)