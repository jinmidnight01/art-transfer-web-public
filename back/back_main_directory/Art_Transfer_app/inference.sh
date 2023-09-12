#! /bin/bash

LOGFILE=err.log
input = $1

(
    echo "$(date "+%m%d%Y %T") : Starting work"
    cd /srv/art-transfer-web/back/AI_module
    if [ $input -eq 1 ]
    then
        python test.py --dataroot /srv/art-transfer-web/back/back_main_directory/Art_Transfer_app/media/ --name /srv/art-transfer-web/back/AI_module/checkpoints/kimhongdo_cyclegan_pretrained/ --model test --no_dropout --num_test 10000 --gpu_ids -1 --preprocess none
    elif [ $input -eq 2 ]
    then
        python tt.py --dataroot /srv/art-transfer-web/back/back_main_directory/Art_Transfer_app/media/ --name /srv/art-transfer-web/back/AI_module/checkpoints/leejungseop_cyclegan_pretrained/ --model test --no_dropout --num_test 10000 --gpu_ids -1 --preprocess none
    else
    then
        python test.py --dataroot /srv/art-transfer-web/back/back_main_directory/Art_Transfer_app/media/ --name /srv/art-transfer-web/back/AI_module/checkpoints/kimhongdo_cyclegan_pretrained/ --model test --no_dropout --num_test 10000 --gpu_ids -1 --preprocess none
    fi
    echo error 1>&2 # test stderr

    echo "$(date "+%m%d%Y %T") : Done"
) >& $LOGFILE