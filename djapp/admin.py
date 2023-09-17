from django.contrib import admin
from djapp.models import Userlogin
from djapp.models import Candidat
from djapp.models import Offre
from djapp.models import Candidatures
from djapp.models import Entrelogin
from djapp.models import Message
from djapp.models import Hauptuser
from djapp.models import Article
from djapp.models import Avis

# Register your models here.
admin.site.register(Userlogin)
admin.site.register(Candidat)
admin.site.register(Offre)
admin.site.register(Candidatures)
admin.site.register(Entrelogin)
admin.site.register(Message)
admin.site.register(Hauptuser)
admin.site.register(Article)
admin.site.register(Avis)
