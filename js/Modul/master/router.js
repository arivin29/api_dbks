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
      Provinsi ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.provinsi', {
        url: "/provinsi",
        templateUrl: "views/master/provinsi/data.html",
        data: { pageTitle: 'provinsi' },
        controller:"master.provinsi"
    })
    .state('master.provinsi.add', {
        url: "/create",
        templateUrl: "views/master/provinsi/add.html",
        data: { pageTitle: 'add provinsi' },
        controller:"master.provinsi.add"
    })

    .state('master.provinsi.edit', {
        url: "/edit/:id_provinsi",
        templateUrl: "views/master/provinsi/edit.html",
        data: { pageTitle: 'edit provinsi' },
        controller:"master.provinsi.edit"
    })

    /*-----------------------------------------
      Kabkot ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.kabkot', {
        url: "/kabkot",
        templateUrl: "views/master/kabkot/data.html",
        data: { pageTitle: 'kabkot' },
        controller:"master.kabkot"
    })
    .state('master.kabkot.add', {
        url: "/create",
        templateUrl: "views/master/kabkot/add.html",
        data: { pageTitle: 'add kabkot' },
        controller:"master.kabkot.add"
    })

    .state('master.kabkot.edit', {
        url: "/edit/:id_kabkot",
        templateUrl: "views/master/kabkot/edit.html",
        data: { pageTitle: 'edit kabkot' },
        controller:"master.kabkot.edit"
    })

    /*-----------------------------------------
      Kecamatan ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.kecamatan', {
        url: "/kecamatan",
        templateUrl: "views/master/kecamatan/data.html",
        data: { pageTitle: 'kecamatan' },
        controller:"master.kecamatan"
    })
    .state('master.kecamatan.add', {
        url: "/create",
        templateUrl: "views/master/kecamatan/add.html",
        data: { pageTitle: 'add kecamatan' },
        controller:"master.kecamatan.add"
    })

    .state('master.kecamatan.edit', {
        url: "/edit/:id_kec",
        templateUrl: "views/master/kecamatan/edit.html",
        data: { pageTitle: 'edit kecamatan' },
        controller:"master.kecamatan.edit"
    })

    /*-----------------------------------------
      Kelurahan ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.kelurahan', {
        url: "/kelurahan",
        templateUrl: "views/master/kelurahan/data.html",
        data: { pageTitle: 'kelurahan' },
        controller:"master.kelurahan"
    })
    .state('master.kelurahan.add', {
        url: "/create",
        templateUrl: "views/master/kelurahan/add.html",
        data: { pageTitle: 'add kelurahan' },
        controller:"master.kelurahan.add"
    })

    .state('master.kelurahan.edit', {
        url: "/edit/:id_kelurahan",
        templateUrl: "views/master/kelurahan/edit.html",
        data: { pageTitle: 'edit kelurahan' },
        controller:"master.kelurahan.edit"
    })

    /*-----------------------------------------
      Jurusan ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.jurusan', {
        url: "/jurusan",
        templateUrl: "views/master/jurusan/data.html",
        data: { pageTitle: 'jurusan' },
        controller:"master.jurusan"
    })
    .state('master.jurusan.add', {
        url: "/create",
        templateUrl: "views/master/jurusan/add.html",
        data: { pageTitle: 'add jurusan' },
        controller:"master.jurusan.add"
    })

    .state('master.jurusan.edit', {
        url: "/edit/:id_jurusan",
        templateUrl: "views/master/jurusan/edit.html",
        data: { pageTitle: 'edit jurusan' },
        controller:"master.jurusan.edit"
    })

}

angular
    .module('inspinia')
    .config(configMaster)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
