function configguru($stateProvider) {

    $stateProvider

    /*-----------------------------------------
     Pnilai ~~~~~~~~~~~~~~~~Mulai koding
     /*---------------------------------------*/
        .state('guru.pnilai', {
            url: "/pnilai",
            templateUrl: "views/guru/pnilai/data.html",
            data: {pageTitle: 'pengaturan nilai'},
            controller: "guru.pnilai"
        })
        .state('guru.pnilai.add', {
            url: "/create",
            templateUrl: "views/guru/pnilai/add.html",
            data: {pageTitle: 'add pengaturan nilai'},
            controller: "guru.pnilai.add"
        })

        .state('guru.pnilai.edit', {
            url: "/edit/:id_pengaturan_nilai",
            templateUrl: "views/guru/pnilai/edit.html",
            data: {pageTitle: 'edit pengaturan nilai'},
            controller: "guru.pnilai.edit"
        })

        /*-----------------------------------------
         Informations ~~~~~~~~~~~~~~~~Mulai koding
         /*---------------------------------------*/

        .state('guru.kelas', {
            url: "/kelas",
            templateUrl: "views/guru/kelas/data.html",
            data: {pageTitle: 'Informations guru'},
            controller: "guru.kelas"
        })
        .state('guru.kelas.detail', {
            abstract:true,
            url: "/detail/:id_guru_mp",
            templateUrl: "views/guru/kelas/detail.html",
            data: {pageTitle: 'Informations murid guru'},
            controller: "guru.kelas.detail"
        })
        .state('guru.kelas.detail.murid', {
            url: "/murid",
            templateUrl: "views/guru/kelas/murid.html",
            data: {pageTitle: 'Informations murid guru'},
            controller: "guru.kelas.detail.murid"
        })
        .state('guru.kelas.detail.nilai', {
            url: "/nilai",
            templateUrl: "views/guru/kelas/nilai/data.html",
            data: {pageTitle: 'Informations nilai murid'},
            controller: "guru.kelas.detail.nilai"
        })

        .state('guru.kelas.detail.nilai.add', {
            url: "/create",
            templateUrl: "views/guru/kelas/nilai/add.html",
            data: {pageTitle: 'add nilai murid'},
            controller: "guru.kelas.detail.nilai.add"
        })

        .state('guru.kelas.detail.absensi', {
            url: "/absensi",
            templateUrl: "views/guru/kelas/absensi/data.html",
            data: {pageTitle: 'Informations absensi murid'},
            controller: "guru.kelas.detail.absensi"
        })

        .state('guru.kelas.detail.absensi.add', {
            url: "/create",
            templateUrl: "views/guru/kelas/absensi/add.html",
            data: {pageTitle: 'add absensi murid'},
            controller: "guru.kelas.detail.absensi.add"
        })

}

angular
    .module('inspinia')
    .config(configguru)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });
