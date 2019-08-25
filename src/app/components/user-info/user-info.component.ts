import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

    /**
     * 输入的用户信息关键字
     */
    public inputUserValue:string;
    /**
     * 下拉列表
     */
    public selectUserArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public selectUserValue:string = this.selectUserArr[0].value;

    /**
     * 分页对象
     */
    public userPagination:any = {
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
    public userTableData:any[]=[{
        bh:100021,
        userName:'刘诗静',
        adminClassification:'系统管理员',
        employeeName:'衣念',
        departName:'业务部',
        createDate:'2014-03-07',
        accreditStatus:'正常',
    },{
        bh:100021,
        userName:'张丽丽',
        adminClassification:'业务管理员',
        employeeName:'刘诗诗',
        departName:'人事部',
        createDate:'2014-03-07',
        accreditStatus:'正常',
    }];
    public userTableCenter = 'all';

    constructor(private router:Router) { }

    ngOnInit() {
    }

    /**
     * 跳转到新增用户页面
     */
    toggleNewUser(){
        this.router.navigate(['/user-manage/new-user']);
    }

    /**
     * 跳转到用户授权页面
     */
    toggleUserAccredit(){
        this.router.navigate(['/user-manage/user-accredit']);
    }
    /**
     * 查询用户信息
     */
    searchUser(){

    }

    /**
     * 选中当前用户信息
     */
    selectUser(ref){
        console.log(ref.index);
    }

    /**
     * 编辑当前用户信息
     */
    toggleEditUserPage(ref){
        console.log(ref.index)   //拿到行号
        console.log(ref.rowData)  //拿到行数据对象
    }

    /**
     * 删除当前用户信息
     */
    deleteUser(ref){
        ref.destroy()  //销毁当前行dom
    }

    /**
     * 跳转到当前用户信息详情页面
     */
    toggleLookUserPage(ref){
        let navigationExtras: NavigationExtras = {
            queryParams: { 'detailId': ref.index },
            fragment: 'anchor'
        };
        this.router.navigate(['user-manage/user-detail'],navigationExtras);
    }
}
