# Generated by Django 4.2.4 on 2023-08-30 13:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djapp', '0004_remove_offre_id_alter_offre_offre_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Candidatures',
            fields=[
                ('candid_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('candid_soc', models.TextField()),
                ('candid_post', models.TextField()),
                ('candid_date', models.DateField()),
                ('candid_canname', models.TextField()),
                ('candid_canemail', models.TextField()),
                ('candid_canadresse', models.TextField()),
                ('candid_canexper', models.BigIntegerField()),
                ('candid_canbacplus', models.BigIntegerField()),
                ('candid_canmotiv', models.TextField()),
            ],
        ),
    ]