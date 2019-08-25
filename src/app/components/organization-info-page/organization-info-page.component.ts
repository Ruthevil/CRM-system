import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-organization-info-page',
    templateUrl: './organization-info-page.component.html',
    styleUrls: ['./organization-info-page.component.css']
})
export class OrganizationInfoPageComponent implements OnInit {

    /**
     * 输入的信息机构关键字
     */
    public inputOrganizationValue:string;
    /**
     * 下拉列表
     */
    public selectOrganizationArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public selectOrganizationValue:string = this.selectOrganizationArr[0].value;

    /**
     * 分页对象
     */
    public organizationPagination:any = {
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
    public organizationTableData:any[]=[{
        bh:100021,
        jgmc:'山东工业职业学院图书馆',
        jgjb:'学校',
        sfs:'山东',
        jbr:'向敏',
        lxr:'文琴',
        shzt:'已审核',
    },{
        bh:100021,
        jgmc:'山东工业职业学院图书馆',
        jgjb:'学校',
        sfs:'山东',
        jbr:'向敏',
        lxr:'文琴',
        shzt:'已审核',
    }];
    public organizationTableCenter = 'all';

    constructor(private router:Router) { }

    ngOnInit() {
    }

    /**
     * 跳转到新增机构页面
     */
    toggleNewOrganization(){
        this.router.navigate(['/info-manage/new-organization-page']);
    }

    /**
     * 跳转到联系人页面
     */
    toggleContractInfo(){
        this.router.navigate(['/info-manage/contract-info-page']);
    }
    /**
     * 查询机构信息
     */
    searchOrganization(){

    }

    /**
     * 选中当前机构信息
     */
    selectOrganization(ref){
        console.log(ref.index);
    }

    /**
     * 编辑当前机构信息
     */
    toggleEditOrganizationPage(ref){

    }

    /**
     * 删除当前机构信息
     */
    deleteOrganization(ref){

    }

    /**
     * 跳转到当前机构信息详情页面
     */
    toggleLookOrganizationPage(ref){
        let navigationExtras: NavigationExtras = {
            queryParams: { 'detailId': ref.index },
            fragment: 'anchor'
        };
        this.router.navigate(['/info-manage/organization-detail-page'],navigationExtras);
    }

}
