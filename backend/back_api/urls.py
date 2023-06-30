from django.contrib import admin
from django.urls import path, include, re_path
from routers import router
from django.conf.urls.static import static
from django.conf import settings
from mailingList.views import subscribe
from django.urls import path, re_path, include
from members import views

from members.views import *
from drf_yasg import openapi
from drf_yasg.views import get_schema_view as swagger_get_schema_view

schema_view = swagger_get_schema_view(
    openapi.Info(
        title='API',
        default_version='1.0.0',
        description='API documentation',
    ),
    public=True,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include((router.urls, 'courses'), namespace='courses')),
    path('api/', include((router.urls, 'mailingList'), namespace='mailingList')),
    path('api/', include((router.urls, 'members'), namespace='members')),
    path('api/', include((router.urls, 'visitLog'), namespace='visitLog')),
    path('swagger/schema/', schema_view.with_ui('swagger', cache_timeout=0), name='swagger-schema'),
    path('subscribe/', subscribe, name='subscribe'),
    path('cent/', views.cent_view, name='cent'),
    path('auth/', views.auth_view, name='auth'),
    # url('', include('social_django.urls', namespace='social'))
    path('api/v1/members/', MembersAPIList.as_view()),
    path('api/v1/members/<int:pk>/', MembersAPIUpdate.as_view()),
    path('api/v1/membersdelete/<int:pk>/', MembersAPIDestroy.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
