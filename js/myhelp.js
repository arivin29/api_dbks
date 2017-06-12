var app = angular.module('inspinia');
app.service('myHelp', ['$q','$http','$state' ,function($q, $http,$state) {


    this.getParam = function(url, data) {
        var query = {
            params: data,
            headers : {'Accept' : 'application/json'}
        };

        return $http.get(BASE_URL + url, query);
    };

    this.getDetail = function(url) {
        return $http.get(BASE_URL + url);
    };



    //POST
    this.postParam = function(url, data)
    {
        var query = {
            params: data,
            headers : {'Accept' : 'application/json'}
        };

        return $http.post(BASE_URL + url, data);

    }

    //PUT
    this.putParam = function(url, data)
    {
        var query = {
            params: data,
            headers : {'Accept' : 'application/json'}
        };

        return $http.put(BASE_URL + url, data);
    }

    //DELETE
    this.deleteParam = function(url, data)
    {
        var query = {
            params: data,
            headers : {'Accept' : 'application/json'}
        };
        return $http.delete(BASE_URL + url, data);
    }

    this.delete = function(url)
    {
        return $http.delete(BASE_URL + url);
    }

    this.deleteConfirm = function(url, data, redirek,param_redirek)
    {
        return deleteParam($http,$state,url, data, redirek,param_redirek);
    }



    this.cekrole = function (izin) {
        return _.contains(role.lokasi,izin);
    }

}]);

app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .success(function(){
            })
            .error(function(){
            });
    }
}]);

function debugData(data)
{
    if(DEBUG==true)
    {
        console.log(data);
        DATA=data;
    }
}
function clearInt (val) {
    if(isNaN(val))
    {
        return val.replace(/number:/g,"");
    }
    return val;
}
function clearString(val) {
    if(isNaN(val))
    {
        return val.replace(/string:/g,"");
    }
    return val;
}



function clearObj(obj) {
    var json_data = clearInt(JSON.stringify(obj));
    var json_data = clearString(json_data);
    var json_data = JSON.parse(json_data);
    return json_data;

}

function clearNbsp (val) {
    console.log(val);
    return val.replace(/&nbsp;/g, '');
}

function clearObjNbsp(obj) {
    var json_data = clearNbsp(JSON.stringify(obj));
    var json_data = JSON.parse(json_data);
    return json_data;

}


app.filter('words', function() {
    function isInteger(x) {
        return x % 1 === 0;
    }


    return function(value) {
        if (value && isInteger(value))
            return  toWords(value);

        return value;
    };

});


var th = ['','thousand','million', 'billion','trillion'];
var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];


function toWords(s)
{
    s = s.toString();
    s = s.replace(/[\, ]/g,'');
    if (s != parseFloat(s)) return 'not a number';
    var x = s.indexOf('.');
    if (x == -1) x = s.length;
    if (x > 15) return 'too big';
    var n = s.split('');
    var str = '';
    var sk = 0;
    for (var i=0; i < x; i++)
    {
        if ((x-i)%3==2)
        {
            if (n[i] == '1')
            {
                str += tn[Number(n[i+1])] + ' ';
                i++;
                sk=1;
            }
            else if (n[i]!=0)
            {
                str += tw[n[i]-2] + ' ';
                sk=1;
            }
        }
        else if (n[i]!=0)
        {
            str += dg[n[i]] +' ';
            if ((x-i)%3==0) str += 'hundred ';
            sk=1;
        }


        if ((x-i)%3==1)
        {
            if (sk) str += th[(x-i-1)/3] + ' ';
            sk=0;
        }
    }
    if (x != s.length)
    {
        var y = s.length;
        str += 'point ';
        for (var i=x+1; i<y; i++) str += dg[n[i]] +' ';
    }
    return str.replace(/\s+/g,' ');
}

window.toWords = toWords;

