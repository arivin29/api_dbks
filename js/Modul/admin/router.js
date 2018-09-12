function configadmin($stateProvider) {

    $stateProvider

    /*-----------------------------------------
     Guru ~~~~~~~~~~~~~~~~Mulai koding
     /*---------------------------------------*/
        .state('admin.guru', {
            url: "/guru",
            templateUrl: "views/admin/guru/data.html",
            data: {pageTitle: 'guru'},
            controller: "admin.guru"
        })
        .state('admin.guru.add', {
            url: "/create",
            templateUrl: "views/admin/guru/add.html",
            data: {pageTitle: 'add guru'},
            controller: "admin.guru.add"
        })

        .state('admin.guru.edit', {
            url: "/edit/:id_guru",
            templateUrl: "views/admin/guru/edit.html",
            data: {pageTitle: 'edit guru'},
            controller: "admin.guru.edit"
        })
        .state('admin.guru.detail.edit', {
            url: "/edit",
            templateUrl: "views/admin/guru/detail.photo.html",
            data: {pageTitle: 'edit guru'},
            controller: "admin.guru.detail.photo"
        })

        .state('admin.guru.detail', {
            abstract: true,
            url: "/detail/:id_guru",
            templateUrl: "views/admin/guru/detail.html",
            data: {pageTitle: 'Detail guru'},
            controller: "admin.guru.detail"
        })
        .state('admin.guru.detail.gurump', {
            url: "/gurump",
            templateUrl: "views/admin/guru/gurump/data.html",
            data: {pageTitle: 'Detail guru gurump'},
            controller: "admin.guru.detail.gurump"
        })
        .state('admin.guru.detail.gurump.add', {
            url: "/add",
            templateUrl: "views/admin/guru/gurump/add.html",
            data: {pageTitle: 'Add'},
            controller: "admin.guru.detail.gurump.add"
        })

        .state('admin.guru.detail.gurump.edit', {
            url: "/edit/:id_guru_mp",
            templateUrl: "views/admin/guru/gurump/edit.html",
            data: {pageTitle: 'Edit'},
            controller: "admin.guru.detail.gurump.edit"
        })

        /*-----------------------------------------
         Murid ~~~~~~~~~~~~~~~~Mulai koding
         /*---------------------------------------*/
        .state('admin.murid', {
            url: "/murid",
            templateUrl: "views/admin/murid/data.html",
            data: {pageTitle: 'murid'},
            controller: "admin.murid"
        })

        .state('admin.murid.add', {
            url: "/create",
            templateUrl: "views/admin/murid/add.html",
            data: {pageTitle: 'add murid'},
            controller: "admin.murid.add"
        })

        .state('admin.murid.edit', {
            url: "/edit/:id_murid",
            templateUrl: "views/admin/murid/edit.html",
            data: {pageTitle: 'edit murid'},
            controller: "admin.murid.edit"
        })

        /*-----------------------------------------
         Muridkelas ~~~~~~~~~~~~~~~~Mulai koding
         /*---------------------------------------*/
        .state('admin.murid_kelas', {
            url: "/murid_kelas",
            templateUrl: "views/admin/murid_kelas/data.html",
            data: {pageTitle: 'murid_kelas'},
            controller: "admin.murid_kelas"
        })
        //parent nyo beda
        .state('admin.murid_detail.kelas.add', {
            url: "/create",
            templateUrl: "views/admin/murid_detail/kelas/add.html",
            data: {pageTitle: 'add murid_kelas'},
            controller: "admin.murid_detail.kelas.add"
        })

        .state('admin.murid_detail.kelas.edit', {
            url: "/edit/:id_murid_kelas",
            templateUrl: "views/admin/murid_detail/kelas/edit.html",
            data: {pageTitle: 'edit murid_kelas'},
            controller: "admin.murid_detail.kelas.edit"
        })
        /*-----------------------------------------
         Murid DETAIL
         /*---------------------------------------*/
        .state('admin.murid_detail', {
            abstract: true,
            url: "/murid_detail/:id_murid",
            templateUrl: "views/admin/murid_detail/detail.html",
            data: {pageTitle: 'murid_detail'},
            controller: "admin.murid_detail"
        })
        .state('admin.murid_detail.kelas', {
            url: "/kelas",
            templateUrl: "views/admin/murid_detail/kelas/data.html",
            data: {pageTitle: 'kelas'},
            controller: "admin.murid_detail.kelas"
        })
        .state('admin.murid_detail.mata_pelajaran', {
            url: "/mata_pelajaran",
            templateUrl: "views/admin/murid_detail/mata_pelajaran/data.html",
            data: {pageTitle: 'mata_pelajaran'},
            controller: "admin.murid_detail.mata_pelajaran"
        })


        /*-----------------------------------------
         Nilai ~~~~~~~~~~~~~~~~Mulai koding
         /*---------------------------------------*/
        .state('admin.nilai', {
            url: "/nilai",
            templateUrl: "views/admin/nilai/data.html",
            data: {pageTitle: 'nilai'},
            controller: "admin.nilai"
        })
        .state('admin.nilai.add', {
            url: "/create",
            templateUrl: "views/admin/nilai/add.html",
            data: {pageTitle: 'nilai add'},
            controller: "admin.nilai.add"
        })

        .state('admin.nilai.edit', {
            url: "/edit/:id_nilai",
            templateUrl: "views/admin/nilai/edit.html",
            data: {pageTitle: 'nilai edit'},
            controller: "admin.nilai.edit"
        })


        /*-----------------------------------------
             EXTRA
        /*---------------------------------------*/
        .state('admin.extra', {
            url: "/extra",
            templateUrl: "views/admin/extra/data.html",
            data: {pageTitle: 'extra'},
            controller: "admin.extra"
        })
        .state('admin.extra.add', {
            url: "/add",
            templateUrl: "views/admin/extra/add.html",
            data: {pageTitle: 'extra'},
            controller: "admin.extra.add"
        })
        .state('admin.extra.edit', {
            url: "/edit/:id_extra",
            templateUrl: "views/admin/extra/edit.html",
            data: {pageTitle: 'edit'},
            controller: "admin.extra.edit"
        })
        .state('admin.extra.detail', {
            url: "/detail/:id_extra",
            templateUrl: "views/admin/extra/detail.html",
            data: {pageTitle: 'detail'},
            controller: "admin.extra.detail"
        })
        .state('admin.extra.detail.add', {
            url: "/add",
            templateUrl: "views/admin/extra/detail.add.html",
            data: {pageTitle: 'detail'},
            controller: "admin.extra.detail.add"
        })
        .state('admin.extra.detail.edit', {
            url: "/edit/:id_extra_activity",
            templateUrl: "views/admin/extra/detail.edit.html",
            data: {pageTitle: 'detail'},
            controller: "admin.extra.detail.edit"
        })


}

angular
    .module('inspinia')
    .config(configadmin)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });
