from django.core.cache import cache
from django.core.cache.utils import make_template_fragment_key
from django.db import models
from django.utils import timezone
from filer.fields.image import FilerImageField


class Place(models.Model):
    author = models.ForeignKey (
        'auth.User',
        on_delete=models.CASCADE, #deletes all the associated posts/blog posts etc associate with the user in question
    )
    name                = models.CharField(max_length=50)
    latitude            = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)
    longitude           = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)
    address             = models.CharField(max_length=200, blank=True, null=True)
    opening_hours       = models.TextField(blank=True, null=True)
    short_description   = models.TextField(max_length=500, blank=True, null=True)
    thumbnail           = FilerImageField(related_name='place_thumbnail', blank=True, null=True, on_delete=models.SET_NULL)
    business_logo       = FilerImageField(related_name='place_business_logo', blank=True, null=True, on_delete=models.SET_NULL)
    website_link        = models.URLField(blank=True, null=True)
    long_description    = models.TextField(blank=True, null=True)
    photo1              = FilerImageField(related_name='place_photo1', blank=True, null=True, on_delete=models.SET_NULL)
    photo2              = FilerImageField(related_name='place_photo2', blank=True, null=True, on_delete=models.SET_NULL)
    slug                = models.SlugField(unique=True)
    approved            = models.BooleanField(default=False)
    created_at          = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        now = timezone.now()
        if not self.created_at:
            self.created_at = now
        super(Place, self).save()

        # Clear cache
        key = make_template_fragment_key('api_places')
        cache.delete(key)

    def api_tags(self):
        tags = []
        for place_tag in self.place_tags.all():
            tag = place_tag.tag
            if tag.parent:
                tags.append(tag.parent.name)
            else:
                tags.append(tag.name)
        return tags

    def api_display_tags(self):
        tags = []
        for place_tag in self.place_tags.all():
            tag = place_tag.tag
            tags.append(tag.name)
        return tags

class Tag(models.Model):
    name                = models.CharField(max_length=50)
    parent              = models.ForeignKey('Tag', related_name='child_tag', blank=True, null=True, on_delete=models.CASCADE)
    created_at          = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        now = timezone.now()
        if not self.created_at:
            self.created_at = now
        super(Tag, self).save()

    class Meta:
        ordering = ['name']

class PlaceTag(models.Model):
    place               = models.ForeignKey('Place', related_name='place_tags', on_delete=models.CASCADE)
    tag                 = models.ForeignKey('Tag', related_name='place_tags', on_delete=models.CASCADE)

    def __str__(self):
        return self.place.name + ' - ' + self.tag.name
