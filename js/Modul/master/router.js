function configMaster($stateProvider) {

    $stateProvider

    /*-----------------------------------------
      Pendidikan ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.pendidikan', {
        url: "/pendidikan",
        templateUrl: "views/master/pendidikan/data.html",
        data: { pageTitle: 'pendidikan' },
        controller:"master.pendidikan"
    })
    .state('master.pendidikan.add', {
        url: "/create",
        templateUrl: "views/master/pendidikan/add.html",
        data: { pageTitle: 'add pendidikan' },
        controller:"master.pendidikan.add"
    })

    .state('master.pendidikan.edit', {
        url: "/edit/:id_pendidikan",
        templateUrl: "views/master/pendidikan/edit.html",
        data: { pageTitle: 'edit pendidikan' },
        controller:"master.pendidikan.edit"
    })

    /*-----------------------------------------
      Pekerjaan ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.pekerjaan', {
        url: "/pekerjaan",
        templateUrl: "views/master/pekerjaan/data.html",
        data: { pageTitle: 'pekerjaan' },
        controller:"master.pekerjaan"
    })
    .state('master.pekerjaan.add', {
        url: "/create",
        templateUrl: "views/master/pekerjaan/add.html",
        data: { pageTitle: 'add pekerjaan' },
        controller:"master.pekerjaan.add"
    })

    .state('master.pekerjaan.edit', {
        url: "/edit/:id_pekerjaan",
        templateUrl: "views/master/pekerjaan/edit.html",
        data: { pageTitle: 'edit pekerjaan' },
        controller:"master.pekerjaan.edit"
    })

    /*-----------------------------------------
      Mapel ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.mapel', {
        url: "/mapel",
        templateUrl: "views/master/mapel/data.html",
        data: { pageTitle: 'mata pelajaran' },
        controller:"master.mapel"
    })
    .state('master.mapel.add', {
        url: "/create",
        templateUrl: "views/master/mapel/add.html",
        data: { pageTitle: 'add mata pelajaran' },
        controller:"master.mapel.add"
    })

    .state('master.mapel.edit', {
        url: "/edit/:id_mata_pelajaran",
        templateUrl: "views/master/mapel/edit.html",
        data: { pageTitle: 'edit mata pelajaran' },
        controller:"master.mapel.edit"
    })

    /*-----------------------------------------
      Jenis nilai ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.jn', {
        url: "/jn",
        templateUrl: "views/master/jn/data.html",
        data: { pageTitle: 'jenis nilai' },
        controller:"master.jn"
    })
    .state('master.jn.add', {
        url: "/create",
        templateUrl: "views/master/jn/add.html",
        data: { pageTitle: 'add jenis nilai' },
        controller:"master.jn.add"
    })

    .state('master.jn.edit', {
        url: "/edit/:id_jenis_nilai",
        templateUrl: "views/master/jn/edit.html",
        data: { pageTitle: 'edit jenis nilai' },
        controller:"master.jn.edit"
    })

    /*-----------------------------------------
      Absen ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.absen', {
        url: "/absen",
        templateUrl: "views/master/absen/data.html",
        data: { pageTitle: 'absen' },
        controller:"master.absen"
    })
    .state('master.absen.add', {
        url: "/create",
        templateUrl: "views/master/absen/add.html",
        data: { pageTitle: 'add absen' },
        controller:"master.absen.add"
    })

    .state('master.absen.edit', {
        url: "/edit/:id_m_absen",
        templateUrl: "views/master/absen/edit.html",
        data: { pageTitle: 'edit absen' },
        controller:"master.absen.edit"
    })    

    /*-----------------------------------------
      Pnilai ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.pnilai', {
        url: "/pnilai",
        templateUrl: "views/master/pnilai/data.html",
        data: { pageTitle: 'pengaturan nilai' },
        controller:"master.pnilai"
    })
    .state('master.pnilai.add', {
        url: "/create",
        templateUrl: "views/master/pnilai/add.html",
        data: { pageTitle: 'add pengaturan nilai' },
        controller:"master.pnilai.add"
    })

    .state('master.pnilai.edit', {
        url: "/edit/:id_pengaturan_nilai",
        templateUrl: "views/master/pnilai/edit.html",
        data: { pageTitle: 'edit pengaturan nilai' },
        controller:"master.pnilai.edit"
    })

    /*-----------------------------------------
      Gurump ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.gurump', {
        url: "/gurump",
        templateUrl: "views/master/gurump/data.html",
        data: { pageTitle: 'guru mata pelajaran' },
        controller:"master.gurump"
    })
    .state('master.gurump.add', {
        url: "/create",
        templateUrl: "views/master/gurump/add.html",
        data: { pageTitle: 'add guru mata pelajaran' },
        controller:"master.gurump.add"
    })

    .state('master.gurump.edit', {
        url: "/edit/:id_guru_mp",
        templateUrl: "views/master/gurump/edit.html",
        data: { pageTitle: 'edit guru mata pekerjaan' },
        controller:"master.gurump.edit"
    })

    /*-----------------------------------------
      Guru ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.guru', {
        url: "/guru",
        templateUrl: "views/master/guru/data.html",
        data: { pageTitle: 'guru' },
        controller:"master.guru"
    })
    .state('master.guru.detail', {
        url: "/detail/:id_guru",
        templateUrl: "views/master/guru/detail.html",
        data: { pageTitle: 'detail' },
        controller:"master.guru.detail"
    })
    .state('master.guru.add', {
        url: "/create",
        templateUrl: "views/master/guru/add.html",
        data: { pageTitle: 'add guru' },
        controller:"master.guru.add"
    })

    .state('master.guru.edit', {
        url: "/edit/:id_guru",
        templateUrl: "views/master/guru/edit.html",
        data: { pageTitle: 'edit guru' },
        controller:"master.guru.edit"
    })

    /*-----------------------------------------
      Buku ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.buku', {
        url: "/buku",
        templateUrl: "views/master/buku/data.html",
        data: { pageTitle: 'buku' },
        controller:"master.buku"
    })
    .state('master.buku.add', {
        url: "/create",
        templateUrl: "views/master/buku/add.html",
        data: { pageTitle: 'add buku' },
        controller:"master.buku.add"
    })
    .state('master.buku.edit', {
        url: "/edit/:id_buku",
        templateUrl: "views/master/buku/edit.html",
        data: { pageTitle: 'edit buku' },
        controller:"master.buku.edit"
    })

    /*-----------------------------------------
      Absentmt ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.absentmt', {
        url: "/absentmt",
        templateUrl: "views/master/absentmt/data.html",
        data: { pageTitle: 'absen tidak mmasuk tanggal' },
        controller:"master.absentmt"
    })
    .state('master.absentmt.add', {
        url: "/create",
        templateUrl: "views/master/absentmt/add.html",
        data: { pageTitle: 'add absen tidak mmasuk tanggal' },
        controller:"master.absentmt.add"
    })

    .state('master.absentmt.edit', {
        url: "/edit/:id_tidak_masuk_tanggal",
        templateUrl: "views/master/absentmt/edit.html",
        data: { pageTitle: 'edit absen tidak mmasuk tanggal' },
        controller:"master.absentmt.edit"
    })

    /*-----------------------------------------
      Absentm ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.absentm', {
        url: "/absentm",
        templateUrl: "views/master/absentm/data.html",
        data: { pageTitle: 'absen tidak mmasuk' },
        controller:"master.absentm"
    })
    .state('master.absentm.add', {
        url: "/create",
        templateUrl: "views/master/absentm/add.html",
        data: { pageTitle: 'add absen tidak mmasuk' },
        controller:"master.absentm.add"
    })

    .state('master.absentm.edit', {
        url: "/edit/:id_tidak_masuk",
        templateUrl: "views/master/absentm/edit.html",
        data: { pageTitle: 'edit absen tidak mmasuk' },
        controller:"master.absentm.edit"
    })

    /*-----------------------------------------
      Absenrekap ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.absenrekap', {
        url: "/absenrekap",
        templateUrl: "views/master/absenrekap/data.html",
        data: { pageTitle: 'absenrekap' },
        controller:"master.absenrekap"
    })
    .state('master.absenrekap.add', {
        url: "/create",
        templateUrl: "views/master/absenrekap/add.html",
        data: { pageTitle: 'add absenrekap' },
        controller:"master.absenrekap.add"
    })

    .state('master.absenrekap.edit', {
        url: "/edit/:id_rekap_absen",
        templateUrl: "views/master/absenrekap/edit.html",
        data: { pageTitle: 'edit absenrekap' },
        controller:"master.absenrekap.edit"
    })

    /*-----------------------------------------
      Tabsen ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.tabsen', {
        url: "/tabsen",
        templateUrl: "views/master/tabsen/data.html",
        data: { pageTitle: 'tabsen' },
        controller:"master.tabsen"
    })
    .state('master.tabsen.add', {
        url: "/create",
        templateUrl: "views/master/tabsen/add.html",
        data: { pageTitle: 'add tabsen' },
        controller:"master.tabsen.add"
    })

    .state('master.tabsen.edit', {
        url: "/edit/:id_absen",
        templateUrl: "views/master/tabsen/edit.html",
        data: { pageTitle: 'edit tabsen' },
        controller:"master.tabsen.edit"
    })

}

angular
    .module('inspinia')
    .config(configMaster)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
