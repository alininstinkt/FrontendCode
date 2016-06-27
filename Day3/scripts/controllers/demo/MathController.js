hrApp.controller('MathController', ['$scope','MathService', function($scope,MathService){
    
    $scope.calculate = function () {
//        TODO #8 calculate op1, op2, op3, op4
        var op1, op2, op3, op4;
        op1 = $scope.numberA + $scope.numberB;
        op2 = $scope.numberA - $scope.numberB;
        op3 = $scope.numberA * $scope.numberB;
        op4 = $scope.numberA / $scope.numberB;
     //   $scope.op1 = op1;
        $scope.op1=MathService.add($scope.a,$scope.b);
     //   $scope.op2 = op2;
        $scope.op2=MathService.substract($scope.a,$scope.b);
     //   $scope.op3 = op3;
        $scope.op3=MathService.multiply($scope.a,$scope.b);
     //   $scope.op4 = op4;
        $scope.op4=MathService.divide($scope.a,$scope.b);
    }

//        TODO #13 refactor your calculations using MathService


}]);
