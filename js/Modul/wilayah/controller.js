var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Provinsi
 /*----------------------------------------------------------------------------------------------*/
app.controller('wilayah.provinsi', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/wilayah/provinsi')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/wilayah/provinsi',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/wilayah/provinsi/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("wilayah.provinsi",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('wilayah.provinsi.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/wilayah/provinsi/create')
        .then(function(respons){
            $scope.wilayah = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.provinsi);

        myHelp.postParam('/wilayah/provinsi', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("wilayah.provinsi",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('wilayah.provinsi.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.provinsi = {};
    myHelp.getParam('/wilayah/provinsi/' + $stateParams.id_provinsi +'/edit')
        .then(function(respons){
            $scope.provinsi = respons.data;

            //jiko ado wilayah
            myHelp.getDetail('/wilayah/provinsi/create')
                .then(function(respons){
                    $scope.wilayah = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.provinsi);


        myHelp.putParam('/wilayah/provinsi/'+ $stateParams.id_provinsi, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("wilayah.provinsi",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Kabupaten/Kota
 /*----------------------------------------------------------------------------------------------*/
app.controller('wilayah.kabkot', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/wilayah/kabkot')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/wilayah/kabkot',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/wilayah/kabkot/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("wilayah.kabkot",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('wilayah.kabkot.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/wilayah/kabkot/create')
        .then(function(respons){
            $scope.wilayah = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kabkot);

        myHelp.postParam('/wilayah/kabkot', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("wilayah.kabkot",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('wilayah.kabkot.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.kabkot = {};
    myHelp.getParam('/wilayah/kabkot/' + $stateParams.id_kabkot +'/edit')
        .then(function(respons){
            $scope.kabkot = respons.data;

            //jiko ado wilayah
            myHelp.getDetail('/wilayah/kabkot/create')
                .then(function(respons){
                    $scope.wilayah = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kabkot);


        myHelp.putParam('/wilayah/kabkot/'+ $stateParams.id_kabkot, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("wilayah.kabkot",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Kecamatan
 /*----------------------------------------------------------------------------------------------*/
app.controller('wilayah.kecamatan', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/wilayah/kecamatan')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/wilayah/kecamatan',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/wilayah/kecamatan/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("wilayah.kecamatan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('wilayah.kecamatan.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/wilayah/kecamatan/create')
        .then(function(respons){
            $scope.wilayah = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kecamatan);

        myHelp.postParam('/wilayah/kecamatan', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("wilayah.kecamatan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('wilayah.kecamatan.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.kecamatan = {};
    myHelp.getParam('/wilayah/kecamatan/' + $stateParams.id_kecamatan +'/edit')
        .then(function(respons){
            $scope.kecamatan = respons.data;

            //jiko ado wilayah
            myHelp.getDetail('/wilayah/kecamatan/create')
                .then(function(respons){
                    $scope.wilayah = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kecamatan);


        myHelp.putParam('/wilayah/kecamatan/'+ $stateParams.id_kecamatan, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("wilayah.kecamatan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Kelurahan
 /*----------------------------------------------------------------------------------------------*/
app.controller('wilayah.kelurahan', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/wilayah/kelurahan')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/wilayah/kelurahan',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/wilayah/kelurahan/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("wilayah.kelurahan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('wilayah.kelurahan.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/wilayah/kelurahan/create')
        .then(function(respons){
            $scope.wilayah = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kelurahan);

        myHelp.postParam('/wilayah/kelurahan', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("wilayah.kelurahan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('wilayah.kelurahan.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.kelurahan = {};
    myHelp.getParam('/wilayah/kelurahan/' + $stateParams.id_kelurahan +'/edit')
        .then(function(respons){
            $scope.kelurahan = respons.data;

            //jiko ado wilayah
            myHelp.getDetail('/wilayah/kelurahan/create')
                .then(function(respons){
                    $scope.wilayah = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kelurahan);


        myHelp.putParam('/wilayah/kelurahan/'+ $stateParams.id_kelurahan, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("wilayah.kelurahan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});