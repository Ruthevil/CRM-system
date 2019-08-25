import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-system-log',
    templateUrl: './system-log.component.html',
    styleUrls: ['./system-log.component.css']
})
export class SystemLogComponent implements OnInit {

    /**
     * 输入的日志信息关键字
     */
    public inputLogValue:string;
    /**
     * 下拉列表
     */
    public selectLogArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public selectLogValue:string = this.selectLogArr[0].value;

    /**
     * 分页对象
     */
    public logPagination:any = {
        totalCount: 100,
        currentPage: 2,
        pageSize: 20,
        pageCount: 5,
        pageSizes: [10,20,30,40,50,100],
        layOut: ['prev', 'pager', 'next', 'jumper', 'size', 'total']
    };

    /**
     * 表格
     */
    public logTableData:any[]=[{
        bh:100021,
        userName:'刘诗静',
        employeeName:'徐东升',
        departName:'市场部',
        moduleName:'人员聚集',
        loginIP:'192.192.6.23',
        loginTime:'2019-02-11 12:20:23',
        function:'创建',
        operateTime:'2019-02-11 12:20:23',
        operateStatus:'进行中',
        terminalName:'PC端',
        logoutTime:'2019-02-11 13:20:23'
    },{
        bh:100021,
        userName:'张丽丽',
        employeeName:'徐东升',
        departName:'市场部',
        moduleName:'人员聚集',
        loginIP:'192.192.6.23',
        loginTime:'2019-02-11 12:20:23',
        function:'创建',
        operateTime:'2019-02-11 12:20:23',
        operateStatus:'失败',
        terminalName:'PC端',
        logoutTime:'2019-02-11 13:20:23'
    }];
    public logTableCenter = 'all';

    constructor() { }

    ngOnInit() {
    }

    /**
     * 查询日志信息
     */
    searchLog(){

    }

    /**
     * 选中当前日志信息
     */
    selectLog(ref){
        console.log(ref.index);
    }

}
