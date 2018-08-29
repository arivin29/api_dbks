/**
 * INSPINIA - Responsive Admin Theme
 *
 */
(function () {
    angular.module('inspinia', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize',                    // ngSanitize
        'angular-loading-bar',
        'jsonFormatter',
        'checklist-model',
        'ui.utils.masks',
        'angularUtils.directives.dirPagination',
        'Auth',
        'angular-jwt',
        'froala'
    ]).
        value('froalaConfig', {
            toolbarInline: false,
            height: 300,
            imageUploadURL: 'http://mansasi.edutech.web.id/site/public/image',
            placeholderText: 'Enter Text Here'
        })
})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad

var DEBUG=true;
var BASE_URL = 'http://27.111.32.33/Pekerjaan/sekolah/site/public/api/v1';
// var BASE_URL = 'http://arivin.xyz/site_sbks/public/api/v1';

var app = angular.module('inspinia');
app.run(function ($state,$rootScope) {
    $rootScope.$state = $state;
})

app.run( ['$rootScope', '$state', '$stateParams','$window','$http','$location', '$anchorScroll',
    function ($rootScope,   $state,   $stateParams,$window,$http,$location, $anchorScroll) {

        $rootScope.logut = function()
        {
            store.remove('token');
            $state.go("login",{}, { reload: true })
            $window.location.reload();
        }
 
        $rootScope.gotoTop = function() {
            $location.hash('form');
            $anchorScroll();
        };

        $rootScope.backButton = function(url,acc)
        {
            if(acc==true)
            {
                $state.go(url,{},{reload:url});
            }
            else
            {
                $state.go(url,{},{reload:false});
            }

        }

        $rootScope.backParent = function()
        {
            $state.go('^',{},{reload:false});
        }
    }
])
