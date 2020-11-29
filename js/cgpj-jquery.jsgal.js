
(function($) {
  
  $.fn.galimg = function() {
	// trabaja con cada elemento
	return this.each(function() {
	  var idCapaGaleria = $(this).attr("id");
	  
	  $(".item a", this).click(function() {
		// otra posibilidad para mostrar el aviso de cargando.
		//$("#" + idCapaGaleria + " .visor").append("<div class='jsgalpre'>Cargando...</div>");
	  
	  /*$(this).attr("title") = "";*/
	  /*$(this).attr("target") = "";*/
	  $(".item a").closest("li").removeClass("activo");
	  	if( $(".item strong a") ){
			$(".item strong a").unwrap();
		}
	  $(this).closest("li").addClass("activo");

		$(this).wrap("<strong title='Elemento activo'>");
		var rutaVideo = $(this).attr("href");
		//var titleVideo = $(this).children(".tituCarrusel").html();
		
		//$("#" + idCapaGaleria + " .visor object").fadeOut("normal").remove();

		/*var objImagen = new Object(); 
		
		$(objImagen).load(function() {
			$(this).hide();
            $("#" + idCapaGaleria + " .visor").append(this);
            $(this).fadeIn("slow");
        });*/
		
		/*$("#" + idCapaGaleria + " .visor object").load(function() {
			("#" + idCapaGaleria + " .visor object").hide();
			alert('asd');
            $("#" + idCapaGaleria + " .visor").append(("#" + idCapaGaleria + " .visor object"));
            ("#" + idCapaGaleria + " .visor object").fadeIn("slow");
        });*/
				
		//$(objImagen).attr("title",titleVideo);
		/*$(objImagen).attr({ data: rutaVideo });
		$('#" + idCapaGaleria + " .visor object param[name="movie"]').attr({ value: rutaVideo });*/
		
		//$("#" + idCapaGaleria + " .visor .jsgalpre").remove();
		
		
		
		
		
		
		 /* $("#" + idCapaGaleria + " .visor object").attr({ data: rutaVideo });
		  $("#" + idCapaGaleria + " .visor param[name='movie']").attr({ value: rutaVideo });
		  $("#" + idCapaGaleria + " .visor object").remove().appendTo('.video-page');*/
		
		
		
		$('#flash').flash({
				'src':rutaVideo,
				'width':'479',
				'height':'328',
				'allowfullscreen':'false',
				'allowscriptaccess':'always',
				'wmode':'transparent'
			});

		
		

		
		
		
		
        return false;
      });
	});
  };
  
})(jQuery);