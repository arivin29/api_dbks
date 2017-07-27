var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Informations
 /*----------------------------------------------------------------------------------------------*/
app.controller('guru.kelas', function truncateCtrl($scope,$state,$stateParams,myHelp){
    myHelp.getDetail('/guru/kelas')
        .then(function(respons){
            $scope.datas = respons.data.kelas;
            debugData(respons);
        });

});

app.controller('guru.kelas.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.kelas = {};
    myHelp.getDetail('/guru/kelas/' + $stateParams.id_guru_mp)
        .then(function(respons){
            $scope.kelas = respons.data.kelas;
        });
});

app.controller('guru.kelas.detail.murid', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.murid = {};
    myHelp.getDetail('/guru/murid/' + $stateParams.id_guru_mp)
        .then(function(respons){
            $scope.murid = respons.data.murid;
        });
});

app.controller('guru.kelas.detail.nilai', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.murid = {};
    myHelp.getParam('/guru/nilai', {id_guru_mp: $stateParams.id_guru_mp})
        .then(function(respons){
            $scope.nilais = respons.data.nilais;
        });
});

app.controller('guru.kelas.detail.nilai.add', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param={};
    myHelp.getParam('/guru/nilai/create',{id_guru_mp:$stateParams.id_guru_mp})
        .then(function(respons){
            $scope.jenis_nilai = respons.data.jenis_nilai;
            $scope.murid_nilai = respons.data.murid_nilai;
        });

    $scope.cek_batas_remedial = function () {
        if($scope.param.batas_remedial > 99)
        {
            errorView("Nilai Remedial minimal < 100");
            return false;
        }
    }

    $scope.submitForm = function() {
        $scope.cek_batas_remedial();

        var Param = clearObj({nilai:$scope.murid_nilai,param:$scope.param});
        myHelp.putParam('/guru/nilai/' + $stateParams.id_guru_mp, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("^",{}, { reload: true });
                }
                , function myError()
                {
                    errorView("error paja tu");
                });

    };

});

app.controller('guru.kelas.detail.absensi', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.murid = {};
    myHelp.getParam('/guru/absensi', {id_guru_mp: $stateParams.id_guru_mp})
        .then(function(respons){
            $scope.absensis = respons.data.absensis;
            $scope.total = respons.data.total;
        });
});

app.controller('guru.kelas.detail.absensi.add', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param={};
    myHelp.getParam('/guru/absensi/create',{id_guru_mp:$stateParams.id_guru_mp})
        .then(function(respons){
            $scope.murid_absensi = respons.data.murid_absensi;
        });

    $scope.cek_batas_remedial = function () {
        if($scope.param.batas_remedial > 99)
        {
            errorView("absensi Remedial minimal < 100");
            return false;
        }
    }

    $scope.submitForm = function() {
        $scope.cek_batas_remedial();

        var Param = clearObj({absensi:$scope.murid_absensi,param:$scope.param});
        myHelp.putParam('/guru/absensi/' + $stateParams.id_guru_mp, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("^",{}, { reload: true });
                }
                , function myError()
                {
                    errorView("error paja tu");
                });

    };

});
