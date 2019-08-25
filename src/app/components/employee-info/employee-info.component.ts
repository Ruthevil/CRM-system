import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-employee-info',
    templateUrl: './employee-info.component.html',
    styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

    /**
     * 输入的员工信息关键字
     */
    public inputEmployeeValue:string;
    /**
     * 下拉列表
     */
    public selectEmployeeArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public selectEmployeeValue:string = this.selectEmployeeArr[0].value;

    /**
     * 分页对象
     */
    public employeePagination:any = {
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
    public employeeTableData:any[]=[{
        bh:100021,
        ygxm:'刘诗静',
        bm:'资源部',
        yggh:554,
        gzdh:18089786547,
        sjhm:13565475687,
        cjrq:'2014-03-07',
        zt:'正常',
        fbzt:'未分配'
    },{
        bh:100021,
        ygxm:'张丽丽',
        bm:'业务部',
        yggh:520,
        gzdh:18089786547,
        sjhm:13565475687,
        cjrq:'2014-03-07',
        zt:'异常',
        fbzt:'未分配'
    }];
    public employeeTableCenter = 'all';

    constructor(private router:Router) { }

    ngOnInit() {
    }

    /**
     * 跳转到新增员工页面
     */
    toggleNewEmployee(){
        this.router.navigate(['/employee-manage/new-employee']);
    }

    /**
     * 跳转到分包管理页面
     */
    toggleSubcontractManage(){
        this.router.navigate(['/employee-manage/subcontract-manage']);
    }
    /**
     * 查询员工信息
     */
    searchEmployee(){

    }

    /**
     * 选中当前员工信息
     */
    selectEmployee(ref){
        console.log(ref.index);
    }

    /**
     * 编辑当前员工信息
     */
    toggleEditEmployeePage(ref){

    }

    /**
     * 删除当前员工信息
     */
    deleteEmployee(ref){

    }

    /**
     * 跳转到当前员工信息详情页面
     */
    toggleLookEmployeePage(num){
        console.log(num)//如何才能拿到当前行的编号呢？？？？
        let navigationExtras: NavigationExtras = {
            queryParams: { 'detailId': num },
            fragment: 'anchor'
        };
        this.router.navigate(['employee-manage/employee-detail'],navigationExtras);
    }
}
