import json
import os
import shutil

from django.conf import settings
from django.core.files import File
from django.core.management.base import BaseCommand
from django.utils.text import slugify
from filer.models import Image, Folder
from filer.utils.generate_filename import randomized

from project.places.models import Place, Tag, PlaceTag


class Command(BaseCommand):

    def add_image_to_db(self, img_path):
        fn = os.path.basename(img_path)
        folder = Folder.objects.get(name='img')

        image = None
        with open(img_path, 'rb') as f:
            file_obj = File(f, name=fn)
            image = Image.objects.create(owner_id=1,
                                        original_filename=fn,
                                        file=file_obj,
                                        folder=folder)
        return image

    def handle(self, *args, **kwargs):
        Place.objects.all().delete()
        Image.objects.all().delete()
        PlaceTag.objects.all().delete()
        Tag.objects.all().delete()

        filer_path = os.path.join(settings.MEDIA_ROOT, 'filer_public')
        if os.path.exists(filer_path):
            shutil.rmtree(filer_path)

        print('Importing\n')

        with open('/home/felicity/Documents/Eco map/project/places/management/commands/places.json') as f:
            data = json.loads(f.read(), strict=False)

        for place in data:
            print(place['name'])

            img_base_path = '/home/felicity/Documents/Eco map/project'
            thumbnail = self.add_image_to_db(img_base_path + place['thumbnail'])
            business_logo = self.add_image_to_db(img_base_path + place['businessLogo'])
            photo1 = None
            if place['photos']:
                photo1 = self.add_image_to_db(img_base_path + place['photos'][0])
            photo2 = None
            if len(place['photos']) >= 2:
                photo2 = self.add_image_to_db(img_base_path + place['photos'][1])
            
            place_tags = []
            for tag_name in place['tags']:
                try:
                    parent_tag = Tag.objects.get(name=tag_name)
                except Tag.DoesNotExist:
                    parent_tag = Tag(name=tag_name)
                    parent_tag.save()

                if not 'displayTags' in place:
                    place_tags.append(parent_tag)
                else:
                    for display_tag_name in place['displayTags']:
                        if display_tag_name == tag_name:
                            place_tags.append(parent_tag)

            for i, tag_name in enumerate(place.get('displayTags', [])):
                try:
                    child_tag = Tag.objects.get(name=tag_name)
                except Tag.DoesNotExist:
                    parent_tag_name = place['tags'][i]
                    parent_tag = Tag.objects.get(name=parent_tag_name)
                    child_tag = Tag(name=tag_name, parent=parent_tag)
                    child_tag.save()
                if tag_name not in place['tags']:
                    place_tags.append(child_tag)


            place = Place(
                author_id=1,
                name=place['name'],
                latitude=place.get('coords', [None, None])[0],
                longitude=place.get('coords', [None, None])[1],
                address=place.get('address', None),
                short_description=place.get('shortDescription'),
                opening_hours='\n'.join(place.get('openingHours', [])),
                website_link=place.get('websiteLink', None),
                long_description='\n\n'.join(place.get('longDescription', [])),
                slug=slugify(place['name']),
                thumbnail=thumbnail,
                business_logo=business_logo,
                photo1=photo1,
                photo2=photo2,
                approved=True
            )
            place.save()

            for place_tag in place_tags:
                PlaceTag(place=place, tag=place_tag).save()