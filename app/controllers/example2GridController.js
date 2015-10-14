(function() {
    angular.module('myApp').controller('example2GridController', ['$http', example2GridController]);

    function example2GridController($http){
        baseGridController.call(this, $http);

        var vm = this;

        var colDef = [
            {headerName : "Name2", field : "Name"},
            {headerName : 'City2', field: 'City'},
            {headerName : 'Country2', field: 'Country'}
        ];

        vm.gridOptions = {
            showToolPanel: true,
            columnDefs: colDef
        }
    };

    example2GridController.prototype = Object.create(baseGridController.prototype)
})();