var app = angular.module('inspinia');
app.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i=0; i<total; i++)
            input.push(i);
        return input;
    };
});

app.filter('dateNow',['$filter',  function($filter) {
    return function() {
        return $filter('date')(new Date(), 'dd MMMM yyyy');
    };
}])

app.filter('Mydate',['$filter',  function($filter) {
    return function(input) {
        return $filter('date')(new Date(input), 'dd MMMM yyyy');
    };
}])

app.filter('MakeJam',['$filter',  function($filter) {
    return function(input) {
        var panjang = input.length;
        var indek1 = input.substring(panjang-2,panjang);
        var indek2 = input.substring(panjang-4,panjang-2);
        var indek3 = input.substring(0,panjang-4);
        if(indek3.length < 2)
        {
            indek3 = "0" + indek3;
        }
        return indek3 + ":"+ indek2 +":"+ indek1;

    };
}])


app.filter('To_int',['$filter',  function($filter) {
    return function(input) {
        return parseFloat(input) * 1;

    };
}])


// app.filter('due_list_val',['$filter',  function($filter) {
//     return 100;
//     return function(variabel,value) {
//         if(variabel =='years' )
//         {
//             return value *360;
//         }
//
//         if(variabel =='months' )
//         {
//             return value * 30;
//         }
//
//         return value;
//     };
// }])

    .filter('currentdate',['$filter',  function($filter) {
        return function() {
            return new Date();
        };
    }])

app.filter('number', [function() {
    return function(input) {
        return parseInt(input, 10);
    };
}]);

app.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

app.filter('status_proyek', function() {
    return function(input) {
        if(input == null)
        {
            return "Progress";
        }
    }
});
app.filter('filterTsnVar', function() {
    return function(input) {
        if(input == 'days')
        {
            return "D";
        }
        else if(input == 'months')
        {
            return "M";
        }
        else if(input == 'hours')
        {
            return "H";
        }
        else if(input == 'years')
        {
            return "Y";
        }
    }
});

app.run(function($rootScope) {
    $rootScope.hitung_hari = function(start,end) {
        var hari = (end - start) / (1000 * 60 * 60 * 24);
        // console.log(start);
        return Math.round(hari);
    };
});


app.run(function($rootScope) {
    $rootScope.hitung_hari_form = function(start,end) {
        var hari = (end - start) / (1000 * 60 * 60 * 24);
        // console.log(start);
        return Math.round(hari);
    };
});

app.run(function($rootScope) {
    $rootScope.isLoading = function () {
        return $http.pendingRequests.length !== 0;
    };
});

app.run(function($rootScope) {
    $rootScope.btnSumbit = function (id) {
        return btnSumbit(id)
    };
});

var myApp = angular.module('myApp', []);
myApp.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);

        for (var i=0; i<total; i++) {
            input.push(i);
        }

        return input;
    };
});
