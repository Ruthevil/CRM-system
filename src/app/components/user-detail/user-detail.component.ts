import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

    /**
     * 详情页编号
     */
    public detailId:number;
    /**
     * 用户名、密码、管理员分类、部门名称、员工姓名、职位名称、职务类别、授权状态、
     */
    public userName:string;
    public password:string;
    public adminClassification:string;
    public departName:string;
    public employeeName:string;
    public jobName:string;
    public jobCategory:string;
    public accreditStatus:string;

    constructor(private route:ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(data=>{
            console.log(data)
            this.detailId = data.detailId;
        });
    }

}
