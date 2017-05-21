/**
 * Created by User on 2017/5/21.
 */
$(function () {
    //图片选择
    $('#file_pic').ace_file_input({
        style:'well',
        btn_choose:'点击选择图片！',
        btn_change:null,
        no_icon:'ace-icon fa fa-picture-o',
        thumbnail:'small',
        droppable:true,
        allowExt: ['jpg', 'jpeg', 'png', 'gif'],
        allowMime: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']
    });
    $(window).resize(function () {
        $('#sub_course_table').bootstrapTable('resetView', {
            height: tableHeight()
        })
    });
    $('#sub_course_table').bootstrapTable({
        search: true,//是否搜索
        searchAlign: "left",//查询框对齐方式
        searchOnEnterKey: false,//回车搜索
        searchTimeOut: 500,
        pagination: true,//设置为 true 会在表格底部显示分页条
        pageSize: 15,//单页记录数
        pageList: [10, 15, 20, 25, 30, 35, 40],//分页步进值
        height: tableHeight(),
        showRefresh: true,//刷新按钮
        uniqueId: "id",
        locale: "zh-CN",
        singleSelect: true,
        striped: true,
        columns: [
            [{
                title: "<span class='text-danger'>百题斩APP轮播物料</span>",
                halign: "center",
                align: "center",
                colspan: 5
            }
            ],
            [{
                title: "#",
                width: "5%",//宽度
                checkbox: true,
                align: "center",//水平
                valign: "middle"//垂直
            },
                {
                    title: "图片物料",
                    field: "subCourse",
                    width: "35%",//宽度
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function(value,row,index){
                        return '<img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAAA1CAYAAAAgaHywAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAyrSURBVHhe7Z2/b1vJEcf9HyR/QICkSJ8ALi5VlN4GktKucinMgg0Dm40LWoESgAeYQMIABGwhgK6QBRUJ7mAXxAUCJCDRFbIvBKIivEK4iwCfCiYwY4BFVGSy3ycNtVzNvt1HPT09Ps4CBEW+/TE7u/vR7O7s8hZpUA2oBlQDFdLArQrVRauiGlANqAZIoaadQDWgGqiUBhRqlWpOrYxqQDWgUNM+oBpQDVRKAwq1SjWnVkY1oBpQqGkfUA2oBiqlAYVapZpTK6MaUA0o1LQPqAZUA5XSgEKtUs2plVENqAYUatoHVAOqgUppQKFWqebUyqgGVAMKNe0DqgHVQKU0oFCrVHOWrzIff/lX+smrj+jW+i+mL3z+1Ref0lfvR6URePCvfyYy2a+NL/9SGvlUkHgNKNTidaUxM2rgw70/zMDMBhv+/u3fP8uY4/VF3/3mH5dkXTHw1bB4GlCoLV6bLYTEsHJciLmfy2SpKdQWoltFCalQi1LTckcaDof0/Pnzmdfr169TlQIrR4Iavv/uVpN++tnvS6XUGKi9++9Ep6ilajVZGIXaAjTSTYv44MEDun379szr2bNnqWJJQLPXqACIMoUYqMXEKVOdllUWhdqytnyGej99+jQXqGUosvCoMcCKiVO44AtW4P/G/6HJ6m/o3Y9W6N/f+X7yjs/4Pq+gUMtLkxXOB1ZZHpZamVUUA6yYOGWuYxlkmzz5dQIz94Xv8woKtbw0WeF8FGpnjatQI5oMetSo1ai7P9/ywbsPfixCDRZbXuFGoLa7uztddF5dXU3+3traIixIh8Lbt2+TuEiTNS3yRnqk7XQ6yTtkscObN2/IfiE+h7RnSae36gUZ7bScB+rI8kvl++pv582yv3r1it6/fy8mQdmuvHZEpLPzhCyuvJAVeUDPrqWG7zh/bjesk+19M0xe0poaP8O7tPOJ7/Dsd4d/ni7Iwy0EvmPwd5PW4ewyOX8p71C8NGDZcrn1+uGfnkzrjPIXJwyoZ+DU6p/EizwxaRo1qq31KUOqmfwlK42/ixckPWahUMMgWllZuTRA7AFz9+5dwmB1AwZOzTSCO7jsz3ieBkZpcCI9yoRs2NFz87d3+dxnWEBHABCQh/scdWVo4v3+/fui/JDbF6CLkM5Qvhsk6wp1Abh8eoD8L1++nGYlbRBI+mc9SGDwuXWsvvkkKefTr/9Gv/x8i75ndkRDLiDf/rhOn3z1xUxVpTKxu+oGKR7y45AGNcgako2f5zUw88tnTHudFq0fjOh0JtOsUDuh/poBmumrMa/eQK6B11IzFlxeoTCoYbCkAcl+xoOEKwlQhQY2p0c8CWxpA5nTStBJgxrK8oHKlufRo0fBuku7iTEyczkuGAFRV9+QNaRHPGfrrwioAUCxwOB4AFAMjOxB4gNuTD6LDbVTGu33qGlg1Oj0aTjmGmeB2jnQ6nWq1x/TxqFn6jnap17TQO/xBvmiVGZNDYPEBzRpkNkgQdrQQJQGr92hJQssFrC2LHfu3AnCKTbfkMwSlEJ522C8Sp3ZWisCajhVkBVqto9b7DrX8kLtfCSMD2mzVadavUWbhyBbJNQmR7QNC63RpX1zqm0yWDeAbFCnf0QXaDul451OAs5mb5/SDr8lu59mU4AtNrzj88LtfkpW2r1792bWg2BdwXXAtdKkaRTS8voP3vHZHfD2NEqatgKUiIPBj3cfsGyo+QY5LCrEw8uXD9LyFNdngdkglqazSMdWFGR2YY/PHHxQQxzoFM99ywEMR5SBv6V64zs8w4t1jbUnWDU+y4af4Z2tLaQB1AAq+LHhDCYHrIP9fPfyUavYaWNelhpkhcySLLA07XrlNYW6nnzGdLjZonayjhYJtZM+tdvbdGQZZ5OjbVqr16je2qCd/T71zmG5Yaa4ZQiFTD/n2T1j5UiD2/VmBxBdqD18+DDJwmcl2tDjeBKQQlBzNxqkugLWdgCIJatrOhUSpo6QzQ0SHFkeCWruPxLkJ/mgse64vHnaT7K+5unwDD03v5hpY15Qy1rWPPW8jjQn/Ta1Ng5oNLuYdl7UQfaNAhbydELHe91kF/Rsfe2xWbM7cdbsrqNGcXkWAjXJUgOspN1BW2wJVhiYUnAhgfwRfNM4KQ/JIglBzQWsVJ60XpYGtViISODisqRnrhUMHUhlxVjL85woiOuSl2OlAbKI6eeiQu30eIc6WONqdKh/sZh2Vh1jgbUMkHwL+jOtYCA2Ojqkne0etVsNqtfq1Fzr0vbOkI5HR7S/3aW1Bqa2DVrrblL/4IhGE5Gk83aBTOkKgZrPMsHAhrXhWjvTTiRYLNLARHwJSLGDlsvLA2ppoLFbJg1qkhySjqSy2MpaRKjBJQLuGz8zU1FcTwR3Cd96W1bQXGVNLWtZmUbgtUce0cFGKwFRa/OQpvsEMVAzC//dZoOazTXqrhtY7R/S0WhyYZElebRo6hUCC254YOC3Tr12i5oNk7abvsZ2HdUvBGoQXJrmhFw5JCsiZseR860S1GJ2LlFvhv5VoOZaYdI0N09LDT5oWCfLsmGQFTTLC7UzTY2H22ZtzPIvi4FaiDgu1ELxC3peGNR8gHEtFszReTFcglpoB9B+XiWoxdYbAELIE2p5HWiX+nTj8xcizL61USfc6OG77UOhdkVCHK4n62Ex089BL843zfVfi8n7irUQkxcKNUgQcv7E4IVfF8KLFy8uLahjwRyDLPTiwR2zZsSayWP6GbselnX6ibXEUJ3xnDdAFgFq0ibAD/745NJpA11Tyzr0jV9Zaz4QXYCpZ/ZHA0EttVkFwRoDAHw+aIBf7MBMU/0iQg3rYi70QveXuTqI1V0MhK/LUpNcP9wTA6hXHlDLYxc1dlMixIIyPD/afmwstTbtTRfZIqRKfN3aF2toM1CDg26T2pu+3daI/HOKUril5srtc67FoJTcMXhXM7b+0m6k7c9l51MWSy3GLSRU/0WAGnzTXGDZpwW4jnlALQ84VgVqfCi9hs0Dr8vHbA8bHWxQy/imNTs7dMwbm46lNh72z3Zba03jnDu82JQIddacnxcGNUwlfYev02AScqy19QEXENf/zLfz6h6l8h3FyurSEWP5QOa06acks318ye0DOPvp6jZPqEmWYx4bBdJ6mQs1OONmhRrOkbrBd704x4sBlhQHO7SLE6wjU2ZXcniwSW1AyJwy6Bn3DNFoGw+p32me+6I550fF6ecpnZwDsNZs0+YNOOQWAjX2N8PAdG+W8MGEoSP5uHE+3JkwoHHzBU9l3ama5FSL3UQGgZ02bdoXsuQgTx5QQz5SWZDZ9u3D33yu1K4P0ucJNd8uNF/xLU2NY5xvJQ99uHMg4DQBbuvw7YqmwQhlIy0CoJj2AzBXhRrK4ptEyvvrU6dm93Pn3PO/Sd2dY8tR1obQZX+2k70OtWbOjF4gfLzf9U9hExiag/SD+a4ouso/ikKgJh1Twne+w+Cug23aGUQpD8DNHvzShkPsbuJNWGpo0DTfPtRPWou0TwLkCbXQZQSS1RYDtZgfZwn5qQF+WVxBrnIyIVRW2X596nRyTIN+L5k2JtZYf+A5XYAeN6Zh//z8pgdiCWjMESmc8TzbUDDT1+1haU4SMAgLgVrswWiARrplAxaVNA31gUkaZKH0eD7PMSnXSomx1HxHt9z/TtL5zrSLAWxZ8oQa5ErT37xQAyTgupEGJeyGSmtvtq4ki8/NE3Gk6W6apWafMeV4PhcUlFceqBnra6ed3KjRXu/T4NhymA2ZQKcnibNus1O802xItNjnhUANwmDBPgQWwM93dCq0W8qOp75dQqRPO5Due34dlprvsLnUaNBH2j8FPqB+nWtqkAv5w4FaAj8sYTfEWGo8PZTAhu/4zjVpLcu+MBJ/A35SmThwztNC6UaQ0DRWahPkI5VXHqjFDv9qxisMaqw+DFK+/YFveQDwQudAbfUDCpwW70jv24Rwm80uH3LY5casmd1UN+Cbau16Z3XzuCnZQ+UCSgAP33YhuXWE8mBAch4Aj33jR0x6jVMNDRQOtTKrLXRJZJllV9lUA6qBMw0o1M57gm+dK9YC1A6lGlANlEMDSwM1TNWw/iT9wAjAJR3a9l1zVI6mUylUA6oBSQNLAzUXWphq8jk331Et35VI2pVUA6qB8mpgKaCW9hsJPhcJPhBf3qZTyVQDqoGltdRi3EEYbrDaJBcF7T6qAdXAYmhgKSw1uykwpYRbBF/jw1f6wBs/7XzqYjSnSqkaUA0sHdS0yVUDqoFqa0ChVu321dqpBpZOAwq1pWtyrbBqoNoaUKhVu321dqqBpdOAQm3pmlwrrBqotgYUatVuX62damDpNPB/1TxGeuFmA5YAAAAASUVORK5CYII=" class="img-rounded" >';
                    }
                },
                {
                    title: "跳转链接",
                    field: "course",
                    sortable: true,
                    width: "30%",//宽度
                    align: "center",//水平
                    valign: "middle"//垂直
                },
                {
                    title: "是否显示",
                    field: "try",
                    sortable: true,
                    width: "15%",//宽度
                    align: "center",//水平
                    valign: "middle"//垂直
                },
                {
                    title: "排列顺序",
                    field: "order",
                    sortable: true,
                    width: "15%",//宽度
                    align: "center",//水平
                    valign: "middle"//垂直
                }
            ]
        ],
        data: [{
            id: 1,
            subCourse: "【2016】会计基础",
            course: "2016新大纲会计从业资格",
            try: "是",
            order: 1
        },
            {
                id: 2,
                subCourse: "【2017】会计基础",
                course: "2016新大纲会计从业资格",
                try: "是",
                order: 3
            },
            {
                id: 3,
                subCourse: "【2018】会计基础",
                course: "2016新大纲会计从业资格",
                try: "是",
                order: 2
            }
        ]

    })

    $('#push_message_history').bootstrapTable({
        search: true,//是否搜索
        searchAlign: "left",//查询框对齐方式
        searchOnEnterKey: false,//回车搜索
        searchTimeOut: 500,
        pagination: true,//设置为 true 会在表格底部显示分页条
        pageSize: 15,//单页记录数
        pageList: [10, 15, 20, 25, 30, 35, 40],//分页步进值
        height: tableHeight(),
        showRefresh: true,//刷新按钮
        uniqueId: "id",
        locale: "zh-CN",
        singleSelect: true,
        striped: true,
        columns: [
            [{
                title: "<span class='text-danger'>APP推送消息历史</span>",
                halign: "center",
                align: "center",
                colspan: 5
            }
            ],
            [
                {
                    title: "推送内容",
                    field: "content",
                    width: "30%",//宽度
                    align: "center",//水平
                    valign: "middle",//垂直
                },
                {
                    title: "跳转链接",
                    field: "url",
                    sortable: true,
                    width: "30%",//宽度
                    align: "center",//水平
                    valign: "middle"//垂直
                },
                {
                    title: "创建时间",
                    field: "createTime",
                    sortable: true,
                    width: "20%",//宽度
                    align: "center",//水平
                    valign: "middle"//垂直
                },
                {
                    title: "推送时间",
                    field: "pushTime",
                    sortable: true,
                    width: "20%",//宽度
                    align: "center",//水平
                    valign: "middle"//垂直
                }
            ]
        ],
        data: [{
            content: "安卓手机上用animation后做CSS属性过渡变化时border-radius属性自动从从圆角变成方角，在IOS上却不会",
            url: "https://segmentfault.com/",
            createTime:"2017-04-20 22:33:44",
            pushTime: "2017-04-20 22:33:44"
        },
            {
                content: "安卓手机上用animation后做CSS属性过渡变化时border-radius属性自动从从圆角变成方角，在IOS上却不会",
                url: "https://segmentfault.com/",
                createTime:"2017-04-20 22:33:44",
                pushTime: "2017-04-20 22:33:44"
            },
            {
                content: "安卓手机上用animation后做CSS属性过渡变化时border-radius属性自动从从圆角变成方角，在IOS上却不会",
                url: "https://segmentfault.com/",
                createTime:"2017-04-20 22:33:44",
                pushTime: "2017-04-20 22:33:44"
            }
        ]
    })
})

function tableHeight() {
    return $(window).height() - 400;
}

$('#addScrollBarItem').on('click', function(){
    var modal =
        '<div class="modal fade">\
          <div class="modal-dialog">\
           <div class="modal-content">\
            <div class="modal-header">\
                <button type="button" class="close" data-dismiss="modal">&times;</button>\
                <h4 class="blue">添加轮播</h4>\
            </div>\
            \
            <form class="no-margin">\
             <div class="modal-body">\
                <div class="space-4"></div>\
                <div style="width:75%;margin-left:12%;"><input type="file" name="file-input" /></div>\
                <div class="space-4"></div>\
                <div class="input-group" style="width:75%;margin-left:12%;">\
                    <span class="input-group-addon">跳转链接</span>\
                    <input type="text" class="form-control">\
                </div>\
             </div>\
            \
             <div class="modal-footer center">\
                <button type="submit" class="btn btn-sm btn-success"><i class="ace-icon fa fa-check"></i>提交</button>\
                <button type="button" class="btn btn-sm" data-dismiss="modal"><i class="ace-icon fa fa-times"></i>取消</button>\
             </div>\
            </form>\
          </div>\
         </div>\
        </div>';
    var modal = $(modal);
    modal.modal("show").on("hidden", function(){
        modal.remove();
    });
    var working = false;
    var form = modal.find('form:eq(0)');
    var file = form.find('input[type=file]').eq(0);
    file.ace_file_input({
        style:'well',
        btn_choose:'点击选择轮播图片',
        btn_change:null,
        no_icon:'ace-icon fa fa-picture-o',
        before_remove: function() {
            return !working;
        },
        allowExt: ['jpg', 'jpeg', 'png', 'gif'],
        allowMime: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']
    });
    form.on('submit', function(){
        if(!file.data('ace_input_files')) return false;
        var file_url = form.find('input[type=text]').eq(0);
        file.ace_file_input('disable');
        form.find('button').attr('disabled', 'disabled');
        form.find('.modal-body').append("<div class='center'><i class='ace-icon fa fa-spinner fa-spin bigger-150 orange'></i></div>");
        var deferred = new $.Deferred;
        working = true;
        deferred.done(function() {
            form.find('button').removeAttr('disabled');
            form.find('input[type=file]').ace_file_input('enable');
            form.find('.modal-body > :last-child').remove();
            modal.modal("hide");
            var thumb = file.next().find('img').data('thumb');
            var url = file_url.val();
            console.log(thumb);
            console.log(url);
            working = false;
        });
        deferred.resolve();
        return false;
    });
});