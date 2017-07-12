function configadmin($stateProvider) {

    $stateProvider

    /*-----------------------------------------
      Guru ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('admin.guru', {
        url: "/guru",
        templateUrl: "views/admin/guru/data.html",
        data: { pageTitle: 'guru' },
        controller:"admin.guru"
    })
    .state('admin.guru.detail', {
        url: "/detail/:id_guru",
        templateUrl: "views/admin/guru/detail.html",
        data: { pageTitle: 'detail' },
        controller:"admin.guru.detail"
    })
    .state('admin.guru.add', {
        url: "/create",
        templateUrl: "views/admin/guru/add.html",
        data: { pageTitle: 'add guru' },
        controller:"admin.guru.add"
    })

    .state('admin.guru.edit', {
        url: "/edit/:id_guru",
        templateUrl: "views/admin/guru/edit.html",
        data: { pageTitle: 'edit guru' },
        controller:"admin.guru.edit"
    })

    /*-----------------------------------------
      Murid ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('admin.murid', {
        url: "/murid",
        templateUrl: "views/admin/murid/data.html",
        data: { pageTitle: 'murid' },
        controller:"admin.murid"
    })
    .state('admin.murid.detail', {
        url: "/detail/:id_murid",
        templateUrl: "views/admin/murid/detail.html",
        data: { pageTitle: 'detail' },
        controller:"admin.murid.detail"
    })
    .state('admin.murid.add', {
        url: "/create",
        templateUrl: "views/admin/murid/add.html",
        data: { pageTitle: 'add murid' },
        controller:"admin.murid.add"
    })

    .state('admin.murid.edit', {
        url: "/edit/:id_murid",
        templateUrl: "views/admin/murid/edit.html",
        data: { pageTitle: 'edit murid' },
        controller:"admin.murid.edit"
    })

    /*-----------------------------------------
      Muridkelas ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('admin.muridkelas', {
        url: "/muridkelas",
        templateUrl: "views/admin/muridkelas/data.html",
        data: { pageTitle: 'muridkelas' },
        controller:"admin.muridkelas"
    })
    .state('admin.muridkelas.add', {
        url: "/create",
        templateUrl: "views/admin/muridkelas/add.html",
        data: { pageTitle: 'add muridkelas' },
        controller:"admin.muridkelas.add"
    })

    .state('admin.muridkelas.edit', {
        url: "/edit/:id_murid_kelas",
        templateUrl: "views/admin/muridkelas/edit.html",
        data: { pageTitle: 'edit muridkelas' },
        controller:"admin.muridkelas.edit"
    })

        .state('admin.muridkelas.detail', {
            url: "/detail/:id_kelas",
            templateUrl: "views/admin/muridkelas/detail.html",
            data: { pageTitle: 'detail kelas' },
            controller:"admin.muridkelas.detail"
        })

        .state('admin.muridkelas.detailjurusan', {
            url: "/detailjurusan/:id_jurusan",
            templateUrl: "views/admin/muridkelas/detailjurusan.html",
            data: { pageTitle: 'detail jurusan' },
            controller:"admin.muridkelas.detailjurusan"
        })

        .state('admin.muridkelas.detailguru', {
            url: "/detailguru/:id_guru",
            templateUrl: "views/admin/muridkelas/detailguru.html",
            data: { pageTitle: 'detail guru' },
            controller:"admin.muridkelas.detailguru"
        })
}

angular
    .module('inspinia')
    .config(configadmin)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
