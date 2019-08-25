import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-library-info',
    templateUrl: './library-info.component.html',
    styleUrls: ['./library-info.component.css']
})
export class LibraryInfoComponent implements OnInit {

    /**
     * 输入的资料信息关键字
     */
    public inputLibraryValue:string;
    /**
     * 下拉列表
     */
    public selectLibraryArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public selectLibraryValue:string = this.selectLibraryArr[0].value;

    /**
     * 分页对象
     */
    public libraryPagination:any = {
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
    public libraryTableData:any[]=[{
        bh:100021,
        libraryName:'博看移动APP',
        librarySpilt:'培训',
        publicPerson:'刘诗静',
        publicDate:'2014-03-07',
        updateDate:'2014-03-07',
        downloadCount:554,
    },{
        bh:100021,
        libraryName:'博看移动APP',
        librarySpilt:'培训',
        publicPerson:'刘诗静',
        publicDate:'2014-03-07',
        updateDate:'2014-03-07',
        downloadCount:554,
    }];
    public libraryTableCenter = 'all';

    constructor(private router:Router) { }

    ngOnInit() {
    }

    /**
     * 跳转到新增资料页面
     */
    toggleNewLibrary(){
        this.router.navigate(['/library-manage/new-library']);
    }

    /**
     * 查询资料信息
     */
    searchLibrary(){

    }

    /**
     * 选中当前资料信息
     */
    selectLibrary(ref){
        console.log(ref.index);
    }

    /**
     * 编辑当前资料信息
     */
    toggleEditLibraryPage(ref){

    }

    /**
     * 删除当前资料信息
     */
    deleteLibrary(ref){

    }

    /**
     * 跳转到当前资料信息详情页面
     */
    toggleLookLibraryPage(ref){
        let navigationExtras: NavigationExtras = {
            queryParams: { 'detailId': ref.index },
            fragment: 'anchor'
        };
        this.router.navigate(['library-manage/library-detail'],navigationExtras);
    }
}
