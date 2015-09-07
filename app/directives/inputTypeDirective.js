(function() {
    angular.module('myApp').directive('inputTypeDirective', ['$compile' ,inputTypeDirective]);

    function inputTypeDirective($compile) {
        var dropdownTemplate = '<select ng-model="group.selected"> <option ng-repeat="item in group.items" value="{{item.text}}">{{item.text}} </option> </select>';
        var radioTemplate = '<label ng-repeat-start="item in group.items">{{item.text}} <input type="radio" ng-model="group.selected" value="{{item.text}}"/> </label> <br ng-repeat-end />';

        var getTemplate = function (group) {
            var inputType = group.inputType;
            var template = '';

            switch(inputType) {
                case 'dropdown':
                    template = dropdownTemplate;
                    break;
                case 'radio':
                    template = radioTemplate;
                    break;
            }

            return template;
        }

        var linker = function(scope, element, attrs) {
            element.html(getTemplate(scope.group)).show();
            $compile(element.contents())(scope);
        }

        return {
            restrict: "E",
            link: linker,
            scope: {
                group: '='
            }
        }
    }
})();