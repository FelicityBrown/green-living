# Generated by Django 2.2.13 on 2023-01-06 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('places', '0002_auto_20201016_0923'),
    ]

    operations = [
        migrations.AddField(
            model_name='place',
            name='updated_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
