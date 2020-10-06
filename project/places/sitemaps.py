import os
from datetime import datetime

from django.contrib import sitemaps
from django.urls import reverse

from .models import Place


class PlacesSitemap(sitemaps.Sitemap):
    changefreq = 'monthly'

    def items(self):
        return [(place.slug, place.created_at) for place in Place.objects.filter(approved=True)]

    def priority(self, item):
        priorities = {
            'index': 1.0,
        }
        return priorities.get(item, 0.5)

    def lastmod(self, item):
        return item[1]

    def location(self, item):
        return reverse('place_landing', kwargs={'slug': item[0]})
