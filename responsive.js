/*****
Licensed under MIT
copyright 2016 andy suwandy
https://bytutorial.com/framework-and-scripts-library/responsive
https://github.com/bytutorial
****/
(function ($) {
    $.extend({
        responsive: function (options) {
			//default settings
            var settings = $.extend({}, options);
			
			$("#menu-button").on("click", function(event){
				$("ul.nav-menu").attr("slide", ( $("ul.nav-menu").attr("slide") != "1" || typeof $("ul.nav-menu").attr("slide") === "undefined" ? "1" : "0"));
				if($("ul.nav-menu").attr("slide") == "1"){
					switch($(this).attr("data-action")){
						case "right-slide":
							$("body, ul.nav-menu").toggleClass("right-slide");
							$("ul.nav-menu, #transparent-bg").show();
							break;
						case "left-slide":
							$("body, ul.nav-menu").toggleClass("left-slide");
							$("ul.nav-menu, #transparent-bg").show();
							break;
						default:
							$("ul.nav-menu").slideDown();
							break;
					}
				}else{
					resetMenuDisplay();
				}
			});
			
			//window resize
			$(window).resize(function(event){if($(this).width() > 764){$("ul.nav-menu").show();}});
			
			if ($("#transparent-bg").length == 0) {
				$("body").prepend("<div id='transparent-bg'></div>");
				
				$("#transparent-bg").on("click", function(){
					resetMenuDisplay();
				});
			}
			
			function resetMenuDisplay(){
				$("ul.nav-menu, #transparent-bg").hide();
				$("body, ul.nav-menu").removeClass("right-slide left-slide");
				$("ul.nav-menu").attr("slide", "0");
			}
		}
	});
})(jQuery);