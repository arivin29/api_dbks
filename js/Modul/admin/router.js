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
      Gurump ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('admin.gurump', {
        url: "/gurump",
        templateUrl: "views/admin/gurump/data.html",
        data: { pageTitle: 'guru mata pelajaran' },
        controller:"admin.gurump"
    })
    .state('admin.gurump.add', {
        url: "/create",
        templateUrl: "views/admin/gurump/add.html",
        data: { pageTitle: 'add guru mata pelajaran' },
        controller:"admin.gurump.add"
    })

    .state('admin.gurump.edit', {
        url: "/edit/:id_guru_mp",
        templateUrl: "views/admin/gurump/edit.html",
        data: { pageTitle: 'edit guru mata pekerjaan' },
        controller:"admin.gurump.edit"
    })

    /*-----------------------------------------
      Nilai ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('admin.nilai', {
        url: "/nilai",
        templateUrl: "views/admin/nilai/data.html",
        data: { pageTitle: 'nilai' },
        controller:"admin.nilai"
    })
    .state('admin.nilai.add', {
        url: "/create",
        templateUrl: "views/admin/nilai/add.html",
        data: { pageTitle: 'nilai add' },
        controller:"admin.nilai.add"
    })

    .state('admin.nilai.edit', {
        url: "/edit/:id_nilai",
        templateUrl: "views/admin/nilai/edit.html",
        data: { pageTitle: 'nilai edit' },
        controller:"admin.nilai.edit"
    })

        .state('admin.nilai.detailnilai', {
            url: "/detailnilai/:id_nilai",
            templateUrl: "views/admin/nilai/detailnilai.html",
            data: { pageTitle: 'detail nilai murid' },
            controller:"admin.nilai.detailnilai"
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

    /*-----------------------------------------
      Isikelas ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('admin.isikelas', {
        url: "/isikelas",
        templateUrl: "views/admin/isikelas/data.html",
        data: { pageTitle: 'Isikelas' },
        controller:"admin.isikelas"
    })

    .state('admin.isikelas.add', {
        url: "/create",
        templateUrl: "views/admin/isikelas/add.html",
        data: { pageTitle: 'add isi kelas' },
        controller:"admin.isikelas.add"
    })

    .state('admin.isikelas.edit', {
        url: "/edit/:id_isi_kelas",
        templateUrl: "views/admin/isikelas/edit.html",
        data: { pageTitle: 'edit isi kelas' },
        controller:"admin.isikelas.edit"
    })

        .state('admin.isikelas.detailkelas', {
            url: "/detailkelas/:id_kelas",
            templateUrl: "views/admin/isikelas/detailkelas.html",
            data: { pageTitle: 'detail kelas murid' },
            controller:"admin.isikelas.detailkelas"
        })

        .state('admin.isikelas.detailnilai', {
            url: "/detailnilai/:id_kelas",
            templateUrl: "views/admin/isikelas/detailnilai.html",
            data: { pageTitle: 'detail nilai murid' },
            controller:"admin.isikelas.detailnilai"
        })

        .state('admin.isikelas.detailabsensi', {
            url: "/detailabsensi/:id_kelas",
            templateUrl: "views/admin/isikelas/detailabsensi.html",
            data: { pageTitle: 'detail absensi murid' },
            controller:"admin.isikelas.detailabsensi"
        })

/*        .state('admin.isikelas.detailpnilai', {
            url: "/detailjadwal/:id_kelas",
            templateUrl: "views/admin/isikelas/detailpnilai.html",
            data: { pageTitle: 'detail pengaturan nilai' },
            controller:"admin.isikelas.detailpnilai"
        })
*/
        .state('admin.isikelas.detailjadwal', {
            url: "/detailjadwal/:id_kelas",
            templateUrl: "views/admin/isikelas/detailjadwal.html",
            data: { pageTitle: 'detail jadwal pelajaran kelas' },
            controller:"admin.isikelas.detailjadwal"
        })

        .state('admin.isikelas.detailjurusan', {
            url: "/detailjurusan/:id_jurusan",
            templateUrl: "views/admin/isikelas/detailjurusan.html",
            data: { pageTitle: 'detail jurusan' },
            controller:"admin.isikelas.detailjurusan"
        })

}

angular
    .module('inspinia')
    .config(configadmin)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
