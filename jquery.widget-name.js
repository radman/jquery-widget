/***
 * Widget Name
 *  Dependencies
 *   - (e.g. jQuery 1.6.1)
 *
 *  A description of the widget.
 *
 ***/

(function($){

  $.fn.widgetName = function(fn, params) {
    $.each(this, function() {

      /* Private variables */

      var self = $(this);

      if (fn == undefined)
        initialize();
      else if (fn == "publicFunctionName")
        publicFunctionName(params);

      /* Public functions (via fn parameter) */

      function publicFunctionName(params) {
      
      }

      /* Private functions */

      function initialize() {

      }
    }

    /* Allow chaining */

    return this;
  };
  
})(jQuery);
