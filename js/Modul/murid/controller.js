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

app.controller('murid.ujian.mulai', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/ujian/create?id_ujian=' +  $stateParams.id)
        .then(function(respons){
            $scope.jawaban = respons.data.jawaban;
            $scope.soal_jawaban = respons.data.soal_jawaban;
            $scope.soal = respons.data.soal;
        });
});