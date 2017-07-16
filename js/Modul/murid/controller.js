var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Isi Kelas
 /*----------------------------------------------------------------------------------------------*/
app.controller('murid.murids', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/murids')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/murid/murids/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.murids",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

// Detail murids
app.controller('murid.murids.detailmurids', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.murids = {};
    myHelp.getDetail('/murid/murids/' + $stateParams.id_murid)
        .then(function(respons){
            $scope.murids = respons.data;
            $scope.param.title=$scope.murids.keyword;
        });
});

/*

// Detail nilai
app.controller('murid.murids.detailnilai', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.murids = {};
    myHelp.getDetail('/murid/murids/' + $stateParams.id_murid)
        .then(function(respons){
            $scope.murids = respons.data;
            $scope.param.title=$scope.murids.keyword;
        });
});

// Detail absensi
app.controller('murid.murids.detailabsensi', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.murids = {};
    myHelp.getDetail('/murid/murids/' + $stateParams.id_murid)
        .then(function(respons){
            $scope.murids = respons.data;
            $scope.param.title=$scope.murids.keyword;
        });
});

// Detail pengaturan nilai
app.controller('murid.murids.detailpnilai', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.murids = {};
    myHelp.getDetail('/murid/murids/' + $stateParams.id_murid)
        .then(function(respons){
            $scope.murids = respons.data;
            $scope.param.title=$scope.murids.keyword;
        });
});

// Detail jadwal
app.controller('murid.murids.detailjadwal', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.murids = {};
    myHelp.getDetail('/murid/murids/' + $stateParams.id_murid)
        .then(function(respons){
            $scope.murids = respons.data;
            $scope.param.title=$scope.murids.keyword;
        });
});

// Detail jurusan
app.controller('murid.murids.detailjurusan', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.murids = {};
    myHelp.getDetail('/murid/murids/' + $stateParams.id_jurusan)
        .then(function(respons){
            $scope.murids = respons.data;
            $scope.param.title=$scope.murids.keyword;
        });
});

*/