var WindowTinggi = $(window).height();
var NavBarTinggi = $('.navbar-header').height() ;
var WindowLebar = $(window).width() ;
var SidebarLebar = $('.sidebar').width() ;

$('ul#page-menu li').click(function()
{
    $('ul#page-menu li > a').removeClass('active');
    $(this).children('a').addClass('active');
    console.log("ASdsa");

})

function Melayang()
{
    $('.popUp').show();
    $('.popUp .ibox-content').height($('.wrapper').height()-100);
}

function colosePopup()
{
    $('.popUp').hide();
}

function formAutoLoad()
{
    if ( $( ".select2" ).length ) {
        // $(".select2").select2();
    }

    if($('.form-content').length)
    {
        var tinggi = $('.hitam-popup').height();
        $('.form-content').height(tinggi - 200);
    }

}

function infoAction(pesan,id)
{
    $('#'+ id).click(function()
    {
        swal("Apakah Anda Yakin", pesan, "warning");
    });
}

function warningView(pesan)
{
    swal("Gagal Simpan", pesan, "warning");
}

function errorView(pesan)
{
    if(pesan)
    {
        swal("Gagal", pesan, "error");
    }
    else
    {
        swal("Gagal", "Data inputan tidak valid!", "error");
    }

}

function berhasilView(pesan)
{
    swal("Berhasil", "Data Data berhasil disimpan", "success");
}

function PindahParamPetugas($http,$state,url, data, redirek,param_redirek,pesan)
{
    swal({
       title: "Konfirmasi?",
       text: "Apakah Anda Yakin Akan Menerbitkan Izin Ini ? "+ pesan +" ",
       type: "warning",
       showCancelButton: true,
       confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, Kirim it!",
       cancelButtonText: "No, cancel plx!",
       closeOnConfirm: false,
       closeOnCancel: false },
    function(isConfirm){
       if (isConfirm) {
           return $http.post(BASE_URL + url, data)
           .then(function mySuccesresponse()
           {
              swal("Terkirim!", "Izin berhasil di kirim.", "success");
             $state.go(redirek,param_redirek, { reload: true })
           }
           , function myError()
           {
               errorView();
           });

       } else {
          swal("Cancelled", "Your imaginary file is safe :)", "error");
       }
    });
}

function PindahParam($http,$state,url, data, redirek ,param_redirek,pesan)
{
    swal({
       title: "Konfirmasi?",
       text: "Apakah Anda Yakin Akan Memproses "+ pesan +"  Ini ? ",
       type: "warning",
       showCancelButton: true,
       confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, "+ pesan +" it!",
       cancelButtonText: "No, cancel plx!",
       closeOnConfirm: false,
       closeOnCancel: false },
    function(isConfirm){
       if (isConfirm) {
           return $http.put(BASE_URL + url, data)
           .then(function mySuccesresponse()
           {
              swal("Terkirim!", "Izin berhasil di kirim.", "success");
              $state.go(redirek,param_redirek, { reload: true })
           }
           , function myError()
           {
               errorView();
           });

       } else {
          swal("Cancelled", "Your imaginary file is safe :)", "error");
       }
    });
}

function deleteParam($http,$state,url, data, redirek,param_redirek)
{
    swal({
       title: "Are you sure?",
       text: "Your will not be able to recover this imaginary file!",
       type: "warning",
       showCancelButton: true,
       confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, delete it!",
       cancelButtonText: "No, cancel plx!",
       closeOnConfirm: false,
       closeOnCancel: false },
    function(isConfirm){
       if (isConfirm) {
           return $http.delete(BASE_URL + url, data)
           .then(function mySuccesresponse()
           {
               swal("Deleted!", "Your imaginary file has been deleted.", "success");
              $state.go(redirek,param_redirek, { reload: true })
           }
           , function myError()
           {
               errorView();
           });

       } else {
          swal("Cancelled", "Your imaginary file is safe :)", "error");
       }
    });
}

var count_hari = function(start,end) {
    var hari = (end - start) / (1000 * 60 * 60 * 24);
    return Math.round(hari);
};

function toForamatDate(tanggal)
{

    return $filter('date')(new Date(), 'dd MMMM yyyy');

}


function due_list_val(variabel,value) {

        if(variabel =='years' )
        {
            return value *360;
        }

        if(variabel =='months' )
        {
            return value * 30;
        }

        return value;
    };




// function btnSumbit(id) {
//     console.log("sadsa");
//     // var frmvalid = $(id).valid();
//     // if (!frmvalid) {
//     //     errorView();
//     //     return false;
//     // }
//     $(id).submit();
// }



