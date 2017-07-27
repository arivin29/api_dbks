var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Murid
 /*----------------------------------------------------------------------------------------------*/
app.controller('murid.murid', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/murid/murid')
        .then(function(respons){
            $scope.Limit = 10;
            $scope.datas = respons.data.murid;
            debugData(respons);
        });

});

// Detail murid
app.controller('murid.murid.detailmurid', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.murid = {};
    myHelp.getDetail('/murid/murid/' + $stateParams.id_murid)
        .then(function(respons){
            $scope.murid = respons.data;

        });
});
