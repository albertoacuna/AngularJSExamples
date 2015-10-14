(function() {
    angular.module('myApp').controller('exampleGridController', ['$http', exampleGridController]);

    function exampleGridController($http){
        baseGridController.call(this, $http);

        var vm = this;

        var colDef = [
            {headerName : "Name", field : "Name"},
            {headerName : 'City', field: 'City'},
            {headerName : 'Country', field: 'Country'}
        ];

        vm.gridOptions = {
            showToolPanel: true,
            columnDefs: colDef
        }
    };

    exampleGridController.prototype = Object.create(baseGridController.prototype)
})();