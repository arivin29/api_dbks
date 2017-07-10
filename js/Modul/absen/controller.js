var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Absen
 /*----------------------------------------------------------------------------------------------*/
app.controller('absen.absen', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/absen/absen')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/absen/absen/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.absen",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('absen.absen.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.absen = {};
    myHelp.getDetail('/absen/absen/create')
        .then(function(respons){
            $scope.absen = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absen);

        myHelp.postParam('/absen/absen', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.absen",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });

    };

    $scope.selectParent = function(parent,keyword)
    {
        console.log(parent);
        $scope.absen.parent = parent;
        $scope.keyword=keyword;
        colosePopup();
    }

});

app.controller('absen.absen.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.absen ={};
    myHelp.getParam('/absen/absen/' + $stateParams.id_m_absen +'/edit')
        .then(function(respons){
            $scope.absen = respons.data;

            //jiko ado absen
            myHelp.getDetail('/absen/absen/create')
                .then(function(respons){
                    $scope.absen = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absen);

        myHelp.putParam('/absen/absen/'+ $stateParams.id_m_absen, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.absen",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });

    };

    $scope.selectParent = function(parent,keyword)
    {
        console.log(parent);
        $scope.absen.parent = parent;
        $scope.keyword=keyword;
        colosePopup();
    }

});

/*----------------------------------------------------------------------------------------------
 Absentmt
 /*----------------------------------------------------------------------------------------------*/
app.controller('absen.absentmt', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/absen/absentmt')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/absen/absentmt',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/absen/absentmt/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.absentmt",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('absen.absentmt.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/absen/absentmt/create')
        .then(function(respons){
            $scope.absen = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absentmt);

        myHelp.postParam('/absen/absentmt', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.absentmt",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('absen.absentmt.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.absentmt = {};
    myHelp.getParam('/absen/absentmt/' + $stateParams.id_tidak_masuk_tanggal +'/edit')
        .then(function(respons){
            $scope.absentmt = respons.data;

            //jiko ado absen
            myHelp.getDetail('/absen/absentmt/create')
                .then(function(respons){
                    $scope.absen = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absentmt);


        myHelp.putParam('/absen/absentmt/'+ $stateParams.id_tidak_masuk_tanggal, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.absentmt",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Absentm
 /*----------------------------------------------------------------------------------------------*/
app.controller('absen.absentm', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/absen/absentm')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/absen/absentm/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.absentm",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('absen.absentm.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/absen/absentm/create')
        .then(function(respons){
            $scope.absen = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absentm);

        myHelp.postParam('/absen/absentm', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.absentm",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('absen.absentm.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.absentm = {};
    myHelp.getParam('/absen/absentm/' + $stateParams.id_tidak_masuk +'/edit')
        .then(function(respons){
            $scope.absentm = respons.data;

            //jiko ado absen
            myHelp.getDetail('/absen/absentm/create')
                .then(function(respons){
                    $scope.absen = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absentm);


        myHelp.putParam('/absen/absentm/'+ $stateParams.id_tidak_masuk, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.absentm",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Rekap absen
 /*----------------------------------------------------------------------------------------------*/
app.controller('absen.absenrekap', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/absen/absenrekap')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/absen/absenrekap/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.absenrekap",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('absen.absenrekap.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/absen/absenrekap/create')
        .then(function(respons){
            $scope.absen = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absenrekap);

        myHelp.postParam('/absen/absenrekap', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.absenrekap",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('absen.absenrekap.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.absenrekap = {};
    myHelp.getParam('/absen/absenrekap/' + $stateParams.id_rekap_absen +'/edit')
        .then(function(respons){
            $scope.absenrekap = respons.data;

            //jiko ado absen
            myHelp.getDetail('/absen/absenrekap/create')
                .then(function(respons){
                    $scope.absen = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absenrekap);


        myHelp.putParam('/absen/absenrekap/'+ $stateParams.id_rekap_absen, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.absenrekap",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Tabsen
 /*----------------------------------------------------------------------------------------------*/
app.controller('absen.tabsen', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/absen/tabsen')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/absen/tabsen/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.tabsen",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('absen.tabsen.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/absen/tabsen/create')
        .then(function(respons){
            $scope.absen = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.tabsen);

        myHelp.postParam('/absen/tabsen', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.tabsen",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('absen.tabsen.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.tabsen = {};
    myHelp.getParam('/absen/tabsen/' + $stateParams.id_absen +'/edit')
        .then(function(respons){
            $scope.tabsen = respons.data;

            //jiko ado absen
            myHelp.getDetail('/absen/tabsen/create')
                .then(function(respons){
                    $scope.absen = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.tabsen);


        myHelp.putParam('/absen/tabsen/'+ $stateParams.id_absen, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("absen.tabsen",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});
