'use strict';

angular.module('kappa-sigma').directive('navag',function(){
    var directive = {};
    directive.restrict = 'E';
    directive.replace = true;
    directive.templateUrl ="app/components/nav/nav.html"
    return directive;
});
