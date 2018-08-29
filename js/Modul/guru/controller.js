var app = angular.module('inspinia');

/*----------------------------------------------------------------------------------------------
 Informations
 /*----------------------------------------------------------------------------------------------*/
app.controller('guru.soal', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.filters = {};

    $scope.filter =function () {
        myHelp.getParam('/guru/soal',clearObj($scope.filters))
            .then(function(respons){
                $scope.datas = respons.data.soal;
                $scope.master_smt = respons.data.master_smt;
                $scope.master_mp = respons.data.master_mp;
            });
    }

    $scope.froalaOptions = {
        toolbarInline: false,
        height: 200,
        imageUploadURL: 'http://mansasi.edutech.web.id/site/public/image'
    }


    $scope.delete = function (id) {
        myHelp.delete('/guru/soal/' + id)
            .then(function mySuccesresponse(respon)
                {
                    berhasilView();
                    $scope.filter();
                }
                , function myError(respon)
                {
                    errorView(respon.pesan);
                });
    }


    $scope.filter();

});


app.controller('guru.soal.add', function truncateCtrl($scope,$state,$stateParams,myHelp,$http){

    $scope.abc = ['a','b','c','d','e'];

    $scope.submitForm = function() {

        var file = $scope.myFile;
        var fd = new FormData();
        fd.append('name_file', file);
        fd.append('smt', clearInt($scope.param.smt));
        fd.append('id_mata_pelajaran', clearInt($scope.param.id_mata_pelajaran));
        fd.append('soal', $scope.param.soal);
        fd.append('kompetensi', $scope.param.kompetensi);
        fd.append('indikator', $scope.param.indikator);
        fd.append('materi', $scope.param.materi);
        fd.append('a', $scope.param.a);
        fd.append('b', $scope.param.b);
        fd.append('c', $scope.param.c);
        fd.append('d', $scope.param.d);
        fd.append('e', $scope.param.e);
        fd.append('jawaban', clearString($scope.param.jawaban));

        console.log(fd)
        $http.post(BASE_URL + '/guru/soal', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .success(function(){

                $scope.filters.id_mata_pelajaran = $scope.param.id_mata_pelajaran;
                $scope.filters.smt = $scope.param.smt;
                $scope.filter();
                berhasilView();
                $state.go("^", {});
            })
            .error(function(){
                errorView()
            });

    };

    $scope.filter();

});

app.controller('guru.soal.edit', function truncateCtrl($scope,$state,$stateParams,myHelp,$http){

    $scope.abc = ['a','b','c','d','e'];

    myHelp.getDetail('/guru/soal/' + $stateParams.id_soal)
        .then(function(respons){
            $scope.param = respons.data.soal;
            $scope.master_smt = respons.data.master_smt;
            $scope.master_mp = respons.data.master_mp;
        });


    $scope.submitForm = function() {

        myHelp.putParam('/guru/soal/' + $stateParams.id_soal, $scope.param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("^",{}, { reload: true });
                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });



    };

    $scope.filter();

});


/*----------------------------------------------------------------------------------------------
 Informations
 /*----------------------------------------------------------------------------------------------*/
app.controller('guru.kelas', function truncateCtrl($scope,$state,$stateParams,myHelp){
    myHelp.getDetail('/guru/kelas')
        .then(function(respons){
            $scope.datas = respons.data.kelas;
            debugData(respons);
        });

});

app.controller('guru.kelas.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.kelas = {};
    myHelp.getDetail('/guru/kelas/' + $stateParams.id_guru_mp)
        .then(function(respons){
            $scope.kelas = respons.data.kelas;
        });
});

app.controller('guru.kelas.detail.murid', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.murid = {};
    myHelp.getDetail('/guru/murid/' + $stateParams.id_guru_mp)
        .then(function(respons){
            $scope.murid = respons.data.murid;
        });
});

app.controller('guru.kelas.detail.nilai', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.murid = {};
    myHelp.getParam('/guru/nilai', {id_guru_mp: $stateParams.id_guru_mp})
        .then(function(respons){
            $scope.nilais = respons.data.nilais;
        });
});

app.controller('guru.kelas.detail.nilai.add', function truncateCtrl($scope,$state,$stateParams,myHelp){
    $scope.param={};
    myHelp.getParam('/guru/nilai/create',{id_guru_mp:$stateParams.id_guru_mp})
        .then(function(respons){
            $scope.jenis_nilai = respons.data.jenis_nilai;
            $scope.murid_nilai = respons.data.murid_nilai;
        });

    $scope.cek_batas_remedial = function () {
        if($scope.param.batas_remedial > 99)
        {
            errorView("Nilai Remedial minimal < 100");
            return false;
        }

        $scope.murid_nilai.map(function(x) {
            x.is_remedial = $scope.param.batas_remedial ;
            return x
        });

    }
    $scope.autoNilai = function (id_nilai) {

        // var index;
        // $scope.murid_nilai.some(function(entry, i) {
        //     index = i;
        //     return entry.id_nilai == id_nilai;
        // });
        //
        // $scope.murid_nilai.indexOf(index).nilai_akhir=$scope.murid_nilai.indexOf(index).nilai;

    }



    $scope.submitForm = function() {
        $scope.cek_batas_remedial();

        var Param = clearObj({nilai:$scope.murid_nilai,param:$scope.param});
        myHelp.putParam('/guru/nilai/' + $stateParams.id_guru_mp, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("^",{}, { reload: true });
                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });

    };

});

app.controller('guru.kelas.detail.absensi', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.murid = {};
    myHelp.getParam('/guru/absensi', {id_guru_mp: $stateParams.id_guru_mp})
        .then(function(respons){
            $scope.absensis = respons.data.absensis;
        });
});

app.controller('guru.kelas.detail.absensi.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.murid = {};
    myHelp.getParam('/guru/absensi_detail', {id_absen_kelas: $stateParams.id_absen_kelas})
        .then(function(respons){
            $scope.absen_murid = respons.data.absen_murid;
        });
});

app.controller('guru.kelas.detail.absensi.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getParam('/guru/absensi/create',{id_guru_mp:$stateParams.id_guru_mp})
        .then(function(respons){
            $scope.absen = respons.data.absen;
            $scope.absen_murid = respons.data.absen_murid;
        });


    $scope.submitForm = function() {

        var Param = clearObj({absen:$scope.absen_murid,absen_murid:$scope.absen});
        myHelp.putParam('/guru/absensi/' + $stateParams.id_guru_mp, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $state.go("^",{}, { reload: true });
                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });

    };

});


/*----------------------------------
UJIAN
----------------------------------*/


app.controller('guru.kelas.detail.ujian', function truncateCtrl($scope,$state,$stateParams,myHelp){

    $scope.murid = {};
    $scope.filter =  function () {
        myHelp.getParam('/guru/ujian', {id_guru_mp: $stateParams.id_guru_mp})
            .then(function(respons){
                $scope.data = respons.data.data;
            });
    }
    $scope.filter();

    $scope.lebar_soal = 0;
    $scope.lebar_pertanyaan = 12;
    $scope.clikaddSoal = function () {
        if ($scope.lebar_soal==0)
        {
            $scope.lebar_soal=12;
            $scope.lebar_pertanyaan=0;
        }
        else
        {
            $scope.lebar_soal = 0;
            $scope.lebar_pertanyaan = 12;
        }
    }

    $scope.deleteUjian = function (id) {
        myHelp.delete('/guru/ujian/' + id)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $scope.filter();
                }
                , function myError()
                {
                    errorView("error");
                });
    }

});

app.controller('guru.kelas.detail.ujian.detail', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getDetail('/guru/ujian/' + $stateParams.id_ujian)
        .then(function(respons){
            $scope.ujian = respons.data.ujian;
            $scope.murid = respons.data.murid;
            $scope.report = respons.data.report;
            $scope.report_siswa = respons.data.report_siswa;
        });

    myHelp.getDetail('/guru/ujian_soal/' + $stateParams.id_ujian)
        .then(function(respons){
            $scope.ujian_soal = respons.data.soal
        });


});

app.controller('guru.kelas.detail.ujian.add', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getParam('/guru/ujian/create',{id_guru_mp:$stateParams.id_guru_mp})
        .then(function(respons){
            $scope.pertanyaan = respons.data.pertanyaan;
            $scope.ujian = respons.data.ujian;
            $scope.getSoal($scope.ujian.id_ujian);
        });

    $scope.getSoal = function (id) {
        myHelp.getDetail('/guru/ujian_soal/' + id)
            .then(function(respons){
                $scope.soal = respons.data.soal;
            });
    }
    $scope.delete = function (id) {
        myHelp.delete('/guru/ujian_soal/' + id)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $scope.getSoal($scope.ujian.id_ujian);
                }
                , function myError()
                {
                    errorView("error");
                });
    }

    $scope.masuaan = function(id) {
        var Param = {};
        Param.id_soal = id;
        Param.id_ujian = $scope.ujian.id_ujian;
        myHelp.postParam('/guru/ujian_soal' , Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $scope.clikaddSoal();
                    $scope.getSoal($scope.ujian.id_ujian);
                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });

    };

    $scope.simpan_wae = function() {
        var Param = clearObj($scope.ujian);

        myHelp.postParam('/guru/ujian' , Param)
            .then(function mySuccesresponse()
                {
                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });

    };


    $scope.submitForm = function() {

        var Param = clearObj($scope.ujian);
        myHelp.putParam('/guru/ujian/' + $scope.ujian.id_ujian, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $scope.filter();
                    $state.go("^",{});
                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });

    };

});

app.controller('guru.kelas.detail.ujian.edit', function truncateCtrl($scope,$state,$stateParams,myHelp){

    myHelp.getParam('/guru/ujian/' + $stateParams.id_ujian + "/edit",{})
        .then(function(respons){
            $scope.pertanyaan = respons.data.pertanyaan;
            $scope.ujian = respons.data.ujian;
            $scope.getSoal($scope.ujian.id_ujian);
        });

    $scope.getSoal = function (id) {
        myHelp.getDetail('/guru/ujian_soal/' + id)
            .then(function(respons){
                $scope.soal = respons.data.soal;
            });
    }
    $scope.delete = function (id) {
        myHelp.delete('/guru/ujian_soal/' + id)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $scope.getSoal($scope.ujian.id_ujian);
                }
                , function myError()
                {
                    errorView("error");
                });
    }

    $scope.masuaan = function(id) {
        var Param = {};
        Param.id_soal = id;
        Param.id_ujian = $scope.ujian.id_ujian;
        myHelp.postParam('/guru/ujian_soal' , Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $scope.clikaddSoal();
                    $scope.getSoal($scope.ujian.id_ujian);
                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });

    };

    $scope.simpan_wae = function() {
        var Param = clearObj($scope.ujian);

        myHelp.postParam('/guru/ujian' , Param)
            .then(function mySuccesresponse()
                {
                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });

    };


    $scope.submitForm = function() {

        var Param = clearObj($scope.ujian);
        myHelp.putParam('/guru/ujian/' + $scope.ujian.id_ujian, Param)
            .then(function mySuccesresponse()
                {
                    berhasilView();
                    $scope.filter();
                    $state.go("^",{});
                }
                , function myError()
                {
                    errorView("Mohon maaf, hubungi admin");
                });

    };

});