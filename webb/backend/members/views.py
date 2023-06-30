from rest_framework import viewsets
from rest_framework import generics
from members.models import Members, User, Log
from members.serializers import MembersSerializer
from django.shortcuts import render
from django.views.generic import CreateView
from .forms import AuthForm
# from members.views import MembersViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permissions import IsAdminOrReadOnly, IsOwnerOrReadOnly
# from .permissions import IsAdminOrReadOnly, IsOwnerOrReadOnly
# class MembersViewSet(viewsets.ModelViewSet):
#     serializer_class = MembersSerializer
#     def get_queryset(self):
#         return Members.objects.all()
class MembersAPIList(generics.ListCreateAPIView):
    queryset = Members.objects.all()
    serializer_class = MembersSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, )


class MembersAPIUpdate(generics.RetrieveUpdateAPIView):
    queryset = Members.objects.all()
    serializer_class = MembersSerializer
    permission_classes = (IsOwnerOrReadOnly, )


class MembersAPIDestroy(generics.RetrieveDestroyAPIView):
    queryset = Members.objects.all()
    serializer_class = MembersSerializer
    permission_classes = (IsAdminOrReadOnly, )


def cent_view(request):
    return render(request,'cent.html')

def auth_view(request):
    if request.method == 'GET':
        form = AuthForm()
        return render(request, 'auth.html', {'form':form})
    elif request.method == 'POST':
        form = AuthForm(request.POST)
        if form.is_valid():
            user_data = form.cleaned_data
            method = request.method
            user_agent = request.headers["User-Agent"]
            url = request.get_full_path()
            if len (User.objects.filter(**user_data)) > 0:
                log = Log()
                log.method = method
                log.user = User.objects.get(**user_data)
                log.user_agent = user_agent
                log.url = url
                log.save()
            return render(request, 'auth.html', {'error': 'Всё ок'})
        else:
            return render(request, 'auth.html', {'error': 'Ошибка'})