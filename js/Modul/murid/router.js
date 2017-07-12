function configmurid($stateProvider) {

    $stateProvider

    /*-----------------------------------------
      Nilai ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('murid.nilai', {
        url: "/nilai",
        templateUrl: "views/murid/nilai/data.html",
        data: { pageTitle: 'nilai' },
        controller:"murid.nilai"
    })
    .state('murid.nilai.add', {
        url: "/create",
        templateUrl: "views/murid/nilai/add.html",
        data: { pageTitle: 'nilai' },
        controller:"murid.nilai.add"
    })

    .state('murid.nilai.edit', {
        url: "/edit/:id_nilai",
        templateUrl: "views/murid/nilai/edit.html",
        data: { pageTitle: 'nilai' },
        controller:"murid.nilai.edit"
    })

    /*-----------------------------------------
      Muridkelas ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('murid.muridkelas', {
        url: "/muridkelas",
        templateUrl: "views/murid/muridkelas/data.html",
        data: { pageTitle: 'muridkelas' },
        controller:"murid.muridkelas"
    })
    
    .state('murid.muridkelas.add', {
        url: "/create",
        templateUrl: "views/murid/muridkelas/add.html",
        data: { pageTitle: 'add muridkelas' },
        controller:"murid.muridkelas.add"
    })

    .state('murid.muridkelas.edit', {
        url: "/edit/:id_murid_kelas",
        templateUrl: "views/murid/muridkelas/edit.html",
        data: { pageTitle: 'edit muridkelas' },
        controller:"murid.muridkelas.edit"
    })

        .state('murid.muridkelas.detail', {
            url: "/detail/:id_kelas",
            templateUrl: "views/murid/muridkelas/detail.html",
            data: { pageTitle: 'detail kelas' },
            controller:"murid.muridkelas.detail"
        })

        .state('murid.muridkelas.detailjurusan', {
            url: "/detailjurusan/:id_jurusan",
            templateUrl: "views/murid/muridkelas/detailjurusan.html",
            data: { pageTitle: 'detail jurusan' },
            controller:"murid.muridkelas.detailjurusan"
        })

        .state('murid.muridkelas.detailguru', {
            url: "/detailguru/:id_guru",
            templateUrl: "views/murid/muridkelas/detailguru.html",
            data: { pageTitle: 'detail guru' },
            controller:"murid.muridkelas.detailguru"
        })

}

angular
    .module('inspinia')
    .config(configmurid)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
