/**
 * Created by Administrator on 2018/4/19 0019.
 */
//webapp项目下的js，这是前端js,注意不要与后端的js搞混(利用ajax实现登陆操作的验证)
$(function(){
    $("#login_submit").on("click",function(){
        //获取表单数据：获取表单数据：$(“#formname”).serialize();
        var datas = $("#login_form").serialize();
        //键值对转json字符串
        var jsonstr = strTojson(datas);
        //json字符串转json对象
        var json = paramTojson(jsonstr);
        //common.js文件和login.js都在login.html中被导入引用，所以这里可以使用到common.js中的方法

        // TODO 判断用户名密码是否合法

        //用ajax来请求后台数据（在jquery里面使用ajax）
        $.ajax({
            //访问地址
            url:"/loginaction",
            //访问方式（一般有get和post两种方式）
            type:"post",
            //发送数据
            data:json,
            //同步请求，在没有返回值之前，用户其它操作必须等待请求完成才可以执行。
            async:false,
            //成功以后处理函数
            success:function(data){
                console.log("ajax===="+data);
            },
            //失败后处理函数
            fail:function(){

            }



        })





    });
});
