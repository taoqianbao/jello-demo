define('components/jquery-validation/localization/messages_ja', ['require', 'exports', 'module', 'components/jquery/jquery', 'components/jquery-validation/jquery.validate'], function(require, exports, module) {

  
  (function (factory) {
      
      module.exports = factory(require('components/jquery/jquery'), require('components/jquery-validation/jquery.validate')) || module.exports;;
  }(function ($) {
      /*
   * Translated default messages for the jQuery validation plugin.
   * Locale: JA (Japanese; 日本語)
   */
      $.extend($.validator.messages, {
          required: '\u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u5FC5\u9808\u3067\u3059\u3002',
          remote: '\u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u4FEE\u6B63\u3057\u3066\u304F\u3060\u3055\u3044\u3002',
          email: '\u6709\u52B9\u306AE\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002',
          url: '\u6709\u52B9\u306AURL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002',
          date: '\u6709\u52B9\u306A\u65E5\u4ED8\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002',
          dateISO: '\u6709\u52B9\u306A\u65E5\u4ED8\uFF08ISO\uFF09\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002',
          number: '\u6709\u52B9\u306A\u6570\u5B57\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002',
          digits: '\u6570\u5B57\u306E\u307F\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002',
          creditcard: '\u6709\u52B9\u306A\u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002',
          equalTo: '\u540C\u3058\u5024\u3092\u3082\u3046\u4E00\u5EA6\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002',
          extension: '\u6709\u52B9\u306A\u62E1\u5F35\u5B50\u3092\u542B\u3080\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002',
          maxlength: $.validator.format('{0} \u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002'),
          minlength: $.validator.format('{0} \u6587\u5B57\u4EE5\u4E0A\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002'),
          rangelength: $.validator.format('{0} \u6587\u5B57\u304B\u3089 {1} \u6587\u5B57\u307E\u3067\u306E\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002'),
          range: $.validator.format('{0} \u304B\u3089 {1} \u307E\u3067\u306E\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002'),
          max: $.validator.format('{0} \u4EE5\u4E0B\u306E\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002'),
          min: $.validator.format('{0} \u4EE5\u4E0A\u306E\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002')
      });
  }));

});