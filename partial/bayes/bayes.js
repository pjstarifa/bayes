angular.module('app').controller('BayesCtrl', function ($scope) {

    $scope.dto = {};
    $scope.dto.Bayes={};
    $scope.dto.Message = 'Hello';

    // TODO: Persist data in local storage and Firebase
    var url = 'https://dmc.firebaseio.com/items';
   // $scope.items = angularFire(url, $scope, 'items');

    var calculatePosteriorProbability = function (x, y, z) {
        if (!isValidData(x, y, z))
        {throw "Invalid Data. Inputs must all be percents.";}
        var pPrior = convertToFraction(x);
        var pIfTrue = convertToFraction(y);
        var pIfFalse = convertToFraction(z);
        var num = pPrior * pIfTrue;
        var den = num + pIfFalse * (1 - pPrior);
        var pPosterior = num / den;
        return Math.round(convertToPercent(pPosterior));
    };

    var convertToPercent = function (val) {
        return  val * 100;
    };

    var convertToFraction = function (val) {
        return  val * 0.01;
    };

    var isValidData = function (x, y, z) {
        return areAllPercents(x, y, z);
    };

    var areAllPercents = function (x, y, z) {
        return isPercent(x) && isPercent(y) && isPercent(z);
    };

    var isPercent = function (val) {
        return val >= 0 && val <= 100;
    };

    $scope.calcPosteriorProbability = function(x,y,z){
       $scope.dto.Bayes.posterior = calculatePosteriorProbability(x,y,z);
    };
});