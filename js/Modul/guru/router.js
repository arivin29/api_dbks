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
      Gurump ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('guru.gurump', {
        url: "/gurump",
        templateUrl: "views/guru/gurump/data.html",
        data: { pageTitle: 'guru mata pelajaran' },
        controller:"guru.gurump"
    })
    .state('guru.gurump.add', {
        url: "/create",
        templateUrl: "views/guru/gurump/add.html",
        data: { pageTitle: 'add guru mata pelajaran' },
        controller:"guru.gurump.add"
    })

    .state('guru.gurump.edit', {
        url: "/edit/:id_guru_mp",
        templateUrl: "views/guru/gurump/edit.html",
        data: { pageTitle: 'edit guru mata pekerjaan' },
        controller:"guru.gurump.edit"
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

        .state('guru.muridkelas.detail', {
            url: "/detail/:id_kelas",
            templateUrl: "views/guru/muridkelas/detail.html",
            data: { pageTitle: 'detail kelas' },
            controller:"guru.muridkelas.detail"
        })

        .state('guru.muridkelas.detailjurusan', {
            url: "/detailjurusan/:id_jurusan",
            templateUrl: "views/guru/muridkelas/detailjurusan.html",
            data: { pageTitle: 'detail jurusan' },
            controller:"guru.muridkelas.detailjurusan"
        })

        .state('guru.muridkelas.detailguru', {
            url: "/detailguru/:id_guru",
            templateUrl: "views/guru/muridkelas/detailguru.html",
            data: { pageTitle: 'detail guru' },
            controller:"guru.muridkelas.detailguru"
        })

}

angular
    .module('inspinia')
    .config(configguru)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
