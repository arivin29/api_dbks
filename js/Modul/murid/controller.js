var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Nilai
 /*----------------------------------------------------------------------------------------------*/
app.controller('murid.nilai', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/nilai')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/murid/nilai/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.nilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('murid.nilai.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.nilai = {};
    myHelp.getDetail('/murid/nilai/create')
        .then(function(respons){
            $scope.murid = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.nilai);

        myHelp.postParam('/murid/nilai', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.nilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

    $scope.selectParent = function(parent,keyword)
    {
        console.log(parent);
        $scope.nilai.parent = parent;
        $scope.keyword=keyword;
        colosePopup();
    }

});

app.controller('murid.nilai.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.nilai = {};
    myHelp.getParam('/murid/nilai/' + $stateParams.id_nilai +'/edit')
        .then(function(respons){
            $scope.nilai = respons.data;

            //jiko ado murid
            myHelp.getDetail('/murid/nilai/create')
                .then(function(respons){
                    $scope.murid = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.nilai);


        myHelp.putParam('/murid/nilai/'+ $stateParams.id_nilai, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.nilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Murid kelas
 /*----------------------------------------------------------------------------------------------*/
app.controller('murid.muridkelas', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/muridkelas')
        .then(function(respons){ 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/murid/muridkelas/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('murid.muridkelas.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/muridkelas/create')
        .then(function(respons){
            $scope.murid = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.muridkelas);

        myHelp.postParam('/murid/muridkelas', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('murid.muridkelas.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.muridkelas = {};
    myHelp.getParam('/murid/muridkelas/' + $stateParams.id_murid_kelas +'/edit')
        .then(function(respons){
            $scope.muridkelas = respons.data;

            //jiko ado murid
            myHelp.getDetail('/murid/muridkelas/create')
                .then(function(respons){
                    $scope.murid = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.muridkelas);


        myHelp.putParam('/murid/muridkelas/'+ $stateParams.id_murid_kelas, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

// Detail Muridkelas
app.controller('murid.muridkelas.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.muridkelas = {};
    myHelp.getDetail('/murid/muridkelas/' + $stateParams.id_murid_kelas)
        .then(function(respons){
            $scope.muridkelas = respons.data;
            $scope.param.title=$scope.muridkelas.keyword;
        });
});

/*----------------------------------------------------------------------------------------------
 Murid
 /*----------------------------------------------------------------------------------------------*/
app.controller('murid.murid', function truncateCtrl($scope,$state,$stateParams,myHelp){
        
    myHelp.getDetail('/murid/murid')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/murid/murid',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/murid/murid/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.murid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('murid.murid.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/murid/create')
        .then(function(respons){
            $scope.murid = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.murid);

        myHelp.postParam('/murid/murid', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.murid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('murid.murid.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.murid = {};
    myHelp.getParam('/murid/murid/' + $stateParams.id_murid +'/edit')
        .then(function(respons){
            $scope.murid = respons.data;

            //jiko ado murid
            myHelp.getDetail('/murid/murid/create')
                .then(function(respons){
                    $scope.murid = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.murid);


        myHelp.putParam('/murid/murid/'+ $stateParams.id_murid, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.murid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

// Detail Murid
app.controller('murid.murid.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.murid = {};
    myHelp.getDetail('/murid/murid/' + $stateParams.id_murid)
        .then(function(respons){
            $scope.murid = respons.data;
            $scope.param.title=$scope.murid.keyword;
        });
});


/*----------------------------------------------------------------------------------------------
 Jurusan
 /*----------------------------------------------------------------------------------------------*/
app.controller('murid.jurusan', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/jurusan')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/murid/jurusan',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/murid/jurusan/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.jurusan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('murid.jurusan.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/jurusan/create')
        .then(function(respons){
            $scope.murid = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.jurusan);

        myHelp.postParam('/murid/jurusan', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.jurusan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('murid.jurusan.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.jurusan = {};
    myHelp.getParam('/murid/jurusan/' + $stateParams.id_jurusan +'/edit')
        .then(function(respons){
            $scope.jurusan = respons.data;

            //jiko ado murid
            myHelp.getDetail('/murid/jurusan/create')
                .then(function(respons){
                    $scope.murid = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.jurusan);


        myHelp.putParam('/murid/jurusan/'+ $stateParams.id_jurusan, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.jurusan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Kelas
 /*----------------------------------------------------------------------------------------------*/
app.controller('murid.kelas', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/kelas')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/murid/kelas/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.kelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('murid.kelas.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/kelas/create')
        .then(function(respons){
            $scope.murid = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kelas);

        myHelp.postParam('/murid/kelas', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.kelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('murid.kelas.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.kelas = {};
    myHelp.getParam('/murid/kelas/' + $stateParams.id_kelas +'/edit')
        .then(function(respons){
            $scope.kelas = respons.data;

            //jiko ado murid
            myHelp.getDetail('/murid/kelas/create')
                .then(function(respons){
                    $scope.murid = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kelas);


        myHelp.putParam('/murid/kelas/'+ $stateParams.id_kelas, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.kelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});
