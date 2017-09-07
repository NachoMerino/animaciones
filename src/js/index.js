(function($) {

  setInterval(function() {
    var rand = Math.random();

    if(rand > .3 && rand < .6) {
      var $bubble = $('<div/>').addClass('sea-bubble');
      var left = Math.random() * 100;

      var distFactor = Math.random();

      var bottom = distFactor * 75;
      var scale  = 'scale(' + (1 - distFactor) + ')';
      var zIndex = Math.ceil((1 - distFactor) * 100 + 10);

      $bubble.css({
        left:   left + 'vw',
        bottom: bottom + 'vh',
        transform: scale,
        zIndex: zIndex
      });
      setTimeout(function() {
        $bubble.remove();
      }, 3000);
      $bubble.insertBefore($('#frame'));
    }
  }, 250);

})(jQuery);
