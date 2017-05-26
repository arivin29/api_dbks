
    var app = angular.module('inspinia');
	app.directive('laPagination',['$timeout',function($timeout){
		return{
				restrict : 'E',
				transclude: true,
				templateUrl : 'bower/larangular-pagination/pagination.html',
				link:function(scope,element,attrs){
					//USE ATTRS TO GET OBJECT TO USE A SHARED SCOPE

                    var startDate = attrs.pageAttr;
					var pageAttr = attrs.pageAttr;
					scope.pages = [];
					var current_page = pageAttr.current_page;
					var last_page = pageAttr.last_page;
					//LIMIT OF THE PAGE TO BE SHOWN IN THE LIST
					//IF YOU ARE USING ANGULAR MATERIAL YOU CAN ALSO CHANGE A $SETLIMIT IN ACCORDING TO USER'S SCREEN
					// var setLimit = ($mdMedia('sm') ? VALUE : ANOTHER CONDITION OR VALUE)
					var setLimit = pageAttr.per_page;
					// CHECK IF THE $LIMIT IS GREATER THAN NUMBER OF PAGES
					var limit = ( setLimit <= last_page ? setLimit : last_page );
					//SET AN AVERAGE OF $SETLIMIT
					var setAverage = Math.round(( 1 + setLimit) / 2);
					//CHECK IF THE $current_page IS THE MIDDLE OF THE TERM TO SHOW THE SAME NUMBER OF TERMS TO EACH SIDE
					var average = (current_page <= setAverage ? true : false);
					// NUMBER OF PAGE TO BE SHOWN IN EACH SIDE WHEN THE CURRENT PAGE IS EQUALS OR GREATER THAN THE $AVERAGE
					var eachSide = setAverage - 1;
					var max = (current_page + eachSide <= last_page ? current_page + eachSide : last_page)
					var start;
					//MAKE THE PAGINATION
					scope.setPages = function(){
						if( average || last_page <= limit){
							for(start = 1; start <= limit; start++){
								scope.pages.push(start);
							}
							//SHOW A LINK FOR THE LAST PAGE
							scope.showLast = (setLimit < last_page ? true : false);

							// CHECK TO ALWAYS SHOW $SETLIMIT'S NUMBER OF PAGE
						}else if(last_page - current_page < eachSide){
							var setStart = last_page - (setLimit - 1);
							for(start = setStart; start <= max; start++){
								scope.pages.push(start);
							}
							//SHOW A LINK FOR THE FIRST PAGE
							scope.showFirst = true;

						}
						else
						{
							for(start = current_page - eachSide; start <= max ; start++){
								scope.pages.push(start);
							}
							//SHOW A LINK FOR THE FIRST PAGE
							scope.showFirst = true;
							//SHOW A LINK FOR THE LAST PAGE
							scope.showLast = (last_page - current_page > eachSide ? true : false);
						}

					};

					console.log(setLimit);

					//USE TIMEOUT TO LOAD THE PAGINATION AFTER $HTTP REQUEST
					$timeout(function(){
						scope.setPages();
						scope.previous = current_page - 1;
						scope.next = current_page +1;
					})

				}

			}

	}])


