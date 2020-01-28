# Generated by Django 2.2.7 on 2020-01-25 13:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import filer.fields.image


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        migrations.swappable_dependency(settings.FILER_IMAGE_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('latitude', models.DecimalField(blank=True, decimal_places=6, max_digits=9, null=True)),
                ('longitude', models.DecimalField(blank=True, decimal_places=6, max_digits=9, null=True)),
                ('address', models.CharField(blank=True, max_length=200, null=True)),
                ('opening_hours', models.TextField(blank=True, null=True)),
                ('short_description', models.TextField(blank=True, max_length=500, null=True)),
                ('website_link', models.URLField(blank=True, null=True)),
                ('long_description', models.TextField(blank=True, null=True)),
                ('slug', models.SlugField()),
                ('approved', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(blank=True, null=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('business_logo', filer.fields.image.FilerImageField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='place_business_logo', to=settings.FILER_IMAGE_MODEL)),
                ('photo1', filer.fields.image.FilerImageField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='place_photo1', to=settings.FILER_IMAGE_MODEL)),
                ('photo2', filer.fields.image.FilerImageField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='place_photo2', to=settings.FILER_IMAGE_MODEL)),
                ('thumbnail', filer.fields.image.FilerImageField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='place_thumbnail', to=settings.FILER_IMAGE_MODEL)),
            ],
        ),
    ]