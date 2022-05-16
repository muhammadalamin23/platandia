


;(function($){
	$(function(){

  // Begin input common focus and blur for value.
      $('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="phone"],.main-wrap input[type="number"],.main-wrap input[type="search"],.main-wrap textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
        
      $('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"], .main-wrap input[type="tel"],.main-wrap input[type="phone"],.main-wrap input[type="number"],.main-wrap input[type="search"],.main-wrap textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
      // Ends input common focus and blur for value.
        
        
        // This function for scroll animation
        var $animation_elements = $('.animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        // End animation function
        
    
        
        //this is for heade animation
        if($(window).width() > 767 ){
            var getHeaderheight = $('.header-wrap').outerHeight();
            var navHeight = $(".nav-wrap").outerHeight()
            
            $(window).on("scroll", function() {
                var fromTop = $(window).scrollTop();
                $("body").toggleClass("down", (fromTop > getHeaderheight));
                if(fromTop > navHeight){
                    $('.header-wrap').addClass('fixedHeader')
                    $('.main-logo').addClass('animation')
                }else{
                    $('.main-logo').removeClass('animation')
                    $('.header-wrap').removeClass('fixedHeader')
                }

            });
            
        }

        $('div.phone-nav').click(function(){
            $('div.nav-wrap').slideToggle();
        })
        
        //Modal popup function        
        $(".collections-products-item").each(function(){
            var tabNav = $(this).find(".item-category").html();
            var itemFigure = $(this).find("figure").html();
            var itemContent = $(this).find(".product-description").html();
            $(this).click(function(){
                $('.collections-modal-wrap').fadeIn();
                
                $("#modal-figure").html(itemFigure);
                $("#madal-des-wrap").html(itemContent);
                $("#item-category").html(tabNav);
                
                
                $('#item-category .category').eq(0).addClass("active");
                $('#modal-figure img').hide();
                $('#modal-figure img').eq(0).show();
                $('#madal-des-wrap .description').hide();
                $('#madal-des-wrap .description').eq(0).show();

                $('#item-category .category').each(function (i) {
                    $(this).click(function () {
                        if ($(this).hasClass('active')) return false;
                        else {
                            $('#item-category .category').removeClass('active');
                            $(this).addClass('active');
                            $('#modal-figure img').hide();
                            $('#modal-figure img').eq(i).show();
                            $('#madal-des-wrap .description').hide();
                            $('#madal-des-wrap .description').eq(i).show();
                        }
                    });
                });
                
                $(".preloader_wrapper").addClass('loaded').fadeIn(5);
                removeFunction();
                function removeFunction(){
                    setTimeout(function(){
                         $(".preloader_wrapper").fadeOut(500);
                    }, 2000);
                }
                
                
            })
        })
        
        $('.modal-close').bind('click touchned',  function(){
            $('.collections-modal-wrap').fadeOut(1200);
        });
        
        $(".collections-products-item").bind('click touchned', function(){
            $('body').addClass('modal-active')
        });
        
       $('.modal-close').bind('click touchned', function(){
            $('body').removeClass('modal-active');
        });
        
        
        if($(window).width() > 767){
            $(window).on("scroll", function(){
                var windowScroll = $(window).scrollTop();
                $('.home-content .hero-banner-wrap').css({
                    'background-position': 'center ' + (-windowScroll / 10) + "px"
                });
            })

            $(window).on("scroll", function(){
                var windowScroll = $(window).scrollTop();
                $('.element-content .hero-banner-wrap').css({
                    'background-position': 'center ' + (-windowScroll / 8) + "px"
                });
            })

            $(window).on("scroll", function(){
                var windowScroll = $(window).scrollTop();
                $('.contact-lower-thum').css({
                    'background-position': 'center ' + (-windowScroll / 30) + "px"
                });
            })
        }
        
        if($(window).width() < 1025){
            
            $(window).on("scroll", function(){
                var windowScroll = $(window).scrollTop();
                $('.contact-lower-thum').css({
                    'background-position': 'center ' + (-windowScroll / 100) + "px"
                });
            })
        }
        
        
        if($(window).width() > 767){
            var $pos_elements = $('.element-content .content-details-info');
            var $window = $(window);

            function check_if_in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($pos_elements, function() {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)){
                        $element.addClass('stratParallax');
                    } else {
                        $element.removeClass('stratParallax');
                    }
                });
            }

            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');
        
        
            $(window).scroll(function(){

                var wScroll = $(this).scrollTop()
                
                $(".element-content .stratParallax .artical-figure img").css({
                    "transform" : "translate(0px, -" + wScroll/ 50 + "%)"
                })

            })
                
                
       };   
        
        
        
        var $position_elements = $(".footer-upper-section");
        function check_position() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($position_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight()/2;
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_bottom_position >= window_top_position){
                    //$element.addClass('stratParallax');
                    //$('.footer-section').removeClass('expandline');
                } else {
                    //$element.removeClass('stratParallax');
                    $('.footer-section').addClass('expandline');
                }
            });
        }

        $window.on('scroll resize', check_position);
        $window.trigger('scroll');
        
        
            
	})// End ready function.
    
       
    $(window).on('load', function(){
        $("#preloader_wrapper").addClass('loaded') 
        
        removeFunction()
        
        function removeFunction(){
            setTimeout(function(){
                 $("#preloader_wrapper").fadeOut(1000);
                
            }, 2800);
        }
            
    });
    

	$(window).load(function(){
        // Begin common slider
        if ( $('div.slider-wrap').length == 0 ) return false

        $('div.slider-wrap').flexslider({
            animation:"slide",
            slideshow: true,
            directionNav: true,
            controlNav:false,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {

            }
        })	
//        $('div.slider-wrap video').trigger('play');         
    })

	$(window).load(function () {
	    // Begin common slider
	    if ($('#collection-info-wrap').length == 0) return false;

	    if ($(window).width() < 767) {
	        $('#collection-info-wrap').flexslider({
	            selector: '.collection-info-inner > .collection-item',
	            animation: "slide",
	            slideshow: true,
	            directionNav: true,
	            controlNav: false,
	            slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
	            animationSpeed: 600,
	            useCSS: false,
	            start: function (slider) {
	                //$('body').removeClass('loading');

	            },
	            animationLoop: true,
	            pauseOnAction: false, // default setting

	            after: function (slider) {

	            }
	        })
	    }
	    //        $('div.slider-wrap video').trigger('play');         
	});

})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})