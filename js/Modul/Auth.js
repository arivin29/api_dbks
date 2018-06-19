var auth = angular.module("Auth",['ngStorage','angular-jwt']);

auth.service("role",function ($state,myHelp,$localStorage, $http) {

    this.setToken = function (data) {
        $localStorage.token= data;
        this.setMenu(data);

    }

    this.setMenu = function (token) {
        myHelp.getParam_noToken('/acl/akses',{token:token})
            .then(function(respons){
                $localStorage.curren_user = respons.data.user;

                $state.go($localStorage.curren_user.tipe + '.dashboard',{},{})
            });

    }
});

auth.service("config",function ($state,myHelp) {


});

auth.config(function Config($httpProvider, jwtOptionsProvider) {
    jwtOptionsProvider.config({

        tokenGetter: ['$localStorage', function($localStorage) {
            return $localStorage.token;
        }],

        whiteListedDomains: ['mansasi.edutech.web.id','128.199.184.210','beon.devetek.com'],
        // whiteListedDomains: ['192.168.0.247', 'localhost']
        unauthenticatedRedirectPath: '/logins'
    });
    $httpProvider.interceptors.push('jwtInterceptor');

});


auth.run( function ($rootScope,$state,$stateParams,$window,$http,$localStorage,jwtHelper) {

    $rootScope.$on('$stateChangeSuccess', function (evt, toState) {

        if($localStorage.token == null)
        {
            console.log("asd")
            $state.go("logins") ;
        }

    });



    //jika token Habis

    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams, options){

        if($localStorage.token==null)
        {
            $localStorage.token = null;
            //errorView("error paja tu");
            return false;
        }
            var bool = jwtHelper.isTokenExpired($localStorage.token);

            if(bool) //jika expaired
            {
                $http({
                    url: BASE_URL + '/refresh',
                    skipAuthorization: true,
                    method: 'POST',
                    data: {token:$localStorage.token}
                })
                    .then(function mySuccesresponse(respons)
                        {
                            $localStorage.token = respons.token;
                            event.preventDefault();
                            $state.go($localStorage.curren_user.tipe + '.dashboard',{},{location: 'replace'});


                        }
                        , function myError()
                        {
                            $localStorage.token = null;
                            errorView("error paja tu");
                        });

            }

        });




    //-------------------------------------------------

    $rootScope.cek_menu = function () {
        return 0;
    }

    $rootScope.curren_menu = function () {
        return $localStorage.curren_user.tipe;
    }
    $rootScope.loop_menu = function () {
        return $localStorage.curren_user;
    }
    $rootScope.curren_user = function () {
        return $localStorage.curren_user;
    }

    $rootScope.logout = function()
    {
        $localStorage.token = null;
        $state.go("logins",{}, { reload: true }) ;
    }

    //fitur cek render menu jika punya akses

    $rootScope.menu_check = function (name) {
        if(name.search('dashboard') < 1)
        {
            var cek = $localStorage.akses.filter(function(obj) {
                return (obj.as_client === name );
            });

            if(cek.length < 1)
            {
                return false;
            }
            return true;
        }
        return true;
    }

});

auth.run( function ($rootScope,$state,$stateParams,$window,$http,$localStorage) {

    //validasi akses sebelum buka
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
            $state.current = toState;

            if(toState.name.search('dashboard') < 0
                && toState.name.search('logins') < 0)
            {
                var cek = $localStorage.akses.filter(function(obj) {
                    return (obj.as_client === toState.name);
                });

                if(cek.length < 1)
                {
                    // errorView("You Dont Have Acces !");
                    // event.preventDefault();
                    // $state.go($localStorage.menu[0].url + '.dashboard',{},{location: 'replace'});
                }
            }

        }
    )

});

auth.controller("logins",function ($state,myHelp,role,$scope) {
    $scope.user = {};
    $scope.user.email = "guru@admin.com";
    $scope.user.password = "guru123";

    $scope.login = function () {
        myHelp.postParam("/login",$scope.user)
            .then(function mySuccesresponse(respon)
                {
                    role.setToken(respon.data.token);
                }
                , function myError(respon)
                {
                    errorView(respon.data.error);
                });
    }


})