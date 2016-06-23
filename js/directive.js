angular.module('mainApp.directives',[])
    .directive('chineseBanner',function(){
        return {
            restrict:'AEMC',
            transclude:true,
            template:'<img src="/images/chinese/chinese_banner.jpg" alt="丁丁书城中文书籍">'
        };
    })
    .directive('foreignerBanner',function(){
        return {
            restrict:"AEMC",
            transclude:true,
            template:'<img src="/images/foreigner/foreigner_banner.jpg" alt="丁丁书城外国名著">'
        };
    });
