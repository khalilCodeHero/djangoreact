from django.contrib import admin
from django.urls import path , include
from rest_framework import routers
from djapp.views import UserloginViewSet
from djapp.views import CandidatViewSet
from djapp.views import OffreViewSet
from djapp.views import CandidaturesViewSet
from djapp.views import EntreViewSet
from djapp.views import MessageViewSet
from djapp.views import ping
from djapp.views import ping1
from djapp.views import ping2
from djapp.views import ping3
from djapp.views import ping4
from .views import UploadViewSet
from djapp.views import HauptuserViewSet
from djapp.views import ArticleViewSet
from djapp.views import AvisViewSet
from . import views
from django.conf import settings


router=routers.DefaultRouter()
router.register(r'Userlogin',UserloginViewSet)
router.register(r'Candidat',CandidatViewSet) 
router.register(r'Offre',OffreViewSet)
router.register(r'Candidatures',CandidaturesViewSet) 
router.register(r'Entrelogin',EntreViewSet)
router.register(r'Message',MessageViewSet)
router.register(r'Hauptuser',HauptuserViewSet) 
router.register(r'Article',ArticleViewSet) 
router.register(r'Avis',AvisViewSet) 
router.register(r'upload', UploadViewSet, basename="upload")

react_routes = getattr(settings, 'react_routes', [])

urlpatterns = [
    path('admin/', admin.site.urls),
    path('ping/', ping, name='ping'),
    path('ping1/', ping1, name='ping1'),
    path('ping2/', ping2, name='ping2'),
    path('ping3/', ping3, name='ping3'),
    path('ping4/', ping4, name='ping4'),

    path('',views.index,name='index'),
    path('Loginc',views.index),
    path('Logine',views.index),
    path('huser',views.index),
    path('Contact',views.index),
    path('Faqs',views.index),
    path('Registerc',views.index),
    path('Registere',views.index),
    path('Offrem',views.index),
    path('searchres',views.index),
    path('Offrelist',views.index),
    path('ListCandidatures',views.index),
    path('Dashb',views.index),
        path('', include(router.urls)),

]
