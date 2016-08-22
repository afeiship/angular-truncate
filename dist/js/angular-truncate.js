(function () {
  'use strict';

  angular.module('nx.widget', []);

})();

(function () {
  'use strict';

  angular.module('nx.widget')
    .filter('nxTruncate', function() {
      return function(inValue,inMax,inTail) {
        var tail = inTail || '...';
        var max=inMax || 20;
        var value;
        if(inValue.length<max){
          return inValue;
        }
        return inValue.substr(0,max) + tail;
      };
    });


})();
