from Art_Transfer_app.models import Image
from rest_framework import serializers

class ImageSerializer(serializers.HyperlinkedModelSerializer):
    image_url = serializers.SerializerMethodField('get_image_url')
    output_url = serializers.SerializerMethodField('get_output_url')

    class Meta:
        model = Image
        fields = ('id', 'image', 'image_url', 'output', 'output_url')
    
    def get_image_url(self, obj):
        return obj.image.url

    def get_output_url(self, obj):
        return obj.output.url