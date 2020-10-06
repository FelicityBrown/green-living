from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.urls import path
from django.views.generic.base import TemplateView

from .sitemaps import StaticViewSitemap
from project.places.views import add_listing, places_api, place_landing
from project.places.sitemaps import PlacesSitemap

sitemaps = {
    'static': StaticViewSitemap,
    'places': PlacesSitemap,
}

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
    path('admin/', admin.site.urls),
    path('about/', TemplateView.as_view(template_name='about.html'), name='about'),
    path('blog/', TemplateView.as_view(template_name='blog.html')),
    path('actiongroups/', TemplateView.as_view(template_name='action_groups.html')),
    path('addlisting/', add_listing, name='add_listing'),
    path('addlisting/confirmation/', TemplateView.as_view(template_name='add_listing_confirm.html')),
    path('place/<slug:slug>/', place_landing, name='place_landing'),
    path('places.json', places_api),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

