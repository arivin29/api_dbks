/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/logins");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        /*-----------------------------------------
        MASTER ~~~~~~~~~~~~~~~~Mulai koding
        ------------------------------------------
        */

        .state('master', {
            abstract: true,
            url: "/master",
            data: { menu: 'master' },
            templateUrl: "views/template/content.html",
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'inspinia',
                            files: ['js/Modul/master/controller.js']
                        }
                    ]);
                }]
            }
        })
        .state('master.dashboard', {
            url: "/dashboard",
            templateUrl: "views/master/dashboard.html",
            data: { pageTitle: 'Master' }
        })

        /*-----------------------------------------
        ADMIN ~~~~~~~~~~~~~~~~Mulai koding
         ------------------------------------------
        */

        .state('admin', {
            abstract: true,
            url: "/admin",
            data: { menu: 'admin' },
            templateUrl: "views/template/content.html",
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'inspinia',
                            files: ['js/Modul/admin/controller.js']
                        }
                    ]);
                }]
            }
        })
        .state('admin.dashboard', {
            url: "/dashboard",
            templateUrl: "views/admin/dashboard.html",
            data: { pageTitle: 'Admin' }
        })


        /*-----------------------------------------
         GURU ~~~~~~~~~~~~~~~~Mulai koding
         ------------------------------------------
         */

        .state('guru', {
            abstract: true,
            url: "/guru",
            data: { menu: 'guru' },
            templateUrl: "views/template/content.html",
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'inspinia',
                            files: ['js/Modul/guru/controller.js']
                        }
                    ]);
                }]
            }
        })
        .state('guru.dashboard', {
            url: "/dashboard",
            templateUrl: "views/guru/dashboard.html",
            data: { pageTitle: 'Guru' }
        })

        /*-----------------------------------------
        MURID ~~~~~~~~~~~~~~~~Mulai koding
        ------------------------------------------
        */

        .state('murid', {
            abstract: true,
            url: "/murid",
            data: { menu: 'murid' },
            templateUrl: "views/template/content.html",
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'inspinia',
                            files: ['js/Modul/murid/controller.js']
                        }
                    ]);
                }]
            }
        })
        .state('murid.dashboard', {
            url: "/dashboard",
            templateUrl: "views/murid/dashboard.html",
            data: { pageTitle: 'Murid' }
        })


        /*-----------------------------------------
        ABSEN ~~~~~~~~~~~~~~~~Mulai koding
         ------------------------------------------
        */

        .state('absen', {
            abstract: true,
            url: "/absen",
            data: { menu: 'absen' },
            templateUrl: "views/template/content.html",
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'inspinia',
                            files: ['js/Modul/absen/controller.js']
                        }
                    ]);
                }]
            }
        })
        .state('absen.dashboard', {
            url: "/dashboard",
            templateUrl: "views/absen/dashboard.html",
            data: { pageTitle: 'Absen' }
        })


}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
