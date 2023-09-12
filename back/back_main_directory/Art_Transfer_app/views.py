import os
import urllib.request
from django.core.files import File  # you need this somewhere
from django.shortcuts import render
from django.core.files.storage import FileSystemStorage

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from PIL import Image as IM
from PIL import ImageFile
from io import BytesIO
from .models import Image
from .serializers import ImageSerializer
ImageFile.LOAD_TRUNCATED_IMAGES = True


# Create your views here.

def index(request):
    return render(request, "main/index.html")


@api_view(['POST'])
def image_translate(request, format=None):
    """
    이미지 inference
    request.data = {
        'file_name':
        'path':
        'artist':
    }
    """
    if request.method == "POST":
        """
        path에 있는 이미지를 inference 후 저장
        """
        response_data = {
            'status': 'C200',
            'comment': 'success',
            'path': ''
        }
        print("1111111111111111111111111111")


        artist = request.POST['artist']
        #print(artist)
        
        b = Image()
        b.image = request.FILES['file']
        print("222222222222222222222222222222222222222222")


        file_t = request.FILES['file']
        fs = FileSystemStorage()
        print("33333333333333333333333333333333333")

        
        filename = fs.save(b.image.name, file_t)
        print("444444444444444444444444444444444444444444444444")


        OS = "window" ### TODO if MAC, OS = "MAC" ###
        base_path = "C:/Users/vkstk/OneDrive/바탕 화면/"

        if OS == "window":
            #os.system("powershell.exe MV C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/back_main_directory/media/%s C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/back_main_directory/Art_Transfer_app/media/%s" % (b.image.name, b.image.name))
            os.system("powershell.exe MV C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/back_main_directory/media/C:/Users/vkstk/OneDrive/바탕 화면/ C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/back_main_directory/Art_Transfer_app/media/C:/Users/vkstk/OneDrive/바탕 화면/" % (base_path, b.image.name, base_path, b.image.name))
            
            if artist == "kimhongdo":
                os.system("powershell.exe python C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/test.py --dataroot C:/Users/vkstk/OneDrive/바탕 화면//art-transfer-web/back/back_main_directory/Art_Transfer_app/media/ --name C:/Users/vkstk/OneDrive/바탕 화면//art-transfer-web/back/AI_module/checkpoints/kimhongdo_cyclegan_pretrained/ --model test --no_dropout --num_test 10000 --gpu_ids -1 --preprocess none" % (base_path, base_path, base_path))
                b.save("C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/checkpoints/kimhongdo_cyclegan_pretrained/test_latest/images/C:/Users/vkstk/OneDrive/바탕 화면/_fake.png" % (base_path, b.image.name.split(".")[0]))
                os.system("powershell.exe rm C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/checkpoints/kimhongdo_cyclegan_pretrained/test_latest/images/* -fo" % base_path)
            elif artist == "shinyunbok":
                os.system("powershell.exe python C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/test.py --dataroot C:/Users/vkstk/OneDrive/바탕 화면//art-transfer-web/back/back_main_directory/Art_Transfer_app/media/ --name C:/Users/vkstk/OneDrive/바탕 화면//art-transfer-web/back/AI_module/checkpoints/shinyunbok_cyclegan_pretrained/ --model test --no_dropout --num_test 10000 --gpu_ids -1 --preprocess none" % (base_path, base_path, base_path))
                b.save("C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/checkpoints/shinyunbok_cyclegan_pretrained/test_latest/images/C:/Users/vkstk/OneDrive/바탕 화면/_fake.png" % (base_path, b.image.name.split(".")[0]))
                os.system("powershell.exe rm C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/checkpoints/shinyunbok_cyclegan_pretrained/test_latest/images/* -fo" % base_path)
            else:
                os.system("powershell.exe python C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/test.py --dataroot C:/Users/vkstk/OneDrive/바탕 화면//art-transfer-web/back/back_main_directory/Art_Transfer_app/media/ --name C:/Users/vkstk/OneDrive/바탕 화면//art-transfer-web/back/AI_module/checkpoints/leejungseob_cyclegan_pretrained/ --model test --no_dropout --num_test 10000 --gpu_ids -1 --preprocess none" % (base_path, base_path, base_path))
                b.save("C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/checkpoints/leejungseob_cyclegan_pretrained/test_latest/images/C:/Users/vkstk/OneDrive/바탕 화면/_fake.png" % (base_path, b.image.name.split(".")[0]))
                os.system("powershell.exe rm C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/checkpoints/leejungseob_cyclegan_pretrained/test_latest/images/* -fo" % base_path)
    #python C:\Users\mkom7\Documents\GitHub\art-transfer-web\back\AI_module\test.py --dataroot C:\Users\mkom7\Documents\GitHub\art-transfer-web\back\back_main_directory\Art_Transfer_app\media --name C:\Users\mkom7\Documents\GitHub\art-transfer-web\back\AI_module\checkpoints\kimhongdo_cyclegan_pretrained\ --model test --no_dropout --num_test 10000 --gpu_ids -1 --preprocess none
            os.system("powershell.exe rm C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/back_main_directory/Art_Transfer_app/media/* -fo" % base_path)
        elif OS == "MAC":
            
            #os.system("powershell.exe MV C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/back_main_directory/media/%s C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/back_main_directory/Art_Transfer_app/media/%s" % (b.image.name, b.image.name))
            os.system("mv C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/back_main_directory/media/C:/Users/vkstk/OneDrive/바탕 화면/ C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/back_main_directory/Art_Transfer_app/media/C:/Users/vkstk/OneDrive/바탕 화면/" % (base_path, b.image.name, base_path, b.image.name))
            
            if artist == "kimhongdo":
                os.system("python C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/test.py --dataroot C:/Users/vkstk/OneDrive/바탕 화면//art-transfer-web/back/back_main_directory/Art_Transfer_app/media/ --name C:/Users/vkstk/OneDrive/바탕 화면//art-transfer-web/back/AI_module/checkpoints/kimhongdo_cyclegan_pretrained/ --model test --no_dropout --num_test 10000 --gpu_ids -1 --preprocess none" % (base_path, base_path, base_path))
                b.save("C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/checkpoints/kimhongdo_cyclegan_pretrained/test_latest/images/C:/Users/vkstk/OneDrive/바탕 화면/_fake.png" % (base_path, b.image.name.split(".")[0]))
                os.system("rm -f C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/checkpoints/kimhongdo_cyclegan_pretrained/test_latest/images/*" % base_path)
            elif artist == "shinyunbok":
                os.system("python C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/test.py --dataroot C:/Users/vkstk/OneDrive/바탕 화면//art-transfer-web/back/back_main_directory/Art_Transfer_app/media/ --name C:/Users/vkstk/OneDrive/바탕 화면//art-transfer-web/back/AI_module/checkpoints/shinyunbok_cyclegan_pretrained/ --model test --no_dropout --num_test 10000 --gpu_ids -1 --preprocess none" % (base_path, base_path, base_path))
                b.save("C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/checkpoints/shinyunbok_cyclegan_pretrained/test_latest/images/C:/Users/vkstk/OneDrive/바탕 화면/_fake.png" % (base_path, b.image.name.split(".")[0]))
                os.system("rm -f C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/checkpoints/shinyunbok_cyclegan_pretrained/test_latest/images/*" % base_path)
            else:
                os.system("python C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/test.py --dataroot C:/Users/vkstk/OneDrive/바탕 화면//art-transfer-web/back/back_main_directory/Art_Transfer_app/media/ --name C:/Users/vkstk/OneDrive/바탕 화면//art-transfer-web/back/AI_module/checkpoints/leejungseob_cyclegan_pretrained/ --model test --no_dropout --num_test 10000 --gpu_ids -1 --preprocess none" % (base_path, base_path, base_path))
                b.save("C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/checkpoints/leejungseob_cyclegan_pretrained/test_latest/images/C:/Users/vkstk/OneDrive/바탕 화면/_fake.png" % (base_path, b.image.name.split(".")[0]))
                os.system("rm -f C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/AI_module/checkpoints/leejungseob_cyclegan_pretrained/test_latest/images/*" % base_path)
    #python C:\Users\mkom7\Documents\GitHub\art-transfer-web\back\AI_module\test.py --dataroot C:\Users\mkom7\Documents\GitHub\art-transfer-web\back\back_main_directory\Art_Transfer_app\media --name C:\Users\mkom7\Documents\GitHub\art-transfer-web\back\AI_module\checkpoints\kimhongdo_cyclegan_pretrained\ --model test --no_dropout --num_test 10000 --gpu_ids -1 --preprocess none
            os.system("rm -f C:/Users/vkstk/OneDrive/바탕 화면/art-transfer-web/back/back_main_directory/Art_Transfer_app/media/*" % base_path)

        print(b.image.name)
        #os.system("powershell.exe ls")
        #os.system("powershell.exe Copy C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/back_main_directory/media/input/%s C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/back_main_directory/Art_Transfer_app/media/%s" % (b.image.name, b.image.name))
        #os.system("cp /srv/art-transfer-web/back/back_main_directory/media/input/%s /srv/art-transfer-web/back/back_main_directory/Art_Transfer_app/media/", b.image.name)
        
        #artist_dict = {"kimhongdo": 1, "shinyunbok": 2, "leejungseop": 3}
        #os.system('/srv/art-transfer-web/back/back_main_directory/Art_Transfer_app/inference.sh %s',
        #          artist_dict[artist])

        #directory_name = artist + "_cyclegan_pretrained"  # TODO

        #b.save("/srv/art-transfer-web/back/AI_module/checkpoints/" +
        #       directory_name + "/test_latest/images/" + b.image.name + "_fake.png")
        picture = Image.objects.last()
        seri = ImageSerializer(picture)

        print("9999999999999999999999999999999999999999999999999")

        return Response(seri.data)
        """
        try:
            os.system('/srv/art-transfer-web/back/back_main_directory/Art_Transfer_app/inference.sh %s', request.artist)
            response_data['path'] = "/srv/art-transfer-web/back/AI_module/checkpoints/" + directory_name + "/test_latest/images/" + request.data['file_name'] + "_fake.png"
        except:
            response_data['status'] = 'C400'
            response_data['comment'] = 'Fail while inference. check err.log'

            print(request.data)
        """
    """
    if request.method == "POST":
        
        path에 있는 이미지를 inference 후 저장
        
       
        print("File: ", request.FILES)
        
        b = Image()
        
        print("File: ", request.FILES)
        b.image = request.FILES['file']

        b.image.name
        
        print(b.image.filename)

        b.save()
        picture = Image.objects.last()
        seri = ImageSerializer(picture)
        
        return Response(seri.data)
    """
    return


@api_view(['POST'])
def test_url(request, format=None):
    """
    테스트용 함수
    받은 request 그대로 response로 응답함
    request.data = {
        'file_name':
        'path':
        'artist':
    }
    """
    print(request.data)
    if request.method == "POST":
        """
        path에 있는 이미지를 inference 후 저장
        """
        # print(request.data['test'])
        #os.system('Copy C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/AI_module/imgs/edges2cats.jpg C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/back_main_directory/media/result/edges2cats.jpg')
        print("File: ", request.FILES)
        #image = IM.open(request.FILES['file'])
        #image.LOAD_TRUNCATED_IMAGES = True
        # image.show()
        #image_res = IM.open('../AI_module/imgs/horse2zebra.gif')

        # The following actually resides in a method of my model

        # result = urllib.request.urlretrieve('../AI_module/imgs/horse2zebra.gif') # image_url is a URL to an image

        b = Image()

        #request.FILES['file'] = IM.open('C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/AI_module/imgs/edges2cats.jpg')
        print("File: ", request.FILES)
        b.image = request.FILES['file']
        print(b.image.name)
        #b.image = IM.open('C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/AI_module/imgs/edges2cats.jpg')
        #b.image = open('C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/AI_module/imgs/edges2cats.jpg','rb')
        # b.image.show()
        # self.photo is the ImageField
        """
        b.image.save(
            os.path.basename(b.url),
            File(open(result[0], 'rb'))
            )
        """
        b.save(
            'C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/AI_module/imgs/edges2cats.jpg')
        # b.save()
        picture = Image.objects.last()
        #picture.image = 'C:/Users/mkom7/Documents/GitHub/art-transfer-web/back/AI_module/imgs/edges2cats.jpg'
        # print(picture)
        seri = ImageSerializer(picture)

        return Response(seri.data)
