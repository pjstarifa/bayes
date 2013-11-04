angular.module('app', [
    'ui.bootstrap'
    ,'ui'
//    , 'firebase'
]);

angular.module('app').config(function($routeProvider) {

    $routeProvider.
    when('/bayes/',{templateUrl: 'partial/bayes/bayes.html'}).
	when('/firebase',{templateUrl: 'partial/firebase/firebase.html'}).
	when('/formInput',{templateUrl: 'partial/formInput/formInput.html'}).
	/* Add New Routes Above */
    otherwise({redirectTo:'/home'});

});

angular.module('app').run(function($rootScope) {

	$rootScope.safeApply = function(fn) {
		var phase = $rootScope.$$phase;
		if (phase === '$apply' || phase === '$digest') {
			if (fn && (typeof(fn) === 'function')) {
				fn();
			}
		} else {
			this.$apply(fn);
		}
	};

});
