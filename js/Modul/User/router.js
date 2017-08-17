function configLogin($stateProvider) {
    $stateProvider


        .state('acl', {
            abstract: true,
            url: "/acl",
            data: { menu: 'acl' },
            templateUrl: "views/template/content.html",
        })

        //user
        .state('acl.users', {
            url: "/users",
            templateUrl: "views/acl/users/data.html",
            data: { pageTitle: 'Profile' },
            controller:"acl.users"
        })

        .state('acl.users.add', {
            url: "/add",
            templateUrl: "views/acl/users/add.html",
            data: { pageTitle: 'Profile' },
            controller:"acl.users.add"
        })

        .state('acl.users.edit', {
            url: "/edit/:id_user",
            templateUrl: "views/acl/users/edit.html",
            data: { pageTitle: 'Profile' },
            controller:"acl.users.edit"
        })
        .state('acl.users.detail', {
            url: "/detail/:id_user",
            templateUrl: "views/acl/users/detail.html",
            data: { pageTitle: 'Profile' },
            controller:"acl.users.detail"
        })
        .state('acl.users.detail.akses', {
            url: "/akses",
            templateUrl: "views/acl/users/detail.akses.html",
            data: { pageTitle: 'Profile akses' },
            controller:"acl.users.detail.akses"
        })

        //Group
        .state('acl.groups', {
            url: "/groups",
            templateUrl: "views/acl/groups/data.html",
            data: { pageTitle: 'Profile' },
            controller:"acl.groups"
        })
        .state('acl.groups.add', {
            url: "/add",
            templateUrl: "views/acl/groups/add.html",
            data: { pageTitle: 'groups' },
            controller:"acl.groups.add"
        })
        .state('acl.groups.edit', {
            url: "/edit/:id_groups",
            templateUrl: "views/acl/groups/edit.html",
            data: { pageTitle: 'Profile' },
            controller:"acl.groups.edit"
        })

        //modul
        .state('acl.moduls', {
            url: "/moduls",
            templateUrl: "views/acl/moduls/data.html",
            data: { pageTitle: 'Profile' },
            controller:"acl.moduls"
        })

        //controller
        .state('acl.controllers', {
            url: "/controllers",
            templateUrl: "views/acl/controllers/data.html",
            data: { pageTitle: 'Profile' },
            controller:"acl.controllers"
        })
        .state('acl.controllers.add', {
            url: "/add",
            templateUrl: "views/acl/controllers/add.html",
            data: { pageTitle: 'groups' },
            controller:"acl.controllers.add"
        })
        .state('acl.controllers.edit', {
            url: "/edit/:id_controller",
            templateUrl: "views/acl/controllers/edit.html",
            data: { pageTitle: 'Profile' },
            controller:"acl.controllers.edit"
        })


 

}

angular
    .module('inspinia')
    .config(configLogin)
    // .run(function($rootScope, $state) {
    //     $rootScope.$state = $state;
    // });
