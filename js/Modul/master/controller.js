var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 ~~~~~~~~mpart~~~~~~~~~~~~~~~~
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.mpart', function truncateCtrl($scope,$state,$stateParams,myHelp){
    var param = {};
    $scope.filters = {};

    myHelp.getDetail('/share/variabel/partfilter')
        .then(function(respons){
            $scope.master = respons.data;
        });

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/master/mpart',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

});

app.controller('master.mpart.add', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.mpart = {};
    $scope.param={};
    $scope.param.pencarian='';

    myHelp.getDetail('/master/mpart/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    myHelp.getDetail('/master/variabel/prcl')
        .then(function (responsee) {
            $scope.variabel = responsee.data;
        });

    $scope.popupSearchParent = function () {
        var param = {};
        if($scope.param.pencarian.length > 2)
        {
            param.keyword= $scope.param.pencarian;
        }

        myHelp.getParam('/master/mpart',param)
            .then(function(respons){
                $scope.parents = respons.data;
            });
    }

    $scope.selectParent = function(parent,keyword)
    {
        console.log(parent);
        $scope.mpart.parent = parent;
        $scope.keyword=keyword;
        colosePopup();
    }

    $scope.submitForm = function() {
        var Param = clearObj($scope.mpart);
        if($scope.mpart.parent == null)
        {
            warningView('Please Select Parent !');
            return false;
        }

        myHelp.postParam('/master/mpart', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.mpart",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.mpart.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.mpart ={};
    $scope.param = {};
    $scope.param.pencarian = '';
    myHelp.getDetail('/master/mpart/'+ $stateParams.id_mpart +'/edit')
        .then(function(respons){
            $scope.mpart = respons.data;
            $scope.keyword = respons.data.parent;


            //ambil parent nama
            if(respons.data.parent==0)
            {
                $scope.keyword = "This is parent";
            }
            else
            {
                myHelp.getDetail('/master/mpart/'+ respons.data.parent)
                    .then(function(respons){
                        $scope.keyword = respons.data.keyword;

                    });
            }
            myHelp.getDetail('/master/variabel/prcl')
                .then(function (responsee) {
                    $scope.variabel = responsee.data;
                });


            myHelp.getDetail('/master/mpart/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.popupSearchParent = function () {
        var param = {};
        if($scope.param.pencarian.length > 2)
        {
            param.keyword= $scope.param.pencarian;
        }

        myHelp.getParam('/master/mpart',param)
            .then(function(respons){
                $scope.parents = respons.data;
            });
    }

    $scope.selectParent = function(parent,keyword)
    {
        $scope.mpart.parent = parent;
        $scope.keyword=keyword;
        colosePopup();
    }

    $scope.submitForm = function() {
        var Param = clearObj($scope.mpart);

        myHelp.putParam('/master/mpart/' + $stateParams.id_mpart, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.mpart",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});



// Detail MPART
app.controller('master.mpart.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.mpart = {};
    myHelp.getDetail('/master/mpart/' + $stateParams.id_mpart)
        .then(function(respons){
            $scope.mpart = respons.data;
            $scope.param.title=$scope.mpart.keyword;
        });
});



//*---------------- ROUTINE----------------------*//
app.controller('master.mpart.detail.routine', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.maintenance = {};
    $scope.maintenance.id_mpart = $stateParams.id_mpart;

    $scope.param.title ='Routine In Aircraft';
    var param = {};
    param.id_mpart = $stateParams.id_mpart;
    param.type_maintenance = "routine";

    myHelp.getParam('/mpc/maintenance', param )
        .then(function(respons){
            $scope.routine = respons.data;
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/mpc/maintenance/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.mpart.detail.routine",{}, { reload: "master.mpart.detail.routine" })
                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }
});

app.controller('master.mpart.detail.routine.add', function truncateCtrl($scope,$state,$stateParams,myHelp,$timeout,$filter){
    $scope.param.title ='Add In Aircraft';
    $scope.maintenance.description_maintenance = "";
    $scope.master = {};

    $scope.setAta = function () {
        if($scope.mpart.code_ata === undefined)
        {
            $timeout($scope.setAta,300);
        }
        else
        {
            $scope.maintenance.atachapter = $scope.mpart.code_ata + '-' + $scope.mpart.mfigure_index + '-'+ $scope.mpart.mitem_index;
        }
    }

    $timeout($scope.setAta,3000);


    myHelp.getDetail('/mpc/maintenance/create' )
        .then(function(respons){
            $scope.master = respons.data;
        });

    $scope.ngChange = function () {
        var  id_maintenance_code = $scope.maintenance.id_maintenance_code;
        var data = $filter('filter')($scope.master.code, { id_maintenance_code: id_maintenance_code })[0];
        $scope.maintenance.description_maintenance = data.description_maintenance;
    }

    $scope.submitForm = function() {
        var Param = clearObj($scope.maintenance);
        Param.type_maintenance = 'routine';
        myHelp.postParam('/mpc/maintenance', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go('^',{}, { reload: "master.mpart.detail.routine" })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });
    };


});


app.controller('master.mpart.detail.routine.edit', function truncateCtrl($scope,$state,$stateParams,myHelp,$timeout,$filter){
    $scope.param.title ='Add In Aircraft';
    $scope.maintenance.description_maintenance = "";
    $scope.master = {};

    myHelp.getDetail('/mpc/maintenance/' + $stateParams.id_maintenance + '/edit' )
        .then(function(respons){
            $scope.maintenance = respons.data.data;
            $scope.master.code = respons.data.code;
            $scope.master.time_unit = respons.data.time_unit;

            $scope.ngChange();
        });

    $scope.ngChange = function () {
        var  id_maintenance_code = $scope.maintenance.id_maintenance_code;
        var data = $filter('filter')($scope.master.code, { id_maintenance_code: id_maintenance_code })[0];
        $scope.maintenance.description_maintenance = data.description_maintenance;
    }

    $scope.submitForm = function() {
        var Param = clearObj($scope.maintenance);
        Param.type_maintenance = 'routine';
        myHelp.putParam('/mpc/maintenance/' + $stateParams.id_maintenance, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go('^',{}, { reload: "master.mpart.detail.routine" })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });
    };


});




/*----------------------------------------------------------------------------------------------
 ~~~~~~~~aircraft~~~~~~~~~~~~~~~~
 /*----------------------------------------------------------------------------------------------*/

app.controller('master.actype', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/actype')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/actype/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.actype",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.actype.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/actype/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.actype);

        myHelp.postParam('/master/actype', Param)
            .then(function mySuccesresponse()
            {
                berhasilView();
                $state.go("master.actype",{}, { reload: true })

            }
            , function myError()
            {
                errorView("error paja tu");
            });
    };

});

app.controller('master.actype.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.actype = {};
    myHelp.getParam('/master/actype/' + $stateParams.id_actype +'/edit')
        .then(function(respons){
            $scope.actype = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/actype/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.actype);

        myHelp.putParam('/master/actype/' + $stateParams.id_actype, Param)
            .then(function mySuccesresponse()
            {
                berhasilView();
                $state.go("master.actype",{}, { reload: true })

            }
            , function myError()
            {
                errorView("error paja tu");
            });


    };

});

/*----------------------------------------------------------------------------------------------
 ~~~~~~~~aircraft~~~~~~~~~~~~~~~~
/*----------------------------------------------------------------------------------------------*/
app.controller('master.aircraft', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/aircraft')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/aircraft/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.aircraft",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.aircraft.add', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.aircraft = {};
    // $scope.aircraft.purchasedate='';
    myHelp.getDetail('/master/aircraft/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.aircraft);
        console.log($scope.aircraft.purchasedate);

        myHelp.postParam('/master/aircraft', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.aircraft",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });

    };

});

app.controller('master.aircraft.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.aircraft = {};
    myHelp.getParam('/master/aircraft/' + $stateParams.id_aircraft +'/edit')
        .then(function(respons){
            $scope.aircraft = respons.data;
            $scope.aircraft.tendurance = respons.data.tendurance*1;
            $scope.aircraft.id_actype = respons.data.id_actype*1;

            //jiko ado master
            myHelp.getDetail('/master/aircraft/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.aircraft);

        myHelp.putParam('/master/aircraft/'+ $stateParams.id_aircraft, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.aircraft",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 ATA
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.ata', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/ata')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/ata/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.ata",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.ata.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/ata/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.ata);

        myHelp.postParam('/master/ata', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.ata",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.ata.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.ata = {};
    myHelp.getParam('/master/ata/' + $stateParams.id_ata +'/edit')
        .then(function(respons){
            $scope.ata = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/ata/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.ata);

        myHelp.putParam('/master/ata/'+ $stateParams.id_ata, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.ata",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});


/*----------------------------------------------------------------------------------------------
 MAINTEANCE CODE
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.maintenance', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/maintenance')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/maintenance/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.maintenance",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.maintenance.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/maintenance/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.maintenance);

        myHelp.postParam('/master/maintenance', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.maintenance",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.maintenance.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.maintenance = {};
    myHelp.getParam('/master/maintenance/' + $stateParams.id_maintenance_code +'/edit')
        .then(function(respons){
            $scope.maintenance = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/maintenance/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.maintenance);

        myHelp.putParam('/master/maintenance/'+ $stateParams.id_maintenance_code, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.maintenance",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 ~~~~~~~~group~~~~~~~~~~~~~~~~
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.group', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/group')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/group/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.group",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.group.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/group/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.group);

        myHelp.postParam('/master/group', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.group",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.group.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.group = {};
    myHelp.getParam('/master/group/' + $stateParams.id_group +'/edit')
        .then(function(respons){
            $scope.group = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/group/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.group);

        myHelp.putParam('/master/group/' + $stateParams.id_group, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.group",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 ~~~~~~~~condition_monitoring~~~~~~~~~~~~~~~~
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.condition_monitoring', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/condition_monitoring')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/condition_monitoring/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.condition_monitoring",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }



});

app.controller('master.condition_monitoring.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/condition_monitoring/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.condition_monitoring);

        myHelp.postParam('/master/condition_monitoring', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.condition_monitoring",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.condition_monitoring.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.condition_monitoring = {};
    myHelp.getParam('/master/condition_monitoring/' + $stateParams.id_condition_monitoring +'/edit')
        .then(function(respons){
            $scope.condition_monitoring = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/condition_monitoring/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.condition_monitoring);

        myHelp.putParam('/master/condition_monitoring/' + $stateParams.condition_monitoring, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.condition_monitoring",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 ~~~~~~~~life_time_limit~~~~~~~~~~~~~~~~
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.life_time_limit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/life_time_limit')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/life_time_limit/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.life_time_limit",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.life_time_limit.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/life_time_limit/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.life_time_limit);

        myHelp.postParam('/master/life_time_limit', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.life_time_limit",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.life_time_limit.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.life_time_limit = {};
    myHelp.getParam('/master/life_time_limit/' + $stateParams.id_life_time_limit +'/edit')
        .then(function(respons){
            $scope.life_time_limit = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/life_time_limit/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.life_time_limit);

        myHelp.putParam('/master/life_time_limit/' + $stateParams.id_life_time_limit, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.life_time_limit",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 ~~~~~~~~part_category~~~~~~~~~~~~~~~~
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.part_category', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/part_category')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/part_category/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.part_category",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.part_category.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/part_category/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.part_category);

        myHelp.postParam('/master/part_category', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.part_category",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.part_category.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.part_category = {};
    myHelp.getParam('/master/part_category/' + $stateParams.id_part_category +'/edit')
        .then(function(respons){
            $scope.part_category = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/part_category/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.part_category);

        myHelp.putParam('/master/part_category/' + $stateParams.id_part_category, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.part_category",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 ~~~~~~~~part_condition~~~~~~~~~~~~~~~~
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.part_condition', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/part_condition')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/part_condition/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.part_condition",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.part_condition.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/part_condition/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.part_condition);

        myHelp.postParam('/master/part_condition', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.part_condition",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.part_condition.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.part_condition = {};
    myHelp.getParam('/master/part_condition/' + $stateParams.id_part_condition +'/edit')
        .then(function(respons){
            $scope.part_condition = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/part_condition/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.part_condition);

        myHelp.putParam('/master/part_condition/' + $stateParams.part_condition, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.part_condition",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});
/*----------------------------------------------------------------------------------------------
 ~~~~~~~~partid~~~~~~~~~~~~~~~~
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.partid', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.issingle = ['y','n'];

    myHelp.getDetail('/master/partid')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/partid/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.partid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.partid.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/partid/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.partid);

        myHelp.postParam('/master/partid', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.partid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.partid.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.partid = {};
    myHelp.getParam('/master/partid/' + $stateParams.id_partid +'/edit')
        .then(function(respons){
            $scope.partid = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/partid/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.partid);

        myHelp.putParam('/master/partid/' + $stateParams.partid, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.partid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 ~~~~~~~~position~~~~~~~~~~~~~~~~
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.position', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/position')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/position/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.position",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.position.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/position/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.position);

        myHelp.postParam('/master/position', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.position",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.position.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.position = {};
    myHelp.getParam('/master/position/' + $stateParams.id_position +'/edit')
        .then(function(respons){
            $scope.position = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/position/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.position);

        myHelp.putParam('/master/position/' + $stateParams.position, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.position",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 ~~~~~~~~site~~~~~~~~~~~~~~~~
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.site', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/site')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/site/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.site",{}, { reload: true })
                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }



});

app.controller('master.site.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/site/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.site);

        myHelp.postParam('/master/site', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.site",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.site.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.site = {};
    myHelp.getParam('/master/site/' + $stateParams.id_site +'/edit')
        .then(function(respons){
            $scope.site = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/site/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.site);

        myHelp.putParam('/master/site', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.site",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 ~~~~~~~~type_ofwork~~~~~~~~~~~~~~~~
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.type_ofwork', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/type_ofwork')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

});

app.controller('master.type_ofwork.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/type_ofwork/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.controller);

        myHelp.postParam('/master/type_ofwork', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.type_ofwork",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.type_ofwork.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.type_ofwork = {};
    myHelp.putParam('/master/type_ofwork/' + $stateParams.id_type_ofwork +'/edit')
        .then(function(respons){
            $scope.type_ofwork = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/type_ofwork/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.controller);

        myHelp.postParam('/master/type_ofwork', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.type_ofwork",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Pendidikan
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.pendidikan', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/pendidikan')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/master/pendidikan',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/pendidikan/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.pendidikan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.pendidikan.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/pendidikan/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.pendidikan);

        myHelp.postParam('/master/pendidikan', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.pendidikan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.pendidikan.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.pendidikan = {};
    myHelp.getParam('/master/pendidikan/' + $stateParams.id_pendidikan +'/edit')
        .then(function(respons){
            $scope.pendidikan = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/pendidikan/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.pendidikan);


        myHelp.putParam('/master/pendidikan/'+ $stateParams.id_pendidikan, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.pendidikan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Pekerjaan
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.pekerjaan', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/pekerjaan')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/master/pekerjaan',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/pekerjaan/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.pekerjaan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.pekerjaan.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/pekerjaan/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.pekerjaan);

        myHelp.postParam('/master/pekerjaan', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.pekerjaan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.pekerjaan.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.pekerjaan = {};
    myHelp.getParam('/master/pekerjaan/' + $stateParams.id_pekerjaan +'/edit')
        .then(function(respons){
            $scope.pekerjaan = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/pekerjaan/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.pekerjaan);


        myHelp.putParam('/master/pekerjaan/'+ $stateParams.id_pekerjaan, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.pekerjaan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Jenis nilai
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.jn', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/jn')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/master/jn',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/jn/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.jn",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.jn.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/jn/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.jn);

        myHelp.postParam('/master/jn', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.jn",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.jn.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.jn = {};
    myHelp.getParam('/master/jn/' + $stateParams.id_jenis_nilai +'/edit')
        .then(function(respons){
            $scope.jn = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/jn/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.jn);


        myHelp.putParam('/master/jn/'+ $stateParams.id_jenis_nilai, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.jn",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Mapel
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.mapel', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/mapel')
        .then(function(respons){
            $scope.entryLimit = 10; 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/mapel/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.mapel",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.mapel.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/mapel/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.mapel);

        myHelp.postParam('/master/mapel', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.mapel",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.mapel.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.mapel = {};
    myHelp.getParam('/master/mapel/' + $stateParams.id_mata_pelajaran +'/edit')
        .then(function(respons){
            $scope.mapel = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/mapel/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.mapel);


        myHelp.putParam('/master/mapel/'+ $stateParams.id_mata_pelajaran, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.mapel",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Absen
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.absen', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/absen')
        .then(function(respons){
            $scope.entryLimit = 10; 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/absen/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.absen",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.absen.add', function truncateCtrl($scope,$state,$stateParams,myHelp){
    
    $scope.absen = {};
    myHelp.getDetail('/master/absen/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absen);

        myHelp.postParam('/master/absen', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.absen",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });

    };

    $scope.selectParent = function(parent,keyword)
    {
        console.log(parent);
        $scope.absen.parent = parent;
        $scope.keyword=keyword;
        colosePopup();
    }

});

app.controller('master.absen.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.absen ={};
    myHelp.getParam('/master/absen/' + $stateParams.id_m_absen +'/edit')
        .then(function(respons){
            $scope.absen = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/absen/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absen);

        myHelp.putParam('/master/absen/'+ $stateParams.id_m_absen, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.absen",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });

    };

    $scope.selectParent = function(parent,keyword)
    {
        console.log(parent);
        $scope.absen.parent = parent;
        $scope.keyword=keyword;
        colosePopup();
    }

});

/*----------------------------------------------------------------------------------------------
 Pengaturan nilai
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.pnilai', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/pnilai')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/master/pnilai',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/pnilai/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.pnilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.pnilai.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/pnilai/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.pnilai);

        myHelp.postParam('/master/pnilai', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.pnilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.pnilai.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.pnilai = {};
    myHelp.getParam('/master/pnilai/' + $stateParams.id_pengaturan_nilai +'/edit')
        .then(function(respons){
            $scope.pnilai = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/pnilai/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.pnilai);


        myHelp.putParam('/master/pnilai/'+ $stateParams.id_pengaturan_nilai, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.pnilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Nilai
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.nilai', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/nilai')
        .then(function(respons){
            $scope.entryLimit = 10; 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/nilai/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.nilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.nilai.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.nilai = {};
    myHelp.getDetail('/master/nilai/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.nilai);

        myHelp.postParam('/master/nilai', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.nilai",{}, { reload: true })

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

app.controller('master.nilai.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.nilai = {};
    myHelp.getParam('/master/nilai/' + $stateParams.id_nilai +'/edit')
        .then(function(respons){
            $scope.nilai = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/nilai/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.nilai);


        myHelp.putParam('/master/nilai/'+ $stateParams.id_nilai, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.nilai",{}, { reload: true })

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
app.controller('master.muridkelas', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/muridkelas')
        .then(function(respons){
            $scope.entryLimit = 10; 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/muridkelas/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.muridkelas.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/muridkelas/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.muridkelas);

        myHelp.postParam('/master/muridkelas', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.muridkelas.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.muridkelas = {};
    myHelp.getParam('/master/muridkelas/' + $stateParams.id_murid_kelas +'/edit')
        .then(function(respons){
            $scope.muridkelas = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/muridkelas/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.muridkelas);


        myHelp.putParam('/master/muridkelas/'+ $stateParams.id_murid_kelas, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

// Detail Muridkelas
app.controller('master.muridkelas.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.muridkelas = {};
    myHelp.getDetail('/master/muridkelas/' + $stateParams.id_murid_kelas)
        .then(function(respons){
            $scope.muridkelas = respons.data;
            $scope.param.title=$scope.muridkelas.keyword;
        });
});

/*----------------------------------------------------------------------------------------------
 Murid
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.murid', function truncateCtrl($scope,$state,$stateParams,myHelp){
        
    myHelp.getDetail('/master/murid')
        .then(function(respons){
            $scope.entryLimit = 10; 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/murid/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.murid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.murid.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/murid/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.murid);

        myHelp.postParam('/master/murid', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.murid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.murid.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.murid = {};
    myHelp.getParam('/master/murid/' + $stateParams.id_murid +'/edit')
        .then(function(respons){
            $scope.murid = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/murid/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.murid);


        myHelp.putParam('/master/murid/'+ $stateParams.id_murid, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.murid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

// Detail Murid
app.controller('master.murid.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.murid = {};
    myHelp.getDetail('/master/murid/' + $stateParams.id_murid)
        .then(function(respons){
            $scope.murid = respons.data;
            $scope.param.title=$scope.murid.keyword;
        });
});

/*----------------------------------------------------------------------------------------------
 Gurump
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.gurump', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/gurump')
        .then(function(respons){
             $scope.entryLimit = 10; 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/gurump/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.gurump",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.gurump.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/gurump/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.gurump);

        myHelp.postParam('/master/gurump', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.gurump",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.gurump.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.gurump = {};
    myHelp.getParam('/master/gurump/' + $stateParams.id_guru_mp +'/edit')
        .then(function(respons){
            $scope.gurump = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/gurump/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.gurump);


        myHelp.putParam('/master/gurump/'+ $stateParams.id_guru_mp, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.gurump",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Guru
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.guru', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/guru')
        .then(function(respons){
            $scope.entryLimit = 10; 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/guru/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.guru",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.guru.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/guru/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.guru);

        myHelp.postParam('/master/guru', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.guru",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.guru.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.guru = {};
    myHelp.getParam('/master/guru/' + $stateParams.id_guru +'/edit')
        .then(function(respons){
            $scope.guru = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/guru/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.guru);


        myHelp.putParam('/master/guru/'+ $stateParams.id_guru, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.guru",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

// Detail Guru
app.controller('master.guru.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.guru = {};
    myHelp.getDetail('/master/guru/' + $stateParams.id_guru)
        .then(function(respons){
            $scope.guru = respons.data;
            $scope.param.title=$scope.guru.keyword;
        });
});

/*----------------------------------------------------------------------------------------------
 Buku
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.buku', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/buku')
        .then(function(respons){
            $scope.entryLimit = 10;
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/buku/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.buku",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.buku.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/buku/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.buku);

        myHelp.postParam('/master/buku', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.buku",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.buku.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.buku = {};
    myHelp.getParam('/master/buku/' + $stateParams.id_buku +'/edit')
        .then(function(respons){
            $scope.buku = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/buku/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.buku);


        myHelp.putParam('/master/buku/'+ $stateParams.id_buku, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.buku",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Absentmt
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.absentmt', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/absentmt')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/master/absentmt',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/absentmt/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.absentmt",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.absentmt.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/absentmt/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absentmt);

        myHelp.postParam('/master/absentmt', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.absentmt",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.absentmt.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.absentmt = {};
    myHelp.getParam('/master/absentmt/' + $stateParams.id_tidak_masuk_tanggal +'/edit')
        .then(function(respons){
            $scope.absentmt = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/absentmt/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absentmt);


        myHelp.putParam('/master/absentmt/'+ $stateParams.id_tidak_masuk_tanggal, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.absentmt",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Absentm
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.absentm', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/absentm')
        .then(function(respons){
            $scope.entryLimit = 10; 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/absentm/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.absentm",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.absentm.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/absentm/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absentm);

        myHelp.postParam('/master/absentm', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.absentm",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.absentm.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.absentm = {};
    myHelp.getParam('/master/absentm/' + $stateParams.id_tidak_masuk +'/edit')
        .then(function(respons){
            $scope.absentm = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/absentm/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absentm);


        myHelp.putParam('/master/absentm/'+ $stateParams.id_tidak_masuk, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.absentm",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Rekap absen
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.absenrekap', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/absenrekap')
        .then(function(respons){
            $scope.entryLimit = 10; 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/absenrekap/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.absenrekap",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.absenrekap.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/absenrekap/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absenrekap);

        myHelp.postParam('/master/absenrekap', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.absenrekap",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.absenrekap.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.absenrekap = {};
    myHelp.getParam('/master/absenrekap/' + $stateParams.id_rekap_absen +'/edit')
        .then(function(respons){
            $scope.absenrekap = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/absenrekap/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.absenrekap);


        myHelp.putParam('/master/absenrekap/'+ $stateParams.id_rekap_absen, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.absenrekap",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Tabsen
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.tabsen', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/tabsen')
        .then(function(respons){
            $scope.entryLimit = 10; 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/tabsen/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.tabsen",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.tabsen.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/tabsen/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.tabsen);

        myHelp.postParam('/master/tabsen', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.tabsen",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.tabsen.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.tabsen = {};
    myHelp.getParam('/master/tabsen/' + $stateParams.id_absen +'/edit')
        .then(function(respons){
            $scope.tabsen = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/tabsen/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.tabsen);


        myHelp.putParam('/master/tabsen/'+ $stateParams.id_absen, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.tabsen",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Jurusan
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.jurusan', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/jurusan')
        .then(function(respons){
            $scope.entryLimit = 10; 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/jurusan/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.jurusan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.jurusan.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/jurusan/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.jurusan);

        myHelp.postParam('/master/jurusan', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.jurusan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.jurusan.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.jurusan = {};
    myHelp.getParam('/master/jurusan/' + $stateParams.id_jurusan +'/edit')
        .then(function(respons){
            $scope.jurusan = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/jurusan/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.jurusan);


        myHelp.putParam('/master/jurusan/'+ $stateParams.id_jurusan, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.jurusan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Kelas
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.kelas', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/kelas')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/kelas/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.kelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.kelas.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/kelas/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kelas);

        myHelp.postParam('/master/kelas', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.kelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.kelas.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.kelas = {};
    myHelp.getParam('/master/kelas/' + $stateParams.id_kelas +'/edit')
        .then(function(respons){
            $scope.kelas = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/kelas/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kelas);


        myHelp.putParam('/master/kelas/'+ $stateParams.id_kelas, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.kelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});