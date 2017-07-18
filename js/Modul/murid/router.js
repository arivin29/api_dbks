function configmurid($stateProvider) {

    $stateProvider

    /*-----------------------------------------
      murids ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('murid.murid', {
        url: "/murid",
        templateUrl: "views/murid/murid/data.html",
        data: { pageTitle: 'Datas Murid' },
        controller:"murid.murid"
    })

        .state('murid.murid.detailmurids', {
            url: "/detail/:id_murid",
            templateUrl: "views/murid/detail.html",
            data: { pageTitle: 'detail murid' },
            controller:"murid.murids.detail"
        })

}

angular
    .module('inspinia')
    .config(configmurid)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
