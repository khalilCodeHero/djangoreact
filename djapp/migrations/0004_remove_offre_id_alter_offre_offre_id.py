# Generated by Django 4.2.4 on 2023-08-28 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djapp', '0003_offre_alter_candidat_candidat_bacplus_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='offre',
            name='id',
        ),
        migrations.AlterField(
            model_name='offre',
            name='offre_id',
            field=models.BigAutoField(primary_key=True, serialize=False),
        ),
    ]
