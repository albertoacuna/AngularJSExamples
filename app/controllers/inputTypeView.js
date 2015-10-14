
(function () {
    angular.module('myApp').controller('inputTypeCtrl', inputTypeCtrl);

    function inputTypeCtrl() {
        var vm = this;

        vm.filterModel = {
            menuGroups: [
                {
                    name: 'Input1',
                    inputType: 'dropdown',
                    items: [
                        { text: 'Input1 1' },
                        { text: 'Input1 2' },
                        { text: 'Input1 3' }
                    ],
                    selected: ''
                },
                {
                    name: 'Input2',
                    inputType: 'radio',
                    items: [
                        { text: 'Input2 1' },
                        { text: 'Input2 2' },
                        { text: 'Input2 3' }
                    ],
                    selected: ''
                }
            ]
        };

        vm.Search = function () {
            //Perform some new query request using the filters that have been selected
        }
    }
})();