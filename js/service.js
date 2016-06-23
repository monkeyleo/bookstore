// angular.module('loginApp.services',[])
//     .service('getUserService',function($http,$q){
//         var userArr=new Array();
//         var promise=$http({
//                     method:'GET',
//                     url:'/data/user.json'
//                 });
//         promise.success(function(result){
//             userArr =result.data;
//         })
//         .error(function(err){
//             alert(err);
//         });
//         console.log(userArr);
//         return userArr;
//     });
