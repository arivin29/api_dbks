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
 Isi Kelas
 /*----------------------------------------------------------------------------------------------*/
app.controller('guru.isikelas', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/guru/isikelas')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/guru/isikelas/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.isikelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('guru.isikelas.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/guru/isikelas/create')
        .then(function(respons){
            $scope.guru = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.isikelas);

        myHelp.postParam('/guru/isikelas', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.isikelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('guru.isikelas.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.isikelas = {};
    myHelp.getParam('/guru/isikelas/' + $stateParams.id_isi_kelas +'/edit')
        .then(function(respons){
            $scope.isikelas = respons.data;

            //jiko ado murid
            myHelp.getDetail('/guru/isikelas/create')
                .then(function(respons){
                    $scope.guru = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.isikelas);


        myHelp.putParam('/guru/isikelas/'+ $stateParams.id_isi_kelas, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("guru.isikelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

// Detail kelas
app.controller('guru.isikelas.detailkelas', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.isikelas = {};
    myHelp.getDetail('/guru/isikelas/' + $stateParams.id_kelas)
        .then(function(respons){
            $scope.isikelas = respons.data;
            $scope.param.title=$scope.isikelas.keyword;
        });
});

// Detail nilai
app.controller('guru.isikelas.detailnilai', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.isikelas = {};
    myHelp.getDetail('/guru/isikelas/' + $stateParams.id_kelas)
        .then(function(respons){
            $scope.isikelas = respons.data;
            $scope.param.title=$scope.isikelas.keyword;
        });
});

// Detail absensi
app.controller('guru.isikelas.detailabsensi', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.isikelas = {};
    myHelp.getDetail('/guru/isikelas/' + $stateParams.id_kelas)
        .then(function(respons){
            $scope.isikelas = respons.data;
            $scope.param.title=$scope.isikelas.keyword;
        });
});

/*
// Detail pengaturan nilai
app.controller('guru.isikelas.detailpnilai', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.isikelas = {};
    myHelp.getDetail('/guru/isikelas/' + $stateParams.id_kelas)
        .then(function(respons){
            $scope.isikelas = respons.data;
            $scope.param.title=$scope.isikelas.keyword;
        });
});
*/

// Detail jadwal
app.controller('guru.isikelas.detailjadwal', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.isikelas = {};
    myHelp.getDetail('/guru/isikelas/' + $stateParams.id_kelas)
        .then(function(respons){
            $scope.isikelas = respons.data;
            $scope.param.title=$scope.isikelas.keyword;
        });
});

// Detail jurusan
app.controller('guru.isikelas.detailjurusan', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.isikelas = {};
    myHelp.getDetail('/guru/isikelas/' + $stateParams.id_jurusan)
        .then(function(respons){
            $scope.isikelas = respons.data;
            $scope.param.title=$scope.isikelas.keyword;
        });
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

