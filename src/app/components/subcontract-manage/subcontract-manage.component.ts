import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-subcontract-manage',
    templateUrl: './subcontract-manage.component.html',
    styleUrls: ['./subcontract-manage.component.css']
})
export class SubcontractManageComponent implements OnInit {

    /**
     * 输入的分包信息关键字
     */
    public inputSubcontractValue:string;
    /**
     * 下拉列表
     */
    public selectSubcontractArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public selectSubcontractValue:string = this.selectSubcontractArr[0].value;

    /**
     * 分页对象
     */
    public subcontractPagination:any = {
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
    public subcontractTableData:any[]=[{
        bh1:100021,
        bh2:98,
        jgmc:'福建大学图书馆',
        sfs:'福建省',
        jglx:'高校',
        jgjb:'高职高专',
        fpzt:'未分配'
    },{
        bh1:100021,
        bh2:100,
        jgmc:'北京市图书馆',
        sfs:'北京市',
        jglx:'公图',
        jgjb:'市图书馆',
        fpzt:'未分配'
    }];
    public subcontractTableCenter = 'all';

    constructor() { }

    ngOnInit() {
    }

    /**
     * 跳转到分配机构页面
     */
    toggleDistributeManage(){

    }

    /**
     * 查询分包
     */
    searchSubcontract(){

    }

    /**
     * 选择当前分包信息
     */
    selectSubcontract(){

    }

    /**
     * 分配当前分包
     */
    distributeOrganization(){

    }
}
