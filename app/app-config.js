(function(){
    angular.module('myApp').config(['$routeProvider', routeProvider]);

    function routeProvider($routeProvider){
        $routeProvider
            .when('/inputTypeDirective', {
            templateUrl: 'views/inputType/inputTypeView.html',
            controller: 'inputTypeCtrl',
            controllerAs: 'controller'
        })
    }
})();