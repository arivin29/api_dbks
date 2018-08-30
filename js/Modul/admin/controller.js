var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Guru
 /*----------------------------------------------------------------------------------------------*/
app.controller('admin.guru', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.filters = {};
    $scope.status_guru = ['ON','OFF'];
    $scope.months = [1,2,3,4,5,6,7,8,9,10,11,12];
    $scope.years = [];
    $scope.BASE_URL = BASE_URL;

    var date = new Date();

    for (var a=0; a < 5;a++)
    {
        $scope.years.push(date.getFullYear()-a);
    }

    $scope.filter = function(page)
    {
        $scope.filters.page = page;
        myHelp.getParam('/admin/guru',clearObj($scope.filters))
            .then(function(respons){
                $scope.datas = respons.data.data;
            });
    }
    $scope.filter(1);

    $scope.delete = function(id) {
        deleteParam($http,$state,'/admin/guru/' + id, {}, 'admin.guru',{});
    }



});

app.controller('admin.guru.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/guru/create')
        .then(function(respons){
            $scope.admin = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.guru);

        myHelp.postParam('/admin/guru', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.guru",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});

app.controller('admin.guru.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.guru = {};
    myHelp.getParam('/admin/guru/' + $stateParams.id_guru +'/edit')
        .then(function(respons){
            $scope.guru = respons.data;

            myHelp.getDetail('/admin/guru/create')
                .then(function(respons){
                    $scope.admin = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.guru);


        myHelp.putParam('/admin/guru/'+ $stateParams.id_guru, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.guru",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});

// Detail Guru
app.controller('admin.guru.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.guru = {};
    myHelp.getDetail('/admin/guru/' + $stateParams.id_guru)
        .then(function(respons){
            $scope.guru = respons.data.guru;
        });
});


/*----------------------------------------------------------------------------------------------
 mata pelajaran
 /*----------------------------------------------------------------------------------------------*/
app.controller('admin.guru.detail.gurump', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.guru = {};
    myHelp.getParam('/admin/gurump' , {id_guru:$stateParams.id_guru})
        .then(function(respons){
            $scope.gurumps = respons.data.gurump;
        });
});

app.controller('admin.guru.detail.gurump.add', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.gurump = {};
    $scope.gurump.id_guru = $stateParams.id_guru;

    myHelp.getDetail('/admin/gurump/create')
        .then(function(respons){
            $scope.mata_pelajaran = respons.data.mata_pelajaran;
            $scope.kelas = respons.data.kelas;
            $scope.paralel = respons.data.paralel;
            $scope.jurusan = respons.data.jurusan;
        });

    $scope.submitForm_gurump = function() {
        var Param = clearObj($scope.gurump);

        myHelp.postParam('/admin/gurump', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("^",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});
app.controller('admin.guru.detail.gurump.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.gurump = {};

    myHelp.getDetail('/admin/gurump/' + $stateParams.id_guru_mp)
        .then(function(respons){
            $scope.gurump = respons.data;
        });

    myHelp.getDetail('/admin/gurump/create')
        .then(function(respons){
            $scope.mata_pelajaran = respons.data.mata_pelajaran;
            $scope.kelas = respons.data.kelas;
            $scope.paralel = respons.data.paralel;
            $scope.jurusan = respons.data.jurusan;
        });

    $scope.submitForm_gurump = function() {
        var Param = clearObj($scope.gurump);

        myHelp.putParam('/admin/gurump/' + $stateParams.id_guru_mp, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("^",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Murid
/*----------------------------------------------------------------------------------------------*/
app.controller('admin.murid', function truncateCtrl($http,$scope,$state,$stateParams,myHelp){

    $scope.filters = {};
    $scope.status_murid = ['ON','OFF'];
    $scope.BASE_URL = BASE_URL;


    $scope.filter = function(page)
    {
        $scope.filters.page = page;
        myHelp.getParam('/admin/murid',clearObj($scope.filters))
            .then(function(respons){
                $scope.datas = respons.data.murid;
            });
    }
    $scope.filter(1);

    $scope.delete = function(id) {
        deleteParam($http,$state,'/admin/murid/' + id, {}, 'admin.murid',{});
    }

});

app.controller('admin.murid.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/murid/create')
        .then(function(respons){
            $scope.admin = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.murid);

        myHelp.postParam('/admin/murid', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.murid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});

app.controller('admin.murid.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.murid = {};
    myHelp.getParam('/admin/murid/' + $stateParams.id_murid +'/edit')
        .then(function(respons){
            $scope.murid = respons.data;

            //jiko ado murid
            myHelp.getDetail('/admin/murid/create')
                .then(function(respons){
                    $scope.admin = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.murid);


        myHelp.putParam('/admin/murid/'+ $stateParams.id_murid, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.murid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Murid kelas
 /*----------------------------------------------------------------------------------------------*/
app.controller('admin.murid_kelas', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.filters = {};
    $scope.status_murid = ['ON','OFF'];
    $scope.BASE_URL = BASE_URL;

    $scope.filter = function(page)
    {
        $scope.filters.page = page;
        myHelp.getParam('/admin/murid_kelas',clearObj($scope.filters))
            .then(function(respons){
                $scope.datas = respons.data.data;
                $scope.smt = respons.data.smt;
                $scope.kelas = respons.data.kelas;
                $scope.jurusan = respons.data.jurusan;
                $scope.paralel = respons.data.paralel;
                $scope.config_smt = respons.data.config_smt;
            });
    }
    $scope.filter(1);
});


/*----------------------------------------------------------------------------------------------
 mata pelajaran
 /*----------------------------------------------------------------------------------------------*/
app.controller('admin.murid_detail', function truncateCtrl($http,$scope,$state,$stateParams,myHelp){
    $scope.guru = {};
    myHelp.getDetail('/admin/murid/' + $stateParams.id_murid)
        .then(function(respons){
            $scope.murid = respons.data.murid;
        });

    myHelp.getDetail('/admin/murid_kelas/' + $stateParams.id_murid)
        .then(function(respons){
            $scope.kelas = respons.data.kelas;
        });
});

app.controller('admin.murid_detail.kelas', function truncateCtrl($http,$scope,$state,$stateParams,myHelp){
    $scope.muridkelas = {};
    $scope.delete_murid_kelas = function (id) {
        deleteParam($http,$state,'/admin/murid_kelas/' + id, {}, 'admin.murid_detail.kelas',{});
    }
});


app.controller('admin.murid_detail.kelas.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/murid_kelas/create')
        .then(function(respons){
            $scope.admin = respons.data;
            debugData(respons);
        });

    $scope.submitForm_kelas = function() {

        $scope.muridkelas.id_murid = $stateParams.id_murid;
        var Param = clearObj($scope.muridkelas);
        myHelp.postParam('/admin/murid_kelas', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("^",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});


app.controller('admin.murid_detail.kelas.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){



    myHelp.getDetail('/admin/murid_kelas/' + $stateParams.id_murid_kelas + '/edit')
        .then(function(respons){
            $scope.muridkelas = respons.data;

            myHelp.getDetail('/admin/murid_kelas/create')
                .then(function(respons){
                    $scope.admin = respons.data;
                });
        });

    $scope.submitForm_kelas = function() {

        var Param = clearObj($scope.muridkelas);
        myHelp.putParam('/admin/murid_kelas/'+$stateParams.id_murid_kelas, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("^",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});

app.controller('admin.murid_detail.kelas', function truncateCtrl($http,$scope,$state,$stateParams,myHelp){
    $scope.guru = {};
    myHelp.getDetail('/admin/murid_kelas/' + $stateParams.id_murid)
        .then(function(respons){
            $scope.kelas = respons.data.kelas;
        });

    $scope.delete_murid_kelas = function (id) {
        deleteParam($http,$state,'/admin/murid_kelas/' + id, {}, 'admin.murid_detail.kelas',{});
    }
});

app.controller('admin.murid_detail.mata_pelajaran', function truncateCtrl($http,$scope,$state,$stateParams,myHelp){
    $scope.guru = {};
    myHelp.getParam('/admin/murid_mp' , {id_murid:$stateParams.id_murid})
        .then(function(respons){
            $scope.mata_pelajarans = respons.data.murid_mp;
        });

});



/*----------------------------------------------------------------------------------------------
 Nilai
 /*----------------------------------------------------------------------------------------------*/
app.controller('admin.nilai', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/nilai')
        .then(function(respons){
            $scope.datas = respons.data.nilai;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/admin/nilai/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.nilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('admin.nilai.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.nilai = {};
    myHelp.getDetail('/admin/nilai/create')
        .then(function(respons){
            $scope.admin = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.nilai);

        myHelp.postParam('/admin/nilai', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.nilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});

app.controller('admin.nilai.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.nilai = {};
    myHelp.getParam('/admin/nilai/' + $stateParams.id_nilai +'/edit')
        .then(function(respons){
            $scope.nilai = respons.data;

            //jiko ado murid
            myHelp.getDetail('/admin/nilai/create')
                .then(function(respons){
                    $scope.admin = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.nilai);


        myHelp.putParam('/admin/nilai/'+ $stateParams.id_nilai, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.nilai",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });


    };

});

// Detail nilai
app.controller('admin.nilai.detailnilai', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.nilai = {};
    myHelp.getDetail('/admin/nilai/' + $stateParams.id_nilai)
        .then(function(respons){
            $scope.nilai = respons.data;
        });
});
