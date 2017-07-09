var app = angular.module('inspinia');

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
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/master/mapel',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

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
            $scope.datas = respons.data;
            debugData(respons);
        });

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
 Gurump
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.gurump', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/gurump')
        .then(function(respons){
            $scope.datas = respons.data;
            debugData(respons);
        });

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
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/master/guru',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

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
            $scope.datas = respons.data;
            debugData(respons);
        });

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/master/buku',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

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
            $scope.datas = respons.data;
            debugData(respons);
        });

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
            $scope.datas = respons.data;
            debugData(respons);
        });

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
            $scope.datas = respons.data;
            debugData(respons);
        });

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

