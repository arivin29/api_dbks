var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Nilai
 /*----------------------------------------------------------------------------------------------*/
app.controller('murid.nilai', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/nilai')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/murid/nilai/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.nilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('murid.nilai.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.nilai = {};
    myHelp.getDetail('/murid/nilai/create')
        .then(function(respons){
            $scope.murid = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.nilai);

        myHelp.postParam('/murid/nilai', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.nilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

    $scope.selectParent = function(parent,keyword)
    {
        console.log(parent);
        $scope.nilai.parent = parent;
        $scope.keyword=keyword;
        colosePopup();
    }

});

app.controller('murid.nilai.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.nilai = {};
    myHelp.getParam('/murid/nilai/' + $stateParams.id_nilai +'/edit')
        .then(function(respons){
            $scope.nilai = respons.data;

            //jiko ado murid
            myHelp.getDetail('/murid/nilai/create')
                .then(function(respons){
                    $scope.murid = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.nilai);


        myHelp.putParam('/murid/nilai/'+ $stateParams.id_nilai, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.nilai",{}, { reload: true })

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
app.controller('murid.muridkelas', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/muridkelas')
        .then(function(respons){ 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/murid/muridkelas/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('murid.muridkelas.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/muridkelas/create')
        .then(function(respons){
            $scope.murid = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.muridkelas);

        myHelp.postParam('/murid/muridkelas', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('murid.muridkelas.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.muridkelas = {};
    myHelp.getParam('/murid/muridkelas/' + $stateParams.id_murid_kelas +'/edit')
        .then(function(respons){
            $scope.muridkelas = respons.data;

            //jiko ado murid
            myHelp.getDetail('/murid/muridkelas/create')
                .then(function(respons){
                    $scope.murid = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.muridkelas);


        myHelp.putParam('/murid/muridkelas/'+ $stateParams.id_murid_kelas, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("murid.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

// Detail kelas
app.controller('murid.muridkelas.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.muridkelas = {};
    myHelp.getDetail('/murid/muridkelas/' + $stateParams.id_kelas)
        .then(function(respons){
            $scope.muridkelas = respons.data;
            $scope.param.title=$scope.muridkelas.keyword;
        });
});

// Detail jurusan
app.controller('murid.muridkelas.detailjurusan', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.muridkelas = {};
    myHelp.getDetail('/murid/muridkelas/' + $stateParams.id_jurusan)
        .then(function(respons){
            $scope.muridkelas = respons.data;
            $scope.param.title=$scope.muridkelas.keyword;
        });
});

// Detail guru
app.controller('murid.muridkelas.detailguru', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.muridkelas = {};
    myHelp.getDetail('/murid/muridkelas/' + $stateParams.id_guru)
        .then(function(respons){
            $scope.muridkelas = respons.data;
            $scope.param.title=$scope.muridkelas.keyword;
        });
});