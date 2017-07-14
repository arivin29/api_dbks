var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Guru
 /*----------------------------------------------------------------------------------------------*/
app.controller('admin.guru', function truncateCtrl($scope,$state,$stateParams,myHelp){

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/admin/guru',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/admin/guru/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.guru",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
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
                    errorView("error paja tu");
                });


    };

});

app.controller('admin.guru.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.guru = {};
    myHelp.getParam('/admin/guru/' + $stateParams.id_guru +'/edit')
        .then(function(respons){
            $scope.guru = respons.data;

            //jiko ado murid
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
                    errorView("error paja tu");
                });


    };

});

// Detail Guru
app.controller('admin.guru.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.guru = {};
    myHelp.getDetail('/admin/guru/' + $stateParams.id_guru)
        .then(function(respons){
            $scope.guru = respons.data;
            $scope.param.title=$scope.guru.keyword;
        });
});

/*----------------------------------------------------------------------------------------------
 Gurump
 /*----------------------------------------------------------------------------------------------*/
app.controller('admin.gurump', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/gurump')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/admin/gurump/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.gurump",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('admin.gurump.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/gurump/create')
        .then(function(respons){
            $scope.admin = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.gurump);

        myHelp.postParam('/admin/gurump', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.gurump",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('admin.gurump.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.gurump = {};
    myHelp.getParam('/admin/gurump/' + $stateParams.id_guru_mp +'/edit')
        .then(function(respons){
            $scope.gurump = respons.data;

            //jiko ado guru
            myHelp.getDetail('/admin/gurump/create')
                .then(function(respons){
                    $scope.admin = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.gurump);


        myHelp.putParam('/admin/gurump/'+ $stateParams.id_guru_mp, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.gurump",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Murid
 /*----------------------------------------------------------------------------------------------*/
app.controller('admin.murid', function truncateCtrl($scope,$state,$stateParams,myHelp){

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/admin/murid',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/admin/murid/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.murid",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
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
                    errorView("error paja tu");
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
                    errorView("error paja tu");
                });


    };

});

// Detail Murid
app.controller('admin.murid.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.murid = {};
    myHelp.getDetail('/admin/murid/' + $stateParams.id_murid)
        .then(function(respons){
            $scope.murid = respons.data;
            $scope.param.title=$scope.murid.keyword;
        });
});

/*----------------------------------------------------------------------------------------------
 Murid kelas
 /*----------------------------------------------------------------------------------------------*/
app.controller('admin.muridkelas', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/muridkelas')
        .then(function(respons){ 
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/admin/muridkelas/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('admin.muridkelas.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/muridkelas/create')
        .then(function(respons){
            $scope.admin = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.muridkelas);

        myHelp.postParam('/admin/muridkelas', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.muridkelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('admin.muridkelas.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.muridkelas = {};
    myHelp.getParam('/admin/muridkelas/' + $stateParams.id_murid_kelas +'/edit')
        .then(function(respons){
            $scope.muridkelas = respons.data;

            //jiko ado murid
            myHelp.getDetail('/admin/muridkelas/create')
                .then(function(respons){
                    $scope.admin = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.muridkelas);


        myHelp.putParam('/admin/muridkelas/'+ $stateParams.id_murid_kelas, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.muridkelas",{}, { reload: true })

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
app.controller('admin.nilai', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/nilai')
        .then(function(respons){
            $scope.datas = respons.data;
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
                    errorView("error paja tu");
                });


    };

});

// Detail nilai
app.controller('admin.nilai.detailnilai', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.nilai = {};
    myHelp.getDetail('/admin/nilai/' + $stateParams.id_nilai)
        .then(function(respons){
            $scope.nilai = respons.data;
            $scope.param.title=$scope.nilai.keyword;
        });
});

/*----------------------------------------------------------------------------------------------
 Isi Kelas
 /*----------------------------------------------------------------------------------------------*/
app.controller('admin.isikelas', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/isikelas')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/admin/isikelas/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.isikelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('admin.isikelas.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/admin/isikelas/create')
        .then(function(respons){
            $scope.admin = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.isikelas);

        myHelp.postParam('/admin/isikelas', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.isikelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('admin.isikelas.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.isikelas = {};
    myHelp.getParam('/admin/isikelas/' + $stateParams.id_isi_kelas +'/edit')
        .then(function(respons){
            $scope.isikelas = respons.data;

            //jiko ado murid
            myHelp.getDetail('/admin/isikelas/create')
                .then(function(respons){
                    $scope.admin = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.isikelas);


        myHelp.putParam('/admin/isikelas/'+ $stateParams.id_isi_kelas, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("admin.isikelas",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

// Detail kelas
app.controller('admin.isikelas.detailkelas', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.isikelas = {};
    myHelp.getDetail('/admin/isikelas/' + $stateParams.id_kelas)
        .then(function(respons){
            $scope.isikelas = respons.data;
            $scope.param.title=$scope.isikelas.keyword;
        });
});

// Detail nilai
app.controller('admin.isikelas.detailnilai', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.isikelas = {};
    myHelp.getDetail('/admin/isikelas/' + $stateParams.id_kelas)
        .then(function(respons){
            $scope.isikelas = respons.data;
            $scope.param.title=$scope.isikelas.keyword;
        });
});

// Detail absensi
app.controller('admin.isikelas.detailabsensi', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.isikelas = {};
    myHelp.getDetail('/admin/isikelas/' + $stateParams.id_kelas)
        .then(function(respons){
            $scope.isikelas = respons.data;
            $scope.param.title=$scope.isikelas.keyword;
        });
});

/*
// Detail pengaturan nilai
app.controller('admin.isikelas.detailpnilai', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.isikelas = {};
    myHelp.getDetail('/admin/isikelas/' + $stateParams.id_kelas)
        .then(function(respons){
            $scope.isikelas = respons.data;
            $scope.param.title=$scope.isikelas.keyword;
        });
});
*/

// Detail jadwal
app.controller('admin.isikelas.detailjadwal', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.isikelas = {};
    myHelp.getDetail('/admin/isikelas/' + $stateParams.id_kelas)
        .then(function(respons){
            $scope.isikelas = respons.data;
            $scope.param.title=$scope.isikelas.keyword;
        });
});

// Detail jurusan
app.controller('admin.isikelas.detailjurusan', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param = {};
    $scope.isikelas = {};
    myHelp.getDetail('/admin/isikelas/' + $stateParams.id_jurusan)
        .then(function(respons){
            $scope.isikelas = respons.data;
            $scope.param.title=$scope.isikelas.keyword;
        });
});