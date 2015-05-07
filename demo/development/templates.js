(function(module) {
try { module = angular.module("angular heroku demo.templates"); }
catch(err) { module = angular.module("angular heroku demo.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("foo/foo.tpl.html",
    "<div>foo</div>");
}]);
})();
