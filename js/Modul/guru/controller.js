var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Pengaturan nilai
 /*----------------------------------------------------------------------------------------------*/
app.controller('guru.pnilai', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/guru/pnilai')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/guru/pnilai',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/guru/pnilai/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.pnilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('guru.pnilai.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/guru/pnilai/create')
        .then(function(respons){
            $scope.guru = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.pnilai);

        myHelp.postParam('/guru/pnilai', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.pnilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('guru.pnilai.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.pnilai = {};
    myHelp.getParam('/guru/pnilai/' + $stateParams.id_pengaturan_nilai +'/edit')
        .then(function(respons){
            $scope.pnilai = respons.data;

            //jiko ado guru
            myHelp.getDetail('/guru/pnilai/create')
                .then(function(respons){
                    $scope.guru = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.pnilai);


        myHelp.putParam('/guru/pnilai/'+ $stateParams.id_pengaturan_nilai, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.pnilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Gurump
 /*----------------------------------------------------------------------------------------------*/
app.controller('guru.gurump', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/guru/gurump')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/guru/gurump/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.gurump",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('guru.gurump.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/guru/gurump/create')
        .then(function(respons){
            $scope.guru = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.gurump);

        myHelp.postParam('/guru/gurump', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.gurump",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('guru.gurump.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.gurump = {};
    myHelp.getParam('/guru/gurump/' + $stateParams.id_guru_mp +'/edit')
        .then(function(respons){
            $scope.gurump = respons.data;

            //jiko ado guru
            myHelp.getDetail('/guru/gurump/create')
                .then(function(respons){
                    $scope.guru = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.gurump);


        myHelp.putParam('/guru/gurump/'+ $stateParams.id_guru_mp, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.gurump",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Guru
 /*----------------------------------------------------------------------------------------------*/
app.controller('guru.guru', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/guru/guru')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/guru/guru',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/guru/guru/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.guru",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('guru.guru.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/guru/guru/create')
        .then(function(respons){
            $scope.guru = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.guru);

        myHelp.postParam('/guru/guru', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.guru",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('guru.guru.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.guru = {};
    myHelp.getParam('/guru/guru/' + $stateParams.id_guru +'/edit')
        .then(function(respons){
            $scope.guru = respons.data;

            //jiko ado guru
            myHelp.getDetail('/guru/guru/create')
                .then(function(respons){
                    $scope.guru = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.guru);


        myHelp.putParam('/guru/guru/'+ $stateParams.id_guru, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.guru",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

// Detail Guru
app.controller('guru.guru.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.guru = {};
    myHelp.getDetail('/guru/guru/' + $stateParams.id_guru)
        .then(function(respons){
            $scope.guru = respons.data;
            $scope.param.title=$scope.guru.keyword;
        });
});

//*---------------- Guru Murid ----------------------*//
app.controller('guru.guru.detail.murid', function truncateCtrl($scope,$state,$stateParams,myHelp){
    myHelp.getDetail('/murid/muridkelas')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });
});

