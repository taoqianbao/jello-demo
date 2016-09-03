define('components/jquery-ui/effect-transfer', ['require', 'exports', 'module', 'components/jquery/jquery', 'components/jquery-ui/effect'], function(require, exports, module) {

  /*!
   * jQuery UI Effects Transfer 1.11.2
   * http://jqueryui.com
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/transfer-effect/
   */
  
  (function (factory) {
      // AMD. Register as an anonymous module.
      
      module.exports = factory(require('components/jquery/jquery'), require('components/jquery-ui/effect'));;
  }(function ($) {
      return $.effects.effect.transfer = function (o, done) {
          var elem = $(this), target = $(o.to), targetFixed = target.css('position') === 'fixed', body = $('body'), fixTop = targetFixed ? body.scrollTop() : 0, fixLeft = targetFixed ? body.scrollLeft() : 0, endPosition = target.offset(), animation = {
                  top: endPosition.top - fixTop,
                  left: endPosition.left - fixLeft,
                  height: target.innerHeight(),
                  width: target.innerWidth()
              }, startPosition = elem.offset(), transfer = $('<div class=\'ui-effects-transfer\'></div>').appendTo(document.body).addClass(o.className).css({
                  top: startPosition.top - fixTop,
                  left: startPosition.left - fixLeft,
                  height: elem.innerHeight(),
                  width: elem.innerWidth(),
                  position: targetFixed ? 'fixed' : 'absolute'
              }).animate(animation, o.duration, o.easing, function () {
                  transfer.remove();
                  done();
              });
      };
  }));

});