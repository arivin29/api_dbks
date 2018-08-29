var app = angular.module('inspinia');




app.controller('acl.users', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.param = {};
    $scope.filters = {};
    $scope.months = [1,2,3,4,5,6,7,8,9,10,11,12];
    $scope.years = [];
    $scope.BASE_URL = BASE_URL;

    var date = new Date();

    for (var a=0; a < 5;a++)
    {
        $scope.years.push(date.getFullYear()-a);
    }

    $scope.filter = function(page)
    {
        $scope.filters.page = page;
        myHelp.getParam('/acl/users',clearObj($scope.filters))
            .then(function(respons){
                $scope.status = respons.data.status;
                $scope.level = respons.data.level;
                $scope.datas = respons.data.data;
            });
    }
    $scope.filter(1);

});
app.controller('acl.users.add', function truncateCtrl($scope,$state,$stateParams,myHelp){


    myHelp.getDetail('/acl/users/create')
        .then(function(respons){
            $scope.level_user = respons.data.level_user;
            $scope.site = respons.data.site;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.user);
        myHelp.postParam('/acl/users', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("acl.users",{}, { reload: true })
                }
                , function myError(response)
                {
                    errorView(response.data.status);
                });

    };

});

app.controller('acl.users.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/acl/users/' + $stateParams.id_user)
    .then(function(respons){
        $scope.user = respons.data;
        $scope.user.password = '';

        myHelp.getDetail('/acl/users/create')
            .then(function(respons){
                $scope.level_user = respons.data.level_user;
                $scope.site = respons.data.site;
                debugData(respons);
            });
    });

    $scope.submitForm = function() {
        var Param = clearObj($scope.user);

        myHelp.putParam('/acl/users/' + $stateParams.id_user, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("^",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});

app.controller('acl.users.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/acl/users/' + $stateParams.id_user)
    .then(function(respons){
        $scope.user =respons.data;
    });

});
app.controller('acl.users.detail.akses', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.user = {roles:['APP0000000671','APP0000000668']};
    myHelp.getDetail('/acl/akses/' + $stateParams.id_user)
    .then(function(respons){
        $scope.user.roles =respons.data.roles;
        $scope.akses =respons.data.akses;
        // $scope.id_role =[1,1];
    });

    $scope.submitForm = function() {
        var Param = clearObj($scope.user.roles);

        myHelp.putParam('/acl/akses/' + $stateParams.id_user, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("acl.users.detail",{id_user:$stateParams.id_user}, { reload: true })
                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});

app.controller('acl.groups.add', function truncateCtrl($scope,$state,$stateParams,myHelp){


    myHelp.getDetail('/acl/group/add')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.group);

        myHelp.postParam('/acl/group/simpan', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("acl.groups",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});

app.controller('acl.groups', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/acl/group')
        .then(function(respons){
            $scope.groups = respons.data;
            debugData(respons);
        });

});


app.controller('acl.groups.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){


    myHelp.getDetail('/acl/group/edit/' + $stateParams.id_groups)
        .then(function(respons){
            $scope.group = respons.data.group;
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.group);

        myHelp.postParam('/acl/group/simpan-edit', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("acl.groups",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});


app.controller('acl.moduls', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/acl/modul')
        .then(function(respons){
            $scope.moduls = respons.data;
            debugData(respons);
        });

});
app.controller('acl.controllers', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/acl/controllers')
        .then(function(respons){
            $scope.controllers = respons.data;
            debugData(respons);
        });

});
app.controller('acl.controllers.add', function truncateCtrl($scope,$state,$stateParams,myHelp){


    myHelp.getDetail('/acl/controllers/add')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.controller);

        myHelp.postParam('/acl/controllers/simpan', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("acl.controllers",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});

app.controller('acl.controllers.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){


    myHelp.getDetail('/acl/controllers/edit/' + $stateParams.id_controller)
        .then(function(respons){
            $scope.master =respons.data;
            $scope.controller = respons.data.controller;
            $scope.controller.id_modul = respons.data.controller.id_modul*1;
            $scope.controller.no_segment = respons.data.controller.no_segment*1;
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.controller);

        myHelp.postParam('/acl/controllers/simpan-edit', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("acl.controllers",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});
