angular.module('loginApp.controller',[])
    .controller('loginCtrl',function($scope,$http){
        $scope.loginSubmit=function(){
            var promise =$http({
                method:'GET',
                url:'/data/user.json'
            })
            .success(function(result){
                $scope.userArr=result.data;
            })
            .error(function(err){
                alert(err);
            })
            .then(function(){
                for(var i=0;i<$scope.userArr.length;i++){
                    if ($scope.user.username==$scope.userArr[i].username) {
                        if ($scope.user.password==$scope.userArr[i].password) {
                            window.location.href="index.html";
                            return false;
                        }
                    }
                }
                alert('username or password is wrong!');
            });
        }
    });
angular.module('mainApp.controller',[])
    .controller('BannerCtrl',function($scope,$http){
        var promise =$http({
            method:"GET",
            url:"/data/carousel.json"
        });
        var i=1;
        promise.success(function(result){
            $scope.carousels=result.data;
        }).error(function(err){
            alert(err);
        }).then(function(){
            $scope.image=$scope.carousels[i];
            // var watch =$scope.$watch()
            setInterval(function(){
                $scope.$apply(function(){
                    $scope.image = $scope.carousels[i];
                    i=(i+1)%3;
                });
            },3000);
        });
    })
    .controller('chineseListCtrl',function($scope,$http){
        var promise=$http.get('/data/chinese.json')
                    .success(function(result){
                        $scope.chineseBooks=result.data;
                    }).error(function(err){
                        alert(err);
                    });
    })
    .controller('chineseBookDetailCtrl',function($scope,$routeParams,$http){
        var promise=$http.get('/data/chinese.json')
                    .success(function(result){
                        for(var i=0;i<result.data.length;i++){
                            if (result.data[i].id==$routeParams.id) {
                                $scope.book=result.data[i];
                                console.log($scope.book);
                                return false;
                            }
                        }
                    }).error(function(err){
                        alert(err);
                    }).then(function(){
                        for(var i=0;i<$scope.book.images.length;i++){
                            $scope.book.images[i]='chinese/'+$scope.book.images[i];
                        }
                        $scope.image=$scope.book.images[0];
                        $scope.changeImage =function(booknail){
                                $scope.image=booknail;
                        };
                        $scope.number=1;
                        $scope.sub = function(){
                            if ($scope.number>0) {
                                $scope.number--;
                            }
                        }
                        $scope.add=function(){
                            $scope.number++;
                        }
                        $scope.$watch('number',function(){
                            $scope.count=$scope.number * $scope.book.price;
                        });
                    })
        })
        .controller('foreignerListCtrl',function($scope,$http){
            var promise=$http.get('/data/foreigner.json')
                        .success(function(result){
                            $scope.foreignerBooks=result.data;
                        }).error(function(err){
                            alert(err);
                        });
        })
        .controller('foreignerBookDetailCtrl',function($scope,$routeParams,$http){
            var promise=$http.get('/data/foreigner.json')
                        .success(function(result){
                            for(var i=0;i<result.data.length;i++){
                                if (result.data[i].id==$routeParams.id) {
                                    $scope.book=result.data[i];
                                    console.log($scope.book);
                                    return false;
                                }
                            }
                        }).error(function(err){
                            alert(err);
                        }).then(function(){
                            for(var i=0;i<$scope.book.images.length;i++){
                                $scope.book.images[i]='foreigner/'+$scope.book.images[i];
                            }
                            $scope.image=$scope.book.images[0];
                            $scope.changeImage =function(booknail){
                                    $scope.image=booknail;
                            };
                            $scope.number=1;
                            $scope.sub = function(){
                                if ($scope.number>0) {
                                    $scope.number--;
                                }
                            }
                            $scope.add=function(){
                                $scope.number++;
                            }
                            $scope.$watch('number',function(){
                                $scope.count=$scope.number * $scope.book.price;
                            });
                        });
    });
