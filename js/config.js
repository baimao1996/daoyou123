var BaseUrl =  "http://res1111-1314937639.cos.ap-guangzhoudy.kn.pinhxd.com";
var ResourceUrl = 'http://res1111-1314937639.cos.ap-guangzhou.kn.pinhxd.com/ttxindaoyou/';

if(window.location.pathname!='/'
    &&window.location.pathname!='/index.html'
    &&window.location.pathname!='/site/login.html'
    &&window.location.pathname!='/site/wxredd.html')
{
    var wwid=window.localStorage.getItem("wwid");
    if(!wwid)
    {
        localStorage.setItem('enter_url',encodeURIComponent(window.location.href))

        alert('请先登录');
        window.location.href = '/index.html';
    }
}


        