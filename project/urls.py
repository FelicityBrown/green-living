from django.contrib import admin
from django.urls import path
from django.views.generic.base import TemplateView

from .views import submit


urlpatterns = [
    path('submit/confirmation/', TemplateView.as_view(template_name='submit_confirm.html')),
    path('submit/', submit),
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
]
