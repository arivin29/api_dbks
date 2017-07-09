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
    .state('murid.muridkelas.detail', {
        url: "/detail/:id_murid_kelas",
        templateUrl: "views/murid/muridkelas/detail.html",
        data: { pageTitle: 'detail' },
        controller:"murid.muridkelas.detail"
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

    /*-----------------------------------------
      Murid ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('murid.murid', {
        url: "/murid",
        templateUrl: "views/murid/murid/data.html",
        data: { pageTitle: 'murid' },
        controller:"murid.murid"
    })
    .state('murid.murid.detail', {
        url: "/detail/:id_murid",
        templateUrl: "views/murid/murid/detail.html",
        data: { pageTitle: 'detail' },
        controller:"murid.murid.detail"
    })
    .state('murid.murid.add', {
        url: "/create",
        templateUrl: "views/murid/murid/add.html",
        data: { pageTitle: 'add murid' },
        controller:"murid.murid.add"
    })

    .state('murid.murid.edit', {
        url: "/edit/:id_murid",
        templateUrl: "views/murid/murid/edit.html",
        data: { pageTitle: 'edit murid' },
        controller:"murid.murid.edit"
    })

    /*-----------------------------------------
      Jurusan ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('murid.jurusan', {
        url: "/jurusan",
        templateUrl: "views/murid/jurusan/data.html",
        data: { pageTitle: 'jurusan' },
        controller:"murid.jurusan"
    })
    .state('murid.jurusan.add', {
        url: "/create",
        templateUrl: "views/murid/jurusan/add.html",
        data: { pageTitle: 'add jurusan' },
        controller:"murid.jurusan.add"
    })

    .state('murid.jurusan.edit', {
        url: "/edit/:id_jurusan",
        templateUrl: "views/murid/jurusan/edit.html",
        data: { pageTitle: 'edit jurusan' },
        controller:"murid.jurusan.edit"
    })

    /*-----------------------------------------
      Kelas ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('murid.kelas', {
        url: "/kelas",
        templateUrl: "views/murid/kelas/data.html",
        data: { pageTitle: 'kelas' },
        controller:"murid.kelas"
    })
    .state('murid.kelas.add', {
        url: "/create",
        templateUrl: "views/murid/kelas/add.html",
        data: { pageTitle: 'add kelas' },
        controller:"murid.kelas.add"
    })

    .state('murid.kelas.edit', {
        url: "/edit/:id_kelas",
        templateUrl: "views/murid/kelas/edit.html",
        data: { pageTitle: 'edit kelas' },
        controller:"murid.kelas.edit"
    })

}

angular
    .module('inspinia')
    .config(configmurid)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
