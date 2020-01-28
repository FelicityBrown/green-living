from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from django.views.generic.base import TemplateView

from project.places.views import add_listing, places_api


urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('addlisting/', add_listing),
    path('addlisting/confirmation/', TemplateView.as_view(template_name='add_listing_confirm.html')),
    path('admin/', admin.site.urls),
    path('blog/', TemplateView.as_view(template_name='blog.html')),
    path('places.json', places_api)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

