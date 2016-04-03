$(function() {
    $( "#tabs" ).tabs({collapsible: true, active: false });

    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false
        /*controlNav: "thumbnails",
        start: function(slider){
          $('body').removeClass('loading');
        }*/
      });

    $('#idealia-slider').flexslider({
        animation: "slide",
        controlNav: false
    });

    $('#liftactiv-slider').flexslider({
        animation: "slide",
        controlNav: false
    });

    $('#neovadiol-slider').flexslider({
        animation: "slide",
        controlNav: false
    });

    $("select").selectOrDie();

    $('[data-tab]').on('change', function() {
        var target=$(this).val();
       $('[data-tab-cnt]').removeClass('show');
        $('[data-tab-cnt="'+target+'"]').addClass('show');
    });

    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

    $('a[href*=#]').click(function(e) {
    e.preventDefault();

  });

    var ids = [];
    $("form").each(function () {
        ids.push(this.id);
    });
    var formId = "#" + ids[0];
    $(formId).validate({
        rules:{
            fname: {
              required: true,
              minlength: 2,
              maxlength: 50
            },
            lname: {
              required: true,
              minlength: 2,
              maxlength: 50
            },
            sex: {
              required: true
            },
            birth_date: {
              required: true,
              date: true
            },
            cemail: {
              required: true,
              email: true,
              minlength: 6,
              maxlength: 200
            },
            street: {
              required: true,
              minlength: 2,
              maxlength: 100
            },
            town: {
              required: true,
              minlength: 2,
              maxlength: 50
            },
            zip: {
                required: true,
                digits: true
            },
            sample_type: {
                required: true, 
                digits: true
            },
            ccomment: {
                required: true,
                minlength: 1,
                maxlength: 24000
            },
            newsletter: {
                required: true,
                digits: true
            },
            agree: {
                required: true,
                digits: true
            }
        }
    });

    $('#code-entry').on('input', function(){
    	var curr=$(this);
    	var curr_val=curr.val().toUpperCase();
    	if(curr_val=='ID16' || curr_val=='LIFT16' || curr_val=='NEO16') {
    		$('.second-step').show();
    		curr.siblings('span').hide();
    	}else{
    		$('.second-step').hide();
    		curr.siblings('span').show();
    	}
    });

    $('.box').on('click', function(){
    	var curr = $(this);
    	if(curr.hasClass('no-rotation')){
    	$('.box').removeClass('rotation').removeClass('no-rotation');	
    	$('.text.universal').show();
    	var item = $(this).attr('data-image');
    	console.log(item);
    	$('[data-image-cont="'+item+'"]').hide();

	    } else {
	    	$('.box').removeClass('rotation').removeClass('no-rotation');
			curr.addClass('no-rotation');
	    	$('.box').each(function(){
	    		if(!$(this).hasClass('no-rotation')){
					$(this).addClass('rotation');
	    		}
	    	});
	    	var item = $(this).attr('data-image');
	    	$('.text.universal').hide();
			$('[data-image-cont]').hide();
    		$('[data-image-cont="'+item+'"]').show();
	    }
    	
    });

    $('.thumbs a').on('click', function(){
        var curr = $(this);
        var slider = $(this).attr('data-slider');
        //$('.all-slides').hide();
        $('[data-slider-cnt]').hide();
        $('[data-slider-cnt="'+slider+'"]').show();
        $('#'+slider+'-slider').flexslider();
        $('.asd').css({zIndex:'1'});
        $('#'+slider+'-slider').css({
            zIndex:'100'
        });
        
    });

    








    /*$('[data-image]').on('click', function(){
    	var item = $(this).attr('data-image');
    	$('.text.universal').hide();

    	$('[data-image-cont]').hide();
    	$('[data-image-cont="'+item+'"]').show();
    });*/
    /*$('.persons').on('click', function(){
    	$(this).parent().find('.video').toggleClass('show');
    	$(this).parent().find('.text.universal').toggleClass('hide');
    	$(this).parent().find('.text.personal').toggleClass('show');
    });*/

  });


//
//
//
