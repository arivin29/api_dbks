function configmurid($stateProvider) {

    $stateProvider

    


}

angular
    .module('inspinia')
    .config(configmurid)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
