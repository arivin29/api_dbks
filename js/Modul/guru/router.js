function configguru($stateProvider) {

    $stateProvider

    /*-----------------------------------------
      Pnilai ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('guru.pnilai', {
        url: "/pnilai",
        templateUrl: "views/guru/pnilai/data.html",
        data: { pageTitle: 'pengaturan nilai' },
        controller:"guru.pnilai"
    })
    .state('guru.pnilai.add', {
        url: "/create",
        templateUrl: "views/guru/pnilai/add.html",
        data: { pageTitle: 'add pengaturan nilai' },
        controller:"guru.pnilai.add"
    })

    .state('guru.pnilai.edit', {
        url: "/edit/:id_pengaturan_nilai",
        templateUrl: "views/guru/pnilai/edit.html",
        data: { pageTitle: 'edit pengaturan nilai' },
        controller:"guru.pnilai.edit"
    })

    /*-----------------------------------------
      Informations ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/

        .state('guru.informations', {
            url: "/informations",
            templateUrl: "views/guru/informations/data.html",
            data: { pageTitle: 'Informations guru' },
            controller:"guru.informations"
        })

        .state('guru.informations.detail.nilai.add', {
            url: "/create",
            templateUrl: "views/guru/informations/nilai/add.html",
            data: { pageTitle: 'add nilai murid' },
            controller:"guru.informations.detail.nilai.add"
        })

            .state('guru.informations.detail', {
                url: "/detail/:id_guru_mp",
                templateUrl: "views/guru/informations/detail.html",
                data: { pageTitle: 'Informations murid guru' },
                controller:"guru.informations.detail"
            })

            .state('guru.informations.detail.nilai', {
                url: "/nilai/:id_guru_mp",
                templateUrl: "views/guru/informations/nilai/detail.html",
                data: { pageTitle: 'Informations nilai murid' },
                controller:"guru.informations.detail.nilai"
            })
    
            .state('guru.informations.detail.absensi', {
                url: "/absensi/:id_guru_mp",
                templateUrl: "views/guru/informations/absensi/detail.html",
                data: { pageTitle: 'Informations absensi murid' },
                controller:"guru.informations.detail.absensi"
            })


    /*-----------------------------------------
      Muridkelas ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('guru.muridkelas', {
        url: "/muridkelas",
        templateUrl: "views/guru/muridkelas/data.html",
        data: { pageTitle: 'muridkelas' },
        controller:"guru.muridkelas"
    })
    .state('guru.muridkelas.add', {
        url: "/create",
        templateUrl: "views/guru/muridkelas/add.html",
        data: { pageTitle: 'add muridkelas' },
        controller:"guru.muridkelas.add"
    })

    .state('guru.muridkelas.edit', {
        url: "/edit/:id_murid_kelas",
        templateUrl: "views/guru/muridkelas/edit.html",
        data: { pageTitle: 'edit muridkelas' },
        controller:"guru.muridkelas.edit"
    })

}

angular
    .module('inspinia')
    .config(configguru)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
