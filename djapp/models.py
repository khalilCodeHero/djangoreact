from django.db import models

# Create your models here.
class Userlogin(models.Model):
    user_id=models.BigAutoField(primary_key=True)
    user_email=models.TextField()
    user_password=models.TextField()

    def __str__(self):
        return self.user_email
    
class Hauptuser(models.Model):
    huser_id=models.BigAutoField(primary_key=True)
    huser_email=models.TextField()
    huser_password=models.TextField()

    def __str__(self):
        return self.huser_email


class Entrelogin(models.Model):
    entre_id=models.BigAutoField(primary_key=True)
    entre_name=models.TextField()
    entre_email=models.TextField()
    entre_password=models.TextField()

    def __str__(self):
        return self.entre_name
class Message(models.Model):
    message_id=models.BigAutoField(primary_key=True)
    message_name=models.TextField()
    message_email=models.TextField()
    message_subject=models.TextField()
    message_mess=models.TextField()

    def __str__(self):
        return self.message_subject    
# Create your models here.
class Candidat(models.Model):
    candidat_id=models.BigIntegerField()
    
    candidat_exper=models.IntegerField()
    candidat_bacplus=models.IntegerField()
    
    def __str__(self):
        return "candidat"

# Create your models here.
class Offre(models.Model):
    offre_id=models.BigAutoField(primary_key=True)
    offre_adresse=models.TextField(default="maroc")
    offre_soc=models.TextField()
    offre_post=models.TextField()
    offre_date=models.DateField()
    offre_description=models.TextField()
    offre_img=models.ImageField(default='WIN_20230411_04_14_39_Pro.jpg')
    
    def __str__(self):
        return self.offre_post    
# Create your models here.
class Candidatures(models.Model):
    candid_id=models.BigAutoField(primary_key=True)
    candid_soc=models.TextField()
    candid_post=models.TextField()
    candid_date=models.DateField()
    candid_canname=models.TextField()
    candid_canemail=models.TextField()
    candid_canadresse=models.TextField()
    candid_canexper=models.BigIntegerField()
    candid_canbacplus=models.BigIntegerField()
    candid_canmotiv=models.TextField()
    candid_cv=models.FileField()
    
    def __str__(self):
        return self.candid_soc 

class Article(models.Model):
    
    article_id=models.BigAutoField(primary_key=True)
    article_titre=models.TextField()
    article_img=models.ImageField()
    article_content=models.TextField()    
    
    def __str__(self):
        return self.article_titre     

class Avis(models.Model):
    
    avis_id=models.BigAutoField(primary_key=True)
    avis_name=models.TextField()
    avis_post=models.TextField()
    avis_eval=models.IntegerField()
    avis_content=models.TextField()    
    
    def __str__(self):
        return self.avis_name     

  