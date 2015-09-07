
(function () {
    angular.module('myApp').controller('inputTypeCtrl', inputTypeCtrl);

    function inputTypeCtrl() {
        var vm = this;

        vm.reportDirective = {
            title: "Test Report",

            menuGroups: [
                {
                    name: 'Input1',
                    isExpanded: false,
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
                    isExpanded: false,
                    inputType: 'radio',
                    items: [
                        { text: 'Input2 1' },
                        { text: 'Input2 2' },
                        { text: 'Input2 3' }
                    ],
                    selected: ''
                }
            ],
            toggleSelection: function (name, group) {
                var index = group.selected.indexOf(name);

                if (index > -1) {
                    group.selected.splice(index, 1);
                } else {
                    group.selected.push(name);
                }
            }
        };

        vm.Search = function () {
            //
        }
    }
})();