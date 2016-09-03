define('static/libs/alert', ['require', 'exports', 'module', 'components/bootstrap/bootstrap', 'components/jquery/jquery'], function(require, exports, module) {

  require('components/bootstrap/bootstrap');
  var modalTplFn = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="modal fade">\r\n    <div class="modal-table">\r\n        <div class="modal-table-cell">\r\n            <div class="modal-dialog modal-'+
((__t=( errorLevel ))==null?'':__t)+
'">\r\n                <div class="modal-content">\r\n                    <div class="modal-header">\r\n                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\r\n                        <h4 class="modal-title">'+
((__t=( title ))==null?'':__t)+
'</h4>\r\n                    </div>\r\n\r\n                    <div class="modal-body">\r\n                        <p>'+
((__t=( content ))==null?'':__t)+
'</p>\r\n                    </div>\r\n                    <div class="modal-footer">\r\n                        <button type="button" class="btn btn-primary" data-dismiss="modal">确定</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>';
}
return __p;
};
  var $ = require('components/jquery/jquery');
  
  // errorLevel 至少支持 danger、info、sucess、warning
  var alert = module.exports = function(content, errorLevel, title) {
      var dom = $(modalTplFn({
          title: title || '提示信息',
          content: content,
          errorLevel: errorLevel || 'info'
      }));
  
      dom
          .appendTo('body')
          .modal({
              backdrop: 'static'
          })
          .on('hide.bs.modal', function() {
              dom.remove();
          });
  };
  

});