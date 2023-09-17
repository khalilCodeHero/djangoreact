from django.shortcuts import render
from rest_framework import viewsets,generics,status
from rest_framework.viewsets import ViewSet
from .serializers import UploadSerializer
from djapp.serializers import UserloginSerializer
from djapp.models import Userlogin
from djapp.serializers import CandidatSerializer
from djapp.models import Candidat
from djapp.serializers import OffreSerializer
from djapp.models import Offre
from djapp.serializers import CandidaturesSerializer
from djapp.models import Candidatures
from djapp.serializers import EntreSerializer
from djapp.models import Entrelogin
from djapp.models import Hauptuser
from djapp.serializers import HauptuserSerializer
from djapp.models import Article
from djapp.serializers import ArticleSerializer
from djapp.models import Avis
from djapp.serializers import AvisSerializer
from djapp.serializers import MessageSerializer
from djapp.models import Message
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.files.storage import default_storage
from django.core.files.storage import FileSystemStorage
from django.http import FileResponse
from django.core.mail import send_mail
from django.conf import settings


import os
import pandas as pd
import numpy as np
from pandasai import PandasAI
from pandasai.llm.openai import OpenAI
from rest_framework.views import APIView

@api_view(['POST'])
def ping(request):
    offre_soc = request.data.get('offre_soc')
    offre_post = request.data.get('offre_post')
    if offre_soc:
        
        data_dict = Candidatures.objects.filter(candid_soc=offre_soc, candid_post=offre_post)
        data1=[{"candidat": i.candid_canname,"experiences": i.candid_canexper,"certificates": i.candid_canbacplus} for i in data_dict]
                    
        llm = OpenAI(api_token="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")

        pandas_ai = PandasAI(llm, conversational=False)

        df = pd.DataFrame(data1)

        res=pandas_ai(df,"which are the tree best Candidats with the heighest certificates and experiences ?")
        response = res
        return Response({'response': response})
    else:
        return Response({'error': 'No message provided'}, status=400)

@api_view(['POST'])
def ping1(request):
    message = request.data.get('messagem')
    candidmail = request.data.get('emailm')

    subject="Reply Candidature"
    emailfrom=settings.EMAIL_HOST_USER

    if message:
        recipient_list = [candidmail, ]
        send_mail(
            subject,
            message,
            emailfrom,
            recipient_list,
            fail_silently=False,
            
        )
        return Response({'response': "message"})
    else:
        return Response({'error': 'No message provided'}, status=400)
    



@api_view(['POST'])
def ping2(request):
    emailps = request.data.get('emailps')

    subject="Password Recovery"
    lostpassword=Userlogin.objects.filter(user_email=emailps).values_list('user_password', flat=True)
    lostpassword1=str(list(lostpassword)[0])
    

    emailfrom=settings.EMAIL_HOST_USER
 
    if emailps:
        recipient_list = [emailps,]
        send_mail(
            subject,
            "Password : "+lostpassword1,
            emailfrom,
            recipient_list,
            fail_silently=False,
            
        )
        return Response({'response': "message"})
    else:
        return Response({'error': 'No message provided'}, status=400)
    



@api_view(['POST'])
def ping3(request):
    emailps = request.data.get('emailps')

    subject="Password Recovery"
    lostpassword=Entrelogin.objects.filter(entre_email=emailps).values_list('entre_password', flat=True)
    lostpassword1=str(list(lostpassword)[0])
    

    emailfrom=settings.EMAIL_HOST_USER
 
    if emailps:
        recipient_list = [emailps,]
        send_mail(
            subject,
            "Password : "+lostpassword1,
            emailfrom,
            recipient_list,
            fail_silently=False,
            
        )
        return Response({'response': "message"})
    else:
        return Response({'error': 'No message provided'}, status=400)
    


@api_view(['POST'])
def ping4(request):
    emailps = request.data.get('emailps')

    subject="Password Recovery"
    lostpassword=Hauptuser.objects.filter(huser_email=emailps).values_list('huser_password', flat=True)
    lostpassword1=str(list(lostpassword)[0])
    

    emailfrom=settings.EMAIL_HOST_USER
 
    if emailps:
        recipient_list = [emailps,]
        send_mail(
            subject,
            "Password : "+lostpassword1,
            emailfrom,
            recipient_list,
            fail_silently=False,
            
        )
        return Response({'response': "message"})
    else:
        return Response({'error': 'No message provided'}, status=400)
    



# Create your views here.
class UserloginViewSet(viewsets.ModelViewSet):
    queryset = Userlogin.objects.all()
    serializer_class = UserloginSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class AvisViewSet(viewsets.ModelViewSet):
    queryset = Avis.objects.all()
    serializer_class = AvisSerializer

class HauptuserViewSet(viewsets.ModelViewSet):
    queryset = Hauptuser.objects.all()
    serializer_class = HauptuserSerializer


# Create your views here.
class CandidatViewSet(viewsets.ModelViewSet):
 
    queryset =Candidat.objects.all()
    
    serializer_class = CandidatSerializer



class OffreViewSet(viewsets.ModelViewSet):
 
    queryset =Offre.objects.all()
    
    serializer_class = OffreSerializer
class CandidaturesViewSet(viewsets.ModelViewSet):
 
    queryset =Candidatures.objects.all()
    
    serializer_class = CandidaturesSerializer  

class EntreViewSet(viewsets.ModelViewSet):
 
    queryset =Entrelogin.objects.all()
    
    serializer_class = EntreSerializer  

class MessageViewSet(viewsets.ModelViewSet):
 
    queryset =Message.objects.all()
    
    serializer_class = MessageSerializer

class UploadViewSet(ViewSet):
    serializer_class = UploadSerializer

    def list(self, request):
        return Response("GET API")

    def create(self, request):
        folder='my_folder/' 
        myfile = request.FILES.get('filer')
        candidatId = request.data.get('candidatId')
        fs = FileSystemStorage(location=folder) #defaults to   MEDIA_ROOT  
        thenames=candidatId+"ppp123PPP@"+myfile.name
        filename = fs.save(thenames, myfile)
        file_url = fs.url(filename)    
        content_type = file_url
        response = "POST API and you have uploaded a {} file".format(content_type)+" and file : "
        return Response(response)


      

def index(request):
    return render(request,'index.html')
