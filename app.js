(function(){
    'use strict';

    angular.module("LunchCheck",[])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        
        $scope.CheckSize = function(){
            if($scope.lunchList){
                $scope.message = CheckLunchSize($scope.lunchList);
            }
            else{
                $scope.message = "Please enter data first";
            }
        };

       $scope.lunchList = "";
       $scope.message = "";
    }
  
    function CheckLunchSize(lunchlist){
        var lunchSize = lunchlist.split(",").length;

        console.log(lunchlist);
        console.log(lunchSize);

        if( lunchSize <= 3){
            return "Enjoy!";
        }
        else if (lunchSize > 3)
        {
            return "Too much!";
        }

        return "Error : Shouldn't reach here...";
    }

})();