define('components/jquery-ui/i18n/datepicker-nl', ['require', 'exports', 'module', 'components/jquery-ui/datepicker'], function(require, exports, module) {

  /* Dutch (UTF-8) initialisation for the jQuery UI date picker plugin. */
  /* Written by Mathias Bynens <http://mathiasbynens.be/> */
  
  (function (factory) {
      // AMD. Register as an anonymous module.
      
      module.exports = factory(require('components/jquery-ui/datepicker'));;
  }(function (datepicker) {
      datepicker.regional.nl = {
          closeText: 'Sluiten',
          prevText: '\u2190',
          nextText: '\u2192',
          currentText: 'Vandaag',
          monthNames: [
              'januari',
              'februari',
              'maart',
              'april',
              'mei',
              'juni',
              'juli',
              'augustus',
              'september',
              'oktober',
              'november',
              'december'
          ],
          monthNamesShort: [
              'jan',
              'feb',
              'mrt',
              'apr',
              'mei',
              'jun',
              'jul',
              'aug',
              'sep',
              'okt',
              'nov',
              'dec'
          ],
          dayNames: [
              'zondag',
              'maandag',
              'dinsdag',
              'woensdag',
              'donderdag',
              'vrijdag',
              'zaterdag'
          ],
          dayNamesShort: [
              'zon',
              'maa',
              'din',
              'woe',
              'don',
              'vri',
              'zat'
          ],
          dayNamesMin: [
              'zo',
              'ma',
              'di',
              'wo',
              'do',
              'vr',
              'za'
          ],
          weekHeader: 'Wk',
          dateFormat: 'dd-mm-yy',
          firstDay: 1,
          isRTL: false,
          showMonthAfterYear: false,
          yearSuffix: ''
      };
      datepicker.setDefaults(datepicker.regional.nl);
      return datepicker.regional.nl;
  }));

});