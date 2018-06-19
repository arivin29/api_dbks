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
    $scope.soal = [];
    $scope.filter = function () {
        myHelp.getDetail('/murid/ujian')
            .then(function(respons){
                $scope.ujian = respons.data.data;
            });
    }

    $scope.filter();
});
app.controller('murid.ujian.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/ujian/' + $stateParams.id)
        .then(function(respons){
            $scope.detail = respons.data.detail;
        });
});

app.controller('murid.ujian.mulai', function truncateCtrl($scope,$state,$stateParams,myHelp,$localStorage,$interval){

    if(!$localStorage.ujian)
    {
        $localStorage.ujian = {};
        $localStorage.ujian.urutan = 0;
    }
    else
    {
        $localStorage.ujian.urutan = $localStorage.ujian.urutan-1;
    }
    console.log($scope.soal);





    myHelp.getDetail('/murid/ujian/create?id_ujian=' +  $stateParams.id)
        .then(function(respons){
            $scope.jawaban = respons.data.jawaban;
            $scope.ujian = respons.data.ujian;
            $scope.soal = respons.data.soal;

            $localStorage.ujian.data = respons.data;

            if($scope.jawaban.tanggal_ujuan != null && $state.current.name === 'murid.ujian.mulai.pertanyaan')
            {
                $localStorage.ujian.jam = $scope.jawaban.tanggal_ujuan;
                $scope.getSoal($scope.soal[$localStorage.ujian.urutan].id_ujian_jawaban_soal);
                $state.go("murid.ujian.mulai.pertanyaan")
            }

            if ($localStorage.ujian.urutan == $localStorage.ujian.data.soal.length)
            {
                $scope.selesai = true;
                return false;
            }
        });


    $scope.mulai = function() {
        var Param = $scope.jawaban;
        Param.mulai = true;
        myHelp.postParam('/murid/ujian' , Param)
            .then(function mySuccesresponse()
                {
                    $localStorage.ujian.mulai = true;
                    $localStorage.ujian.urutan = 0;
                    $localStorage.ujian.jam = new Date();

                    //console.log('iko ' + $scope.soal[0].id_ujian_jawaban_soal)
                    $scope.getSoal($scope.soal[0].id_ujian_jawaban_soal);
                    $state.go("murid.ujian.mulai.pertanyaan")
                }
                , function myError()
                {
                    errorView("error paja tu");
                });
    };

    $scope.selesai = false;


    $scope.getSoal = function (x,langsung) {
        console.log(langsung)
        if ($localStorage.ujian.urutan == $localStorage.ujian.data.soal.length && langsung === undefined )
        {
            $scope.selesai = true;
            return false;
        }
        else if(langsung !== undefined)
        {
            $scope.selesai = false;
            $localStorage.ujian.urutan = langsung;
        }
        console.log($localStorage.ujian.urutan + " ke")
        myHelp.getDetail('/murid/ujian-jawaban/' + x)
            .then(function(respons){
                $scope.pertanyaan = respons.data;
                $localStorage.ujian.urutan = $localStorage.ujian.urutan + 1;
            });
    }


    $scope.message="";
    $scope.countdown=0;

    /*------------------------------ WAKTU --------------------------*/
    $scope.sekarang=$localStorage.ujian.jam;
    var decreamentCountdown=function()
    {
        $scope.countdown -=1;
        if($scope.countdown<1)
        {
            $scope.message="timed out";
        }
    };
    var startCountDown=function()
    {
        $interval(decreamentCountdown,1000*60,$scope.countdown)
    };
    $scope.countdown = $localStorage.ujian.data.ujian.waktu;
    startCountDown();
    /*------------------------------ WAKTU --------------------------*/

    $scope.simpan_selesai = function () {

        var Param = clearObj($scope.jawaban);
        myHelp.putParam('/murid/ujian/' + $scope.jawaban.id_ujian_jawaban, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $scope.filter();
                    $state.go("murid.ujian",{});
                }
                , function myError()
                {
                    errorView("error paja tu");
                });
    }

    $scope.kembali = function()
    {
        console.log($localStorage.ujian.urutan)
        if ($localStorage.ujian.urutan > 0 )
        {
            $localStorage.ujian.urutan = $localStorage.ujian.urutan -2;

            console.log($localStorage.ujian.urutan + " urutan kembali");
            $scope.getSoal( $localStorage.ujian.data.soal[$localStorage.ujian.urutan].id_ujian_jawaban_soal);
            $scope.selesai = false;
        }
    }
    $scope.selesai = false;
    $scope.nextTanyo = function () {
        console.log($scope.soal);
        var Param = $scope.pertanyaan;
        myHelp.postParam('/murid/ujian-jawaban' , Param)
            .then(function mySuccesresponse(respon)
                {
                    $scope.soal =[];

                    $scope.soal = respon.data.soal;
                    if ($localStorage.ujian.urutan == ($localStorage.ujian.data.soal.length))
                    {
                        $scope.selesai = true;
                        return false;
                    }
                    console.log($localStorage.ujian.urutan + " urutan next");
                    $scope.getSoal( $localStorage.ujian.data.soal[$localStorage.ujian.urutan].id_ujian_jawaban_soal);

                }
                , function myError()
                {
                    errorView("error paja tu");
                });

    }



});

app.controller('murid.ujian.mulai.pertanyaan', function truncateCtrl($scope,$state,$stateParams,myHelp,$localStorage,$timeout,$interval ){




});