import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-contract-info-page',
    templateUrl: './contract-info-page.component.html',
    styleUrls: ['./contract-info-page.component.css']
})
export class ContractInfoPageComponent implements OnInit {

    /**
     * 输入的信息机构关键字
     */
    public inputContractValue:string;
    /**
     * 下拉列表
     */
    public selectContractArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭' }
    ];
    public selectContractValue:string = this.selectContractArr[0].value;

    /**
     * 分页对象
     */
    public contractPagination:any = {
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
    public contractTableData:any[]=[{
        bh:100021,
        jgmc:'山东工业职业学院图书馆',
        xm:'叶明',
        xb:'男',
        zw:'馆长',
        sj:'18778986758',
        bgdh:'0898-313508831',
        zydj:'一般',
        gjzt:'有效'
    },{
        bh:100021,
        jgmc:'山东工业职业学院图书馆',
        xm:'米娜',
        xb:'女',
        zw:'老师',
        sj:'15676894568',
        bgdh:'0898-353407768',
        zydj:'重要',
        gjzt:'未处理'
    }];
    public contractTableCenter = 'all';

    constructor(private router:Router) { }

    ngOnInit() {
    }

    /**
     * 跳转到新增联系人页面
     */
    toggleNewContractPage(){
        this.router.navigate(['/info-manage/new-contract-page']);
    }

    /**
     * 跳转到机构信息列表页面
     */
    toggleOrganizationPage(){
        this.router.navigate(['/info-manage/organization-info-page']);
    }

    /**
     * 查询联系人
     */
    searchContract(){

    }

    /**
     * 选中当前联系人
     */
    selectContract(ref){
        console.log(ref.index);
    }

    /**
     * 编辑当前联系人
     */
    toggleEditContractPage(ref){

    }

    /**
     * 删除当前联系人
     */
    deleteContract(ref){

    }

    /**
     * 跳转到当前联系人详情页面
     */
    toggleLookContractPage(num){
        console.log(num)//如何才能拿到当前行的编号呢？？？？
        let navigationExtras: NavigationExtras = {
            queryParams: { 'detailId': num },
            fragment: 'anchor'
        };
        this.router.navigate(['/info-manage/contract-detail-page'],navigationExtras);
    }

}
