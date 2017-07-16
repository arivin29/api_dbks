function configmurid($stateProvider) {

    $stateProvider

    /*-----------------------------------------
      murids ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('murid.murids', {
        url: "/murids",
        templateUrl: "views/murid/murids/data.html",
        data: { pageTitle: 'murids' },
        controller:"murid.murids"
    })

        .state('murid.murids.detailmurids', {
            url: "/detailmurids/:id_murid",
            templateUrl: "views/murid/murids/detailmurids.html",
            data: { pageTitle: 'detail murids' },
            controller:"murid.murids.detailmurids"
        })
/*
        .state('murid.murids.detailnilai', {
            url: "/detailnilai/:id_kelas",
            templateUrl: "views/murid/murids/detailnilai.html",
            data: { pageTitle: 'detail nilai murid' },
            controller:"murid.murids.detailnilai"
        })

        .state('murid.murids.detailabsensi', {
            url: "/detailabsensi/:id_kelas",
            templateUrl: "views/murid/murids/detailabsensi.html",
            data: { pageTitle: 'detail absensi murid' },
            controller:"murid.murids.detailabsensi"
        })

        .state('murid.murids.detailpnilai', {
            url: "/detailjadwal/:id_kelas",
            templateUrl: "views/murid/murids/detailpnilai.html",
            data: { pageTitle: 'detail pengaturan nilai' },
            controller:"murid.murids.detailpnilai"
        })

        .state('murid.murids.detailjadwal', {
            url: "/detailjadwal/:id_kelas",
            templateUrl: "views/murid/murids/detailjadwal.html",
            data: { pageTitle: 'detail jadwal pelajaran kelas' },
            controller:"murid.murids.detailjadwal"
        })

        .state('murid.murids.detailjurusan', {
            url: "/detailjurusan/:id_jurusan",
            templateUrl: "views/murid/murids/detailjurusan.html",
            data: { pageTitle: 'detail jurusan' },
            controller:"murid.murids.detailjurusan"
        })
*/

}

angular
    .module('inspinia')
    .config(configmurid)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
