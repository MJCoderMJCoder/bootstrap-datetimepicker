$(function(){
    console.log("datetimepicker.js $.fn.datetimepicker.defaults");
    $.fn.datetimepicker.defaults = {
        //默认语言
        language: 'zh-CN',
        //默认选择格式
        format: "yyyy-mm-dd hh:ii:ss",
        weekStart: 1,  	//0-周日,6-周六 。默认为0
        autoclose: true,
        forceParse: false,  	//当输入非格式化日期时，强制格式化。默认true
        bootcssVer:3,	//显示向左向右的箭头
        todayBtn: true,
        //选择板所在输入框位置
        pickerPosition: "bottom-left",
        todayHighlight:true,   //true, 高亮当前日期
    };
});
