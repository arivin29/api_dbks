function configwilayah($stateProvider) {

    $stateProvider

    /*-----------------------------------------
      Provinsi ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('wilayah.provinsi', {
        url: "/provinsi",
        templateUrl: "views/wilayah/provinsi/data.html",
        data: { pageTitle: 'provinsi' },
        controller:"wilayah.provinsi"
    })
    .state('wilayah.provinsi.add', {
        url: "/create",
        templateUrl: "views/wilayah/provinsi/add.html",
        data: { pageTitle: 'add provinsi' },
        controller:"wilayah.provinsi.add"
    })

    .state('wilayah.provinsi.edit', {
        url: "/edit/:id_provinsi",
        templateUrl: "views/wilayah/provinsi/edit.html",
        data: { pageTitle: 'edit provinsi' },
        controller:"wilayah.provinsi.edit"
    })

    /*-----------------------------------------
      Kabkot ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('wilayah.kabkot', {
        url: "/kabkot",
        templateUrl: "views/wilayah/kabkot/data.html",
        data: { pageTitle: 'kabkot' },
        controller:"wilayah.kabkot"
    })
    .state('wilayah.kabkot.add', {
        url: "/create",
        templateUrl: "views/wilayah/kabkot/add.html",
        data: { pageTitle: 'add kabkot' },
        controller:"wilayah.kabkot.add"
    })

    .state('wilayah.kabkot.edit', {
        url: "/edit/:id_kabkot",
        templateUrl: "views/wilayah/kabkot/edit.html",
        data: { pageTitle: 'edit kabkot' },
        controller:"wilayah.kabkot.edit"
    })

    /*-----------------------------------------
      Kecamatan ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('wilayah.kecamatan', {
        url: "/kecamatan",
        templateUrl: "views/wilayah/kecamatan/data.html",
        data: { pageTitle: 'kecamatan' },
        controller:"wilayah.kecamatan"
    })
    .state('wilayah.kecamatan.add', {
        url: "/create",
        templateUrl: "views/wilayah/kecamatan/add.html",
        data: { pageTitle: 'add kecamatan' },
        controller:"wilayah.kecamatan.add"
    })

    .state('wilayah.kecamatan.edit', {
        url: "/edit/:id_kec",
        templateUrl: "views/wilayah/kecamatan/edit.html",
        data: { pageTitle: 'edit kecamatan' },
        controller:"wilayah.kecamatan.edit"
    })

    /*-----------------------------------------
      Kelurahan ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('wilayah.kelurahan', {
        url: "/kelurahan",
        templateUrl: "views/wilayah/kelurahan/data.html",
        data: { pageTitle: 'kelurahan' },
        controller:"wilayah.kelurahan"
    })
    .state('wilayah.kelurahan.add', {
        url: "/create",
        templateUrl: "views/wilayah/kelurahan/add.html",
        data: { pageTitle: 'add kelurahan' },
        controller:"wilayah.kelurahan.add"
    })

    .state('wilayah.kelurahan.edit', {
        url: "/edit/:id_kelurahan",
        templateUrl: "views/wilayah/kelurahan/edit.html",
        data: { pageTitle: 'edit kelurahan' },
        controller:"wilayah.kelurahan.edit"
    })

}

angular
    .module('inspinia')
    .config(configwilayah)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
