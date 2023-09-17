from rest_framework import serializers
from rest_framework.serializers import Serializer, FileField
from djapp.models import Userlogin
from djapp.models import Candidat
from djapp.models import Offre
from djapp.models import Candidatures
from djapp.models import Message
from djapp.models import Entrelogin
from djapp.models import Hauptuser
from djapp.models import Article
from djapp.models import Avis

class UserloginSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Userlogin
        fields = ['user_id', 'user_email', 'user_password']

class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Article
        fields = ['article_id', 'article_titre', 'article_img','article_content']

class AvisSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Avis
        fields = ['avis_id', 'avis_name', 'avis_post','avis_eval','avis_content']
        
class HauptuserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Hauptuser
        fields = ['huser_id', 'huser_email', 'huser_password']

class EntreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Entrelogin
        fields = ['entre_id','entre_name', 'entre_email', 'entre_password']

class CandidatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Candidat
        fields = ['candidat_id','candidat_exper', 'candidat_bacplus']

class OffreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Offre
        fields = ['offre_id','offre_adresse','offre_soc','offre_post','offre_date','offre_description','offre_img']       

class CandidaturesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Candidatures
        fields = ['candid_id','candid_soc','candid_post','candid_date','candid_canname','candid_canemail','candid_canadresse','candid_canexper','candid_canbacplus','candid_canmotiv','candid_cv']         

class MessageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Message
        fields = ['message_id','message_name','message_email','message_subject','message_mess']        


# Serializers define the API representation.
class UploadSerializer(Serializer):
    file_uploaded = FileField()
    class Meta:
        fields = ['file_uploaded']


  