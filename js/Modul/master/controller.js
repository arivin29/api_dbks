var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Pendidikan
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.pendidikan', function truncateCtrl($scope,$state,$stateParams,myHelp){

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
 Mapel
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.mapel', function truncateCtrl($scope,$state,$stateParams,myHelp){

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
 Jenis nilai
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.jn', function truncateCtrl($scope,$state,$stateParams,myHelp){

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
 Buku
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.buku', function truncateCtrl($scope,$state,$stateParams,myHelp){

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
 Jurusan
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.jurusan', function truncateCtrl($scope,$state,$stateParams,myHelp){

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/master/jurusan',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

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

            //jiko ado murid
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

            //jiko ado murid
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

/*----------------------------------------------------------------------------------------------
 Provinsi
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.provinsi', function truncateCtrl($scope,$state,$stateParams,myHelp){

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/master/provinsi',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/provinsi/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.provinsi",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.provinsi.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/provinsi/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.provinsi);

        myHelp.postParam('/master/provinsi', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.provinsi",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.provinsi.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.provinsi = {};
    myHelp.getParam('/master/provinsi/' + $stateParams.id_provinsi +'/edit')
        .then(function(respons){
            $scope.provinsi = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/provinsi/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.provinsi);


        myHelp.putParam('/master/provinsi/'+ $stateParams.id_provinsi, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.provinsi",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Kabupaten/Kota
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.kabkot', function truncateCtrl($scope,$state,$stateParams,myHelp){

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/master/kabkot',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/kabkot/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.kabkot",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.kabkot.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/kabkot/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kabkot);

        myHelp.postParam('/master/kabkot', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.kabkot",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.kabkot.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.kabkot = {};
    myHelp.getParam('/master/kabkot/' + $stateParams.id_kabkot +'/edit')
        .then(function(respons){
            $scope.kabkot = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/kabkot/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kabkot);


        myHelp.putParam('/master/kabkot/'+ $stateParams.id_kabkot, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.kabkot",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Kecamatan
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.kecamatan', function truncateCtrl($scope,$state,$stateParams,myHelp){

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/master/kecamatan',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/kecamatan/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.kecamatan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.kecamatan.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/kecamatan/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kecamatan);

        myHelp.postParam('/master/kecamatan', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.kecamatan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.kecamatan.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.kecamatan = {};
    myHelp.getParam('/master/kecamatan/' + $stateParams.id_kecamatan +'/edit')
        .then(function(respons){
            $scope.kecamatan = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/kecamatan/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kecamatan);


        myHelp.putParam('/master/kecamatan/'+ $stateParams.id_kecamatan, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.kecamatan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

/*----------------------------------------------------------------------------------------------
 Kelurahan
 /*----------------------------------------------------------------------------------------------*/
app.controller('master.kelurahan', function truncateCtrl($scope,$state,$stateParams,myHelp){

    var param = {};
    $scope.filters = {};

    $scope.filter = function (page) {
        param = $scope.filters;
        param.page = page;
        myHelp.getParam('/master/kelurahan',clearObj(param))
            .then(function(respons){
                $scope.datas = respons.data;
                debugData(respons);
            });

    }
    $scope.filter(1);

    $scope.delete = function(id)
    {
        myHelp.deleteParam('/master/kelurahan/' + id, {})
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.kelurahan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("gagal hapus, data tidak ditemukan");
                });
    }

});

app.controller('master.kelurahan.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/master/kelurahan/create')
        .then(function(respons){
            $scope.master = respons.data;
            debugData(respons);
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kelurahan);

        myHelp.postParam('/master/kelurahan', Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.kelurahan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});

app.controller('master.kelurahan.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.kelurahan = {};
    myHelp.getParam('/master/kelurahan/' + $stateParams.id_kelurahan +'/edit')
        .then(function(respons){
            $scope.kelurahan = respons.data;

            //jiko ado master
            myHelp.getDetail('/master/kelurahan/create')
                .then(function(respons){
                    $scope.master = respons.data;
                    debugData(respons);
                });
        });

    $scope.submitForm = function() {
        var Param = clearObj($scope.kelurahan);


        myHelp.putParam('/master/kelurahan/'+ $stateParams.id_kelurahan, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("master.kelurahan",{}, { reload: true })

                }
                , function myError()
                {
                    errorView("error paja tu");
                });


    };

});