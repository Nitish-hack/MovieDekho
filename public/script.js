
$('document').ready(function(){
    $(".navigations").hover(function(e) {
   

            $(this).toggleClass('scale-up').siblings().toggleClass('scale-down')
      
     
        $(this).find("p").toggleClass("navDisplayon");
      })

      let dropdown_hover = $(".dropdown-hover");
      dropdown_hover.on('mouseover', function(){
          let menu = $(this).find('.dropdown-menu'), toggle = $(this).find('.dropdown-toggle');
          menu.addClass('show');
          toggle.addClass('show').attr('aria-expanded', true);
      });
      dropdown_hover.on('mouseout', function(){
          let menu = $(this).find('.dropdown-menu'), toggle = $(this).find('.dropdown-toggle');
          menu.removeClass('show');
          toggle.removeClass('show').attr('aria-expanded', false);
      });
});