function configabsen($stateProvider) {

    $stateProvider

    /*-----------------------------------------
      Absen ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('absen.absen', {
        url: "/absen",
        templateUrl: "views/absen/absen/data.html",
        data: { pageTitle: 'absen' },
        controller:"absen.absen"
    })
    .state('absen.absen.add', {
        url: "/create",
        templateUrl: "views/absen/absen/add.html",
        data: { pageTitle: 'add absen' },
        controller:"absen.absen.add"
    })

    .state('absen.absen.edit', {
        url: "/edit/:id_m_absen",
        templateUrl: "views/absen/absen/edit.html",
        data: { pageTitle: 'edit absen' },
        controller:"absen.absen.edit"
    })    

    /*-----------------------------------------
      Absentmt ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('absen.absentmt', {
        url: "/absentmt",
        templateUrl: "views/absen/absentmt/data.html",
        data: { pageTitle: 'absen tidak mmasuk tanggal' },
        controller:"absen.absentmt"
    })
    .state('absen.absentmt.add', {
        url: "/create",
        templateUrl: "views/absen/absentmt/add.html",
        data: { pageTitle: 'add absen tidak mmasuk tanggal' },
        controller:"absen.absentmt.add"
    })

    .state('absen.absentmt.edit', {
        url: "/edit/:id_tidak_masuk_tanggal",
        templateUrl: "views/absen/absentmt/edit.html",
        data: { pageTitle: 'edit absen tidak mmasuk tanggal' },
        controller:"absen.absentmt.edit"
    })

    /*-----------------------------------------
      Absentm ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('absen.absentm', {
        url: "/absentm",
        templateUrl: "views/absen/absentm/data.html",
        data: { pageTitle: 'absen tidak mmasuk' },
        controller:"absen.absentm"
    })
    .state('absen.absentm.add', {
        url: "/create",
        templateUrl: "views/absen/absentm/add.html",
        data: { pageTitle: 'add absen tidak mmasuk' },
        controller:"absen.absentm.add"
    })

    .state('absen.absentm.edit', {
        url: "/edit/:id_tidak_masuk",
        templateUrl: "views/absen/absentm/edit.html",
        data: { pageTitle: 'edit absen tidak mmasuk' },
        controller:"absen.absentm.edit"
    })

    /*-----------------------------------------
      Absenrekap ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('absen.absenrekap', {
        url: "/absenrekap",
        templateUrl: "views/absen/absenrekap/data.html",
        data: { pageTitle: 'absenrekap' },
        controller:"absen.absenrekap"
    })
    .state('absen.absenrekap.add', {
        url: "/create",
        templateUrl: "views/absen/absenrekap/add.html",
        data: { pageTitle: 'add absenrekap' },
        controller:"absen.absenrekap.add"
    })

    .state('absen.absenrekap.edit', {
        url: "/edit/:id_rekap_absen",
        templateUrl: "views/absen/absenrekap/edit.html",
        data: { pageTitle: 'edit absenrekap' },
        controller:"absen.absenrekap.edit"
    })

    /*-----------------------------------------
      Tabsen ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('absen.tabsen', {
        url: "/tabsen",
        templateUrl: "views/absen/tabsen/data.html",
        data: { pageTitle: 'tabsen' },
        controller:"absen.tabsen"
    })
    .state('absen.tabsen.add', {
        url: "/create",
        templateUrl: "views/absen/tabsen/add.html",
        data: { pageTitle: 'add tabsen' },
        controller:"absen.tabsen.add"
    })

    .state('absen.tabsen.edit', {
        url: "/edit/:id_absen",
        templateUrl: "views/absen/tabsen/edit.html",
        data: { pageTitle: 'edit tabsen' },
        controller:"absen.tabsen.edit"
    })

}

angular
    .module('inspinia')
    .config(configabsen)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
