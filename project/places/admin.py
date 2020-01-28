from django.contrib import admin

from .models import Place, Tag, PlaceTag

class PlaceTagInline(admin.TabularInline):
    model=PlaceTag
    fields=('tag',)

class PlaceAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}
    exclude = ('created_at',)
    list_display = ('name', 'created_at', 'approved', 'tag_display')
    list_ordering = ('-created_at',)
    list_filter = ('approved', 'created_at', 'place_tags__tag')
    search_fields = ('name', 'short_description', 'long_description', )
    inlines= [
        PlaceTagInline
    ]

    def tag_display(self, instance):
        return ', '.join([place_tag.tag.name for place_tag in instance.place_tags.all()])

admin.site.register(Place, PlaceAdmin)

class TagAdmin(admin.ModelAdmin):
    list_display = ('name', 'parent', 'created_at')
    exclude = ('created_at',)

admin.site.register(Tag, TagAdmin)
admin.site.register(PlaceTag)