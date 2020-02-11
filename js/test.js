$(function () {
    $('.form_date').datetimepicker({
        weekStart: 1,  	//0-周日,6-周六 。默认为0
        autoclose: true,    //当选择一个日期之后是否立即关闭此日期时间选择器。
        startView: 'month',   //日期时间选择器打开之后首先显示的视图。 可接受的值：0 or 'hour' 为小时视图、 1 or 'day' 为天视图、2 or 'month' 为月视图（为默认值）、3 or 'year'  为年视图、4 or 'decade' 为十年视图
        todayBtn: false,    //如果此值为true 或 "linked"，则在日期时间选择器组件的底部显示一个 "Today" 按钮用以选择当前日期。如果是true的话，"Today" 按钮仅仅将视图转到当天的日期，如果是"linked"，当天日期将会被选中。
        todayHighlight: true,  //true, 高亮当前日期
        keyboardNavigation: false,  //是否允许通过方向键改变日期。
        language: 'zh-CN',  //默认语言
        format: "yyyy-mm-dd",    //默认选择格式
        forceParse: false,  	//当输入非格式化日期时，强制格式化。默认true。当选择器关闭的时候，是否强制解析输入框中的值。
        bootcssVer: 3,	//显示向左向右的箭头
        pickerPosition: "bottom-left", //选择板所在输入框位置
        minView: 2, //0-从小时视图开始，选分；1-从天视图开始，选小时；2-从月视图开始，选天；3-从年视图开始，选月；4-从十年视图开始，选年
        // startDate 开始时间-之前的日期都不能选择，这个时间之后的时间才能选择。
        //endDate 结束时间-这个时间后面的不能再选择
    });
});
