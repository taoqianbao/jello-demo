define('components/jquery-validation/localization/messages_he', ['require', 'exports', 'module', 'components/jquery/jquery', 'components/jquery-validation/jquery.validate'], function(require, exports, module) {

  
  (function (factory) {
      
      module.exports = factory(require('components/jquery/jquery'), require('components/jquery-validation/jquery.validate')) || module.exports;;
  }(function ($) {
      /*
   * Translated default messages for the jQuery validation plugin.
   * Locale: HE (Hebrew; עברית)
   */
      $.extend($.validator.messages, {
          required: '\u05D4\u05E9\u05D3\u05D4 \u05D4\u05D6\u05D4 \u05D4\u05D9\u05E0\u05D5 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4',
          remote: '\u05E0\u05D0 \u05DC\u05EA\u05E7\u05DF \u05E9\u05D3\u05D4 \u05D6\u05D4',
          email: '\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0"\u05DC \u05D7\u05D5\u05E7\u05D9\u05EA',
          url: '\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8 \u05D7\u05D5\u05E7\u05D9\u05EA',
          date: '\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05EA\u05D0\u05E8\u05D9\u05DA \u05D7\u05D5\u05E7\u05D9',
          dateISO: '\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05EA\u05D0\u05E8\u05D9\u05DA \u05D7\u05D5\u05E7\u05D9 (ISO)',
          number: '\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05DE\u05E1\u05E4\u05E8',
          digits: '\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E8\u05E7 \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD',
          creditcard: '\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05DE\u05E1\u05E4\u05E8 \u05DB\u05E8\u05D8\u05D9\u05E1 \u05D0\u05E9\u05E8\u05D0\u05D9 \u05D7\u05D5\u05E7\u05D9',
          equalTo: '\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05D0\u05EA \u05D0\u05D5\u05EA\u05D5 \u05E2\u05E8\u05DA \u05E9\u05D5\u05D1',
          extension: '\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E2\u05E8\u05DA \u05E2\u05DD \u05E1\u05D9\u05D5\u05DE\u05EA \u05D7\u05D5\u05E7\u05D9\u05EA',
          maxlength: $.validator.format('.\u05E0\u05D0 \u05DC\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05D9\u05D5\u05EA\u05E8 \u05DE- {0} \u05EA\u05D5\u05D5\u05D9\u05DD'),
          minlength: $.validator.format('\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05DC\u05E4\u05D7\u05D5\u05EA {0} \u05EA\u05D5\u05D5\u05D9\u05DD'),
          rangelength: $.validator.format('\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E2\u05E8\u05DA \u05D1\u05D9\u05DF {0} \u05DC- {1} \u05EA\u05D5\u05D5\u05D9\u05DD'),
          range: $.validator.format('\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E2\u05E8\u05DA \u05D1\u05D9\u05DF {0} \u05DC- {1}'),
          max: $.validator.format('\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E2\u05E8\u05DA \u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC- {0}'),
          min: $.validator.format('\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E2\u05E8\u05DA \u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC- {0}')
      });
  }));

});