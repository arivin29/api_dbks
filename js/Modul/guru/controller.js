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

        $scope.murid_nilai.map(function(x) {
            x.is_remedial = $scope.param.batas_remedial ;
            return x
        });

    }
    $scope.autoNilai = function (id_nilai) {

        // var index;
        // $scope.murid_nilai.some(function(entry, i) {
        //     index = i;
        //     return entry.id_nilai == id_nilai;
        // });
        //
        // $scope.murid_nilai.indexOf(index).nilai_akhir=$scope.murid_nilai.indexOf(index).nilai;

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
        });
});

app.controller('guru.kelas.detail.absensi.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.murid = {};
    myHelp.getParam('/guru/absensi_detail', {id_absen_kelas: $stateParams.id_absen_kelas})
        .then(function(respons){
            $scope.absen_murid = respons.data.absen_murid;
        });
});

app.controller('guru.kelas.detail.absensi.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getParam('/guru/absensi/create',{id_guru_mp:$stateParams.id_guru_mp})
        .then(function(respons){
            $scope.absen = respons.data.absen;
            $scope.absen_murid = respons.data.absen_murid;
        });


    $scope.submitForm = function() {

        var Param = clearObj({absen:$scope.absen_murid,absen_murid:$scope.absen});
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
