hrApp.controller('ColorsController', ['$scope','colors',function($scope, colors) {


    $scope.colors = [
        {
            "text": "muted",
            "class": "text-muted"
        },


        {
            "text": "primary",
            "class": "text-primary"
        },
        {
            "text": "success",
            "class": "text-success"
        },
        {
            "text": "info",
            "class": "text-info"
        },
        {
            "text": "warning",
            "class": "text-warning"
        },
        {
            "text": "danger",
            "class": "text-danger"
        }
    ];



},
    changeColor(){
        $scope.class = $scope.colors.class
    } 

]);

