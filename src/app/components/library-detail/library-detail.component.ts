import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-library-detail',
    templateUrl: './library-detail.component.html',
    styleUrls: ['./library-detail.component.css']
})
export class LibraryDetailComponent implements OnInit {

    /**
     * 详情页编号
     */
    public detailId:number;
    /**
     * 资料名称、资料分类、文件类型、上传文件、备注、发布者
     */
    public libraryName:string;
    public librarySplit:string;
    public fileType:number;
    public uploadFile:string;
    public bz:string;
    public publicPerson:string;

    constructor(private route:ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(data=>{
            console.log(data)
            this.detailId = data.detailId;
        });
    }

}
