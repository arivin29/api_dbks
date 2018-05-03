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

        .state('murid.murid.kelas', {
            url: "/kelas",
            templateUrl: "views/murid/murid/kelas.html",
            data: { pageTitle: 'detail murid' },
            controller:"murid.murid.kelas"
        })
        .state('murid.ujian', {
            url: "/ujian",
            templateUrl: "views/murid/ujian/data.html",
            data: { pageTitle: 'Datas ujian' },
            controller:"murid.ujian"
        })
        .state('murid.ujian.mulai', {
            url: "/mulai/:id",
            templateUrl: "views/murid/ujian/mulai.html",
            data: {pageTitle: 'Datas mulai'},
            controller: "murid.ujian.mulai"
        })
        .state('murid.ujian.mulai.pertanyaan', {
            url: "/pertanyaan",
            templateUrl: "views/murid/ujian/mulai.pertanyaan.html",
            data: {pageTitle: 'Datas mulai'},
            controller: "murid.ujian.mulai.pertanyaan"
        })
        .state('murid.ujian.detail', {
            url: "/detail/:id",
            templateUrl: "views/murid/ujian/detail.html",
            data: { pageTitle: 'Datas mulai' },
            controller:"murid.detail"
        })



}

angular
    .module('inspinia')
    .config(configmurid)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
