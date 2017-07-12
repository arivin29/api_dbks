var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Pengaturan nilai
 /*----------------------------------------------------------------------------------------------*/
app.controller('guru.pnilai', function truncateCtrl($scope,$state,$stateParams,myHelp){

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
 Murid kelas
 /*----------------------------------------------------------------------------------------------*/
app.controller('guru.muridkelas', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/guru/muridkelas')
        .then(function(respons){ 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/guru/muridkelas/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('guru.muridkelas.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/guru/muridkelas/create')
        .then(function(respons){
            $scope.guru = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.muridkelas);

        myHelp.postParam('/guru/muridkelas', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('guru.muridkelas.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.muridkelas = {};
    myHelp.getParam('/guru/muridkelas/' + $stateParams.id_murid_kelas +'/edit')
        .then(function(respons){
            $scope.muridkelas = respons.data;

            //jiko ado murid
            myHelp.getDetail('/guru/muridkelas/create')
                .then(function(respons){
                    $scope.guru = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.muridkelas);


        myHelp.putParam('/guru/muridkelas/'+ $stateParams.id_murid_kelas, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

// Detail kelas
app.controller('guru.muridkelas.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.muridkelas = {};
    myHelp.getDetail('/guru/muridkelas/' + $stateParams.id_kelas)
        .then(function(respons){
            $scope.muridkelas = respons.data;
            $scope.param.title=$scope.muridkelas.keyword;
        });
});

// Detail jurusan
app.controller('guru.muridkelas.detailjurusan', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.muridkelas = {};
    myHelp.getDetail('/guru/muridkelas/' + $stateParams.id_jurusan)
        .then(function(respons){
            $scope.muridkelas = respons.data;
            $scope.param.title=$scope.muridkelas.keyword;
        });
});

// Detail guru
app.controller('guru.muridkelas.detailguru', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.muridkelas = {};
    myHelp.getDetail('/guru/muridkelas/' + $stateParams.id_guru)
        .then(function(respons){
            $scope.muridkelas = respons.data;
            $scope.param.title=$scope.muridkelas.keyword;
        });
});

// Profile guru
app.controller('guru.muridkelas.profileguru', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.muridkelas = {};
    myHelp.getDetail('/guru/muridkelas/' + $stateParams.id_guru)
        .then(function(respons){
            $scope.muridkelas = respons.data;
            $scope.param.title=$scope.muridkelas.keyword;
        });
});
