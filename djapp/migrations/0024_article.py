# Generated by Django 4.2.4 on 2023-09-15 19:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djapp', '0023_rename_offre_img_offre_offre_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('article_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('article_titre', models.TextField()),
                ('article_img', models.ImageField(upload_to='')),
                ('article_content', models.TextField()),
            ],
        ),
    ]