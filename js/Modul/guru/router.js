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
      Isikelas ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('guru.isikelas', {
        url: "/isikelas",
        templateUrl: "views/guru/isikelas/data.html",
        data: { pageTitle: 'Isikelas' },
        controller:"guru.isikelas"
    })

    .state('guru.isikelas.add', {
        url: "/create",
        templateUrl: "views/guru/isikelas/add.html",
        data: { pageTitle: 'add isi kelas' },
        controller:"guru.isikelas.add"
    })

    .state('guru.isikelas.edit', {
        url: "/edit/:id_isi_kelas",
        templateUrl: "views/guru/isikelas/edit.html",
        data: { pageTitle: 'edit isi kelas' },
        controller:"guru.isikelas.edit"
    })

        .state('guru.isikelas.detailkelas', {
            url: "/detailkelas/:id_kelas",
            templateUrl: "views/guru/isikelas/detailkelas.html",
            data: { pageTitle: 'detail kelas murid' },
            controller:"guru.isikelas.detailkelas"
        })

        .state('guru.isikelas.detailnilai', {
            url: "/detailnilai/:id_kelas",
            templateUrl: "views/guru/isikelas/detailnilai.html",
            data: { pageTitle: 'detail nilai murid' },
            controller:"guru.isikelas.detailnilai"
        })

        .state('guru.isikelas.detailabsensi', {
            url: "/detailabsensi/:id_kelas",
            templateUrl: "views/guru/isikelas/detailabsensi.html",
            data: { pageTitle: 'detail absensi murid' },
            controller:"guru.isikelas.detailabsensi"
        })

/*        .state('guru.isikelas.detailpnilai', {
            url: "/detailjadwal/:id_kelas",
            templateUrl: "views/guru/isikelas/detailpnilai.html",
            data: { pageTitle: 'detail pengaturan nilai' },
            controller:"guru.isikelas.detailpnilai"
        })
*/
        .state('guru.isikelas.detailjadwal', {
            url: "/detailjadwal/:id_kelas",
            templateUrl: "views/guru/isikelas/detailjadwal.html",
            data: { pageTitle: 'detail jadwal pelajaran kelas' },
            controller:"guru.isikelas.detailjadwal"
        })

        .state('guru.isikelas.detailjurusan', {
            url: "/detailjurusan/:id_jurusan",
            templateUrl: "views/guru/isikelas/detailjurusan.html",
            data: { pageTitle: 'detail jurusan' },
            controller:"guru.isikelas.detailjurusan"
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
