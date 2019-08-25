import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-business-info',
    templateUrl: './business-info.component.html',
    styleUrls: ['./business-info.component.css']
})
export class BusinessInfoComponent implements OnInit {

    /**
     * 输入的信息商机关键字
     */
    public inputBusinessValue:string;
    /**
     * 下拉列表
     */
    public selectBusinessArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public selectBusinessValue:string = this.selectBusinessArr[0].value;

    /**
     * 分页对象
     */
    public businessPagination:any = {
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
    public businessTableData:any[]=[{
        bh:100021,
        jgmc:'山东工业职业学院图书馆',
        jgjb:'学校',
        jdzt:'谈判合同',
        gjzt:'成交',
        jbr:'向敏',
        lxr:'文琴',
        shzt:'已审核',
    },{
        bh:100021,
        jgmc:'山东工业职业学院图书馆',
        jgjb:'学校',
        jdzt:'需求确定',
        gjzt:'报价',
        jbr:'向敏',
        lxr:'文琴',
        shzt:'已审核',
    }];
    public businessTableCenter = 'all';

    constructor(private router:Router) { }

    ngOnInit() {
    }
    /**
     * 跳转到新增商机页面
     */
    toggleNewBusiness(){
        this.router.navigate(['/business-manage/new-business']);
    }

    /**
     * 查询商机信息
     */
    searchBusiness(){

    }

    /**
     * 选中当前商机信息
     */
    selectBusiness(ref){
        console.log(ref.index);
    }

    /**
     * 编辑当前商机信息
     */
    toggleEditBusinessPage(ref){

    }

    /**
     * 删除当前商机信息
     */
    deleteBusiness(ref){

    }

    /**
     * 跳转到当前商机信息详情页面
     */
    toggleLookBusinessPage(ref){
        let navigationExtras: NavigationExtras = {
            queryParams: { 'detailId': ref.index },
            fragment: 'anchor'
        };
        this.router.navigate(['/business-manage/business-detail'],navigationExtras);
    }
}
