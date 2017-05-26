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
         STORE ~~~~~~~~~~~~~~~~Mulai koding
         ------------------------------------------
         */

        .state('store', {
            abstract: true,
            url: "/store",
            data: { menu: 'store' },
            templateUrl: "views/template/content.html",
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'inspinia',
                            files: ['js/Modul/store/controller.js']
                        }
                    ]);
                }]
            }
        })
        .state('store.dashboard', {
            url: "/dashboard",
            templateUrl: "views/store/dashboard.html",
            data: { pageTitle: 'store' }
        })

        /*-----------------------------------------
        PURCHASING ~~~~~~~~~~~~~~~~Mulai koding
        ------------------------------------------
        */

        .state('purchasing', {
            abstract: true,
            url: "/purchasing",
            data: { menu: 'purchasing' },
            templateUrl: "views/template/content.html",
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'inspinia',
                            files: ['js/Modul/purchasing/controller.js']
                        }
                    ]);
                }]
            }
        })
        .state('purchasing.dashboard', {
            url: "/dashboard",
            templateUrl: "views/purchasing/dashboard.html",
            data: { pageTitle: 'Master' }
        })


        /*-----------------------------------------
        QA ~~~~~~~~~~~~~~~~Mulai koding
         ------------------------------------------
        */

        .state('qa', {
            abstract: true,
            url: "/qa",
            data: { menu: 'qa' },
            templateUrl: "views/template/content.html",
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'inspinia',
                            files: ['js/Modul/qa/controller.js']
                        }
                    ]);
                }]
            }
        })
        .state('qa.dashboard', {
            url: "/dashboard",
            templateUrl: "views/qa/dashboard.html",
            data: { pageTitle: 'Master' }
        })


        /*-----------------------------------------
         UNITILITY ~~~~~~~~~~~~~~~~Mulai koding
         ------------------------------------------
        */

        .state('utility', {
            abstract: true,
            url: "/utility",
            data: { menu: 'utility' },
            templateUrl: "views/template/content.html",
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'inspinia',
                            files: ['js/Modul/utility/controller.js']
                        }
                    ]);
                }]
            }
        })
        .state('utility.currency', {
            url: "/currency",
            templateUrl: "views/currency/currency.html",
            data: { pageTitle: 'Master' }
        })

        /*-----------------------------------------
        MPC
         ------------------------------------------
        */

        .state('mpc', {
            abstract: true,
            url: "/mpc",
            data: { menu: 'mpc' },
            templateUrl: "views/template/content.html",
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'inspinia',
                            files: ['js/Modul/mpc/controller.js']
                        }
                    ]);
                }]
            }
        })
        .state('mpc.dashboard', {
            url: "/dashboard",
            templateUrl: "views/mpc/dashboard.html",
            data: { pageTitle: 'mpc' }
        })


        /*-----------------------------------------
        Engineer
         ------------------------------------------
        */

        .state('engineer', {
            abstract: true,
            url: "/engineer",
            data: { menu: 'engineer' },
            templateUrl: "views/template/content.html",
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'inspinia',
                            files: ['js/Modul/engineer/controller.js']
                        }
                    ]);
                }]
            }
        })
        .state('engineer.dashboard', {
            url: "/dashboard",
            templateUrl: "views/engineer/dashboard.html",
            data: { pageTitle: 'engineer' }
        })
        /*-----------------------------------------
        Technical Report
         ------------------------------------------
        */

        .state('tech_rec', {
            abstract: true,
            url: "/tech_rec",
            data: { menu: 'tech_rec' },
            templateUrl: "views/template/content.html",
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'inspinia',
                            files: ['js/Modul/tech_rec/controller.js']
                        }
                    ]);
                }]
            }
        })
        .state('tech_rec.dashboard', {
            url: "/dashboard",
            templateUrl: "views/tech_rec/dashboard.html",
            data: { pageTitle: 'tech_rec' }
        })


}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
