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
      Guru ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('guru.guru', {
        url: "/guru",
        templateUrl: "views/guru/guru/data.html",
        data: { pageTitle: 'guru' },
        controller:"guru.guru"
    })
    .state('guru.guru.detail', {
        url: "/detail/:id_guru",
        templateUrl: "views/guru/guru/detail.html",
        data: { pageTitle: 'detail' },
        controller:"guru.guru.detail"
    })
    .state('guru.guru.add', {
        url: "/create",
        templateUrl: "views/guru/guru/add.html",
        data: { pageTitle: 'add guru' },
        controller:"guru.guru.add"
    })

    .state('guru.guru.edit', {
        url: "/edit/:id_guru",
        templateUrl: "views/guru/guru/edit.html",
        data: { pageTitle: 'edit guru' },
        controller:"guru.guru.edit"
    })
        //* ------------------ Murid -------------------*//
        .state('guru.guru.detail.murid', {
            url: "/murid",
            templateUrl: "views/guru/guru/murid/data.html",
            data: { pageTitle: 'routine' },
            controller:"guru.guru.detail.murid"
        })

}

angular
    .module('inspinia')
    .config(configguru)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
