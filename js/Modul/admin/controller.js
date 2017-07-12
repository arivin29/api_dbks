var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Guru
 /*----------------------------------------------------------------------------------------------*/
app.controller('admin.guru', function truncateCtrl($scope,$state,$stateParams,myHelp){

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/admin/guru',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/admin/guru/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.guru",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('admin.guru.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/guru/create')
        .then(function(respons){
            $scope.admin = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.guru);

        myHelp.postParam('/admin/guru', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.guru",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('admin.guru.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.guru = {};
    myHelp.getParam('/admin/guru/' + $stateParams.id_guru +'/edit')
        .then(function(respons){
            $scope.guru = respons.data;

            //jiko ado murid
            myHelp.getDetail('/admin/guru/create')
                .then(function(respons){
                    $scope.admin = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.guru);


        myHelp.putParam('/admin/guru/'+ $stateParams.id_guru, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.guru",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

// Detail Guru
app.controller('admin.guru.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.guru = {};
    myHelp.getDetail('/admin/guru/' + $stateParams.id_guru)
        .then(function(respons){
            $scope.guru = respons.data;
            $scope.param.title=$scope.guru.keyword;
        });
});

/*----------------------------------------------------------------------------------------------
 Murid
 /*----------------------------------------------------------------------------------------------*/
app.controller('admin.murid', function truncateCtrl($scope,$state,$stateParams,myHelp){

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/admin/murid',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/admin/murid/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.murid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('admin.murid.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/murid/create')
        .then(function(respons){
            $scope.admin = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.murid);

        myHelp.postParam('/admin/murid', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.murid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('admin.murid.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.murid = {};
    myHelp.getParam('/admin/murid/' + $stateParams.id_murid +'/edit')
        .then(function(respons){
            $scope.murid = respons.data;

            //jiko ado murid
            myHelp.getDetail('/admin/murid/create')
                .then(function(respons){
                    $scope.admin = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.murid);


        myHelp.putParam('/admin/murid/'+ $stateParams.id_murid, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.murid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

// Detail Murid
app.controller('admin.murid.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.murid = {};
    myHelp.getDetail('/admin/murid/' + $stateParams.id_murid)
        .then(function(respons){
            $scope.murid = respons.data;
            $scope.param.title=$scope.murid.keyword;
        });
});

/*----------------------------------------------------------------------------------------------
 Murid kelas
 /*----------------------------------------------------------------------------------------------*/
app.controller('admin.muridkelas', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/muridkelas')
        .then(function(respons){ 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/admin/muridkelas/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('admin.muridkelas.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/muridkelas/create')
        .then(function(respons){
            $scope.admin = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.muridkelas);

        myHelp.postParam('/admin/muridkelas', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('admin.muridkelas.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.muridkelas = {};
    myHelp.getParam('/admin/muridkelas/' + $stateParams.id_murid_kelas +'/edit')
        .then(function(respons){
            $scope.muridkelas = respons.data;

            //jiko ado murid
            myHelp.getDetail('/admin/muridkelas/create')
                .then(function(respons){
                    $scope.admin = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.muridkelas);


        myHelp.putParam('/admin/muridkelas/'+ $stateParams.id_murid_kelas, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

// Detail kelas
app.controller('admin.muridkelas.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.muridkelas = {};
    myHelp.getDetail('/admin/muridkelas/' + $stateParams.id_kelas)
        .then(function(respons){
            $scope.muridkelas = respons.data;
            $scope.param.title=$scope.muridkelas.keyword;
        });
});

// Detail jurusan
app.controller('admin.muridkelas.detailjurusan', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.muridkelas = {};
    myHelp.getDetail('/admin/muridkelas/' + $stateParams.id_jurusan)
        .then(function(respons){
            $scope.muridkelas = respons.data;
            $scope.param.title=$scope.muridkelas.keyword;
        });
});

// Detail guru
app.controller('admin.muridkelas.detailguru', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.muridkelas = {};
    myHelp.getDetail('/admin/muridkelas/' + $stateParams.id_guru)
        .then(function(respons){
            $scope.muridkelas = respons.data;
            $scope.param.title=$scope.muridkelas.keyword;
        });
});