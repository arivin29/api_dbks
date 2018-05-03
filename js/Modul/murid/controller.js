var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Murid
 /*----------------------------------------------------------------------------------------------*/
app.controller('murid.murid', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/murid')
        .then(function(respons){
            $scope.murid = respons.data.data;
        });

});

// Detail murid
app.controller('murid.murid.kelas', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/kelas')
        .then(function(respons){
            $scope.kelas = respons.data.kelas;

        });
});
app.controller('murid.murid.kelas', function truncateCtrl($scope,$state,$stateParams,myHelp,$localStorage){

    myHelp.getDetail('/acl/users/' + $localStorage.curren_user.id)
        .then(function(respons){
            $scope.user = respons.data;
            $scope.user.password = '';

            myHelp.getDetail('/acl/users/create')
                .then(function(respons){
                    $scope.level_user = respons.data.level_user;
                    $scope.site = respons.data.site;
                    debugData(respons);
                });
        });

    $

    $scope.submitForm = function() {
        var Param = clearObj($scope.user);

        myHelp.putParam('/acl/users/' + $stateParams.id_user, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };
});



app.controller('murid.ujian', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/ujian')
        .then(function(respons){
            $scope.ujian = respons.data.data;
        });
});
app.controller('murid.ujian.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/ujian/' + $stateParams.id)
        .then(function(respons){
            $scope.detail = respons.data.detail;
        });
});

app.controller('murid.ujian.mulai', function truncateCtrl($scope,$state,$stateParams,myHelp,$localStorage){
    if(!$localStorage.ujian)
    {
        $localStorage.ujian = {};
    }
    $scope.sekarang=new Date();

    myHelp.getDetail('/murid/ujian/create?id_ujian=' +  $stateParams.id)
        .then(function(respons){
            $scope.jawaban = respons.data.jawaban;
            $scope.ujian = respons.data.ujian;
            $scope.soal = respons.data.soal;

            if($scope.jawaban.tanggal_ujuan != null && $state.current.name === 'murid.ujian.mulai')
            {
                $localStorage.ujian.jam = $scope.jawaban.tanggal_ujuan;

                $scope.getSoal($scope.soal[0].id_ujian_jawaban_soal);
                $state.go("murid.ujian.mulai.pertanyaan")
            }
        });

    $scope.mulai = function() {
        var Param = $scope.jawaban;
        Param.mulai = true;
        myHelp.postParam('/murid/ujian' , Param)
            .then(function mySuccesresponse()

                {
                    $localStorage.ujian.mulai = true;
                    $localStorage.ujian.urutan = 1;
                    $localStorage.ujian.jam = new Date();

                    $scope.getSoal($scope.soal[0].id_ujian_jawaban_soal);
                    $state.go("murid.ujian.mulai.pertanyaan")
                }
                , function myError()
                {
                    errorView("error paja tu");
                });
    };
    $scope.getSoal = function (x) {
        myHelp.getDetail('/murid/ujian-jawaban/' + x)
            .then(function(respons){
                $scope.pertanyaan = respons.data;
            });
    }

});

app.controller('murid.ujian.mulai.pertanyaan', function truncateCtrl($scope,$state,$stateParams,myHelp,$localStorage){
    var x = $localStorage.ujian.urutan;
    $scope.urutan = $localStorage.ujian.urutan;
    $scope.getSoal(x+1);

    $scope.nextTanyo = function () {
        var Param = $scope.pertanyaan;
        myHelp.postParam('/murid/ujian-jawaban' , Param)
            .then(function mySuccesresponse()
                {
                    $scope.getSoal($scope.soal[$localStorage.ujian.urutan].id_ujian_jawaban_soal);
                    $localStorage.ujian.urutan = $localStorage.ujian.urutan + 1;
                }
                , function myError()
                {
                    errorView("error paja tu");
                });

    }

});