/*horizontal*/
jQuery.fn.accessNews = function(settings) {
    settings = jQuery.extend({
        /*newsHeadline: "Top Stories",*/
        newsSpeed: "normal"
    }, settings);
    return this.each(function(i) {
        aNewsSlider.itemHeight = parseInt(jQuery(".item:eq(" + i + ")",".carrusel").height()) + parseInt(jQuery(".item:eq(" + i + ")",".carrusel").css("margin-top"));
        aNewsSlider.init(settings,this);
        /*jQuery(".view_all > a", this).click(function() {
            aNewsSlider.vAll(settings,this);
            return false;
        });*/
    });
};

/*vertical*/
var aNewsSlider = {
    itemHeight: 0,
    init: function(s,p) {
        /*jQuery(".messaging",p).css("display","none");*/
        itemLength = jQuery(".item",p).length;
        /*if (jQuery(".view_all",p).height() == null) {
            jQuery(".news_items",p).prepend("<p class='view_all'>" + s.newsHeadline + " [ " + itemLength + " total ] &nbsp;-&nbsp; <a href='#'>View All</a></p>");
        }*/		
        newsContainerHeight = itemLength * aNewsSlider.itemHeight;
		
        jQuery(".container",p).css("height",newsContainerHeight + "px");
        jQuery(".next",p).css("display","block");
		jQuery(".prev",p).css("display","block");

		jQuery(".prev",p).addClass("prevOff");
		//jQuery(".prev",p).attr("href","");
		//jQuery(".prev",p).removeAttr("href");
        //jQuery(".prev",p).text("");
		
		animating = false;
        jQuery(".next",p).click(function() {
            if (animating == false) {
                animating = true;
                animateTop = parseInt(jQuery(".container",p).css("top")) - (aNewsSlider.itemHeight * 2);
                if (animateTop + parseInt(jQuery(".container",p).css("height")) > 0) {
	                jQuery(".prev",p).css("display","block");
					jQuery(".prev",p).removeClass("prevOff");
                    jQuery(".container",p).animate({top: animateTop}, s.newsSpeed, function() {
                        jQuery(this).css("top",animateTop);
                        if (parseInt(jQuery(".container",p).css("top")) + parseInt(jQuery(".container",p).css("height")) <= aNewsSlider.itemHeight * 2) {
                            //jQuery(".next",p).css("display","none");
							jQuery(".next",p).addClass("nextOff");
							jQuery(".next",p).attr("title","");
                        }
                        animating = false;
                    });
                } else {
                    animating = false;					
                }
            }
            return false;
        });
        jQuery(".prev",p).click(function() {
            if (animating == false) {
                animating = true;
                animateTop = parseInt(jQuery(".container",p).css("top")) + (aNewsSlider.itemHeight * 2);
                if ((animateTop + parseInt(jQuery(".container",p).css("height"))) <= parseInt(jQuery(".container",p).css("height"))) {
                    jQuery(".next",p).css("display","block");
					jQuery(".next",p).removeClass("nextOff");
                    jQuery(".container",p).animate({top: animateTop}, s.newsSpeed, function() {
                        jQuery(this).css("top",animateTop);
                        if (parseInt(jQuery(".container",p).css("top")) == 0) {
   //                         jQuery(".prev",p).css("display","none");
							jQuery(".prev",p).addClass("prevOff");
							jQuery(".prev",p).attr("title","");
                        }
                        animating = false;
                    });
                } else {
                    animating = false;
                }
            }
            return false;
        });
    },
    vAll: function(s,p) {
        var o = p;
        while (p) {
            p = p.parentNode;
            if (jQuery(p).attr("class") != undefined && jQuery(p).attr("class").indexOf("carrusel") != -1) {
                break;
            }
        }
        if (jQuery(o).text().indexOf("View All") != -1) {
//            jQuery(".next",p).css("display","none");
			jQuery(".next",p).addClass("nextOff");
			jQuery(".next",p).attr("title","");
//            jQuery(".prev",p).css("display","none");
			jQuery(".prev",p).addClass("prevOff");
			jQuery(".prev",p).attr("title","");
            jQuery(o).text("View Less");
            jQuery(".container",p).css("top","0px").css("height",aNewsSlider.itemHeight * 2 + "px");
        } else {
            jQuery(o).text("View All");
            aNewsSlider.init(s,p);
        }
    }
};