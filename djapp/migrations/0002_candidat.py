# Generated by Django 4.2.4 on 2023-08-14 19:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Candidat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('candidat_id', models.BigIntegerField()),
                ('candidat_exper', models.BigIntegerField()),
                ('candidat_bacplus', models.BigIntegerField()),
            ],
        ),
    ]
