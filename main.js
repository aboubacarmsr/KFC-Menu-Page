$flag = true;
$counter = 1;

$(window).on('wheel', function(event){
    //On Mouse wheel event

    if($flag){
        $flag = false;
        if(event.originalEvent.deltaY > 0){
            //Execute on mouse wheel down
            $counter++;

            if($counter == 1){
                $counter++;
            }

            if($counter == 2){
                // $(".colorbox1").animate({'top':'-100%'});
                // $(".colorbox2").animate({'top':'0%'});
                $(".burger-info").animate({'top':'-100%'}, 1000);
                $(".snack-info").animate({'top':'0%'}, 1000);
                $(".burger-box .title").animate({'top':'-100%'}, 1500);
                $(".snack-box .title").animate({'top':'30%'}, 1500);
                $(".burger-box .price").animate({'top':'-100%'}, 1500);
                $(".snack-box .price").animate({'top':'70%'}, 1500);
                $(".img1").animate({'top':'-50%'}, 1000);
                $(".img2").animate({'top':'50%'}, 1000);
            }

            if($counter == 3){
                // $(".colorbox2").animate({'top':'-100%'});
                // $(".colorbox3").animate({'top':'0%'});
                $(".snack-info").animate({'top':'-100%'}, 1000);
                $(".bucket-info").animate({'top':'0%'}, 1000);
                $(".snack-box .title").animate({'top':'-100%'}, 1500);
                $(".bucket-box .title").animate({'top':'30%'}, 1500);
                $(".snack-box .price").animate({'top':'-100%'}, 1500);
                $(".bucket-box .price").animate({'top':'70%'}, 1500);
                $(".img2").animate({'top':'-50%'}, 1000);
                $(".img3").animate({'top':'50%'}, 1000);
            }

            if($counter > 3){
                $counter = 4;
            }
        }

        else{
            $counter--;
            if($counter<=1){
                $counter = 1;
            }
            if($counter==2){
                    // $(".colorbox3").animate({'top':'100%'});
                    // $(".colorbox2").animate({'top':'0%'});
                    $(".bucket-info").animate({'top':'100%'}, 1000);
                    $(".snack-info").animate({'top':'0%'}, 1000);
                    $(".bucket-box .title").animate({'top':'100%'}, 1500);
                    $(".snack-box .title").animate({'top':'30%'}, 1500);
                    $(".bucket-box .price").animate({'top':'100%'}, 1500);
                    $(".snack-box .price").animate({'top':'70%'}, 1500);
                    $(".img3").animate({'top':'150%'}, 1000);
                    $(".img2").animate({'top':'50%'}, 1000);
            }
            if($counter==1){
                    // $(".colorbox2").animate({'top':'100%'});
                    // $(".colorbox1").animate({'top':'0%'});
                    $(".snack-info").animate({'top':'100%'}, 1000);
                    $(".burger-info").animate({'top':'0%'}, 1000);
                    $(".snack-box .title").animate({'top':'100%'}, 1500);
                    $(".burger-box .title").animate({'top':'30%'}, 1500);
                    $(".snack-box .price").animate({'top':'100%'}, 1500);
                    $(".burger-box .price").animate({'top':'70%'}, 1500);
                    $(".img2").animate({'top':'150%'}, 1000);
                    $(".img1").animate({'top':'50%'}, 1000);
            }
            if($counter==3){
                $counter--;
            }
        }
        setTimeout(function(){$flag=true;},1000);
    }
})