from django.db import models
from PIL import Image as IM
from django.core.files import File  # you need this somewhere
from io import BytesIO

# Create your models here.
class Image(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='input', default = 'C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/AI_module/imgs/horse2zebra.gif')
    output = models.ImageField(upload_to='output', default = 'C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/AI_module/imgs/horse2zebra.gif')

    def save(self, *args, **kwargs):
        self.output = mani(self.image, args[0])
        print(self.output)
        print("ASDASDASD")

        super().save(*args, **kwargs)

def mani(image, path):
        im = IM.open(path)

        thumb_io = BytesIO() # create a BytesIO object

        im.save(thumb_io, 'JPEG', quality=85) # save image to BytesIO object

        thumbnail = File(thumb_io, name=image.name) # create a django friendly File object

        return thumbnail