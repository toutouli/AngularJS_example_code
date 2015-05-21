var myModule = angular.module("HelloAngular", []);

myModule.controller("helloAngular", ['$scope',
    function HelloAngular($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
    }
]);

myModule.controller('name', ['',
    function() {
        //this is for test!
    }
])
