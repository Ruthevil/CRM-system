import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-employee-detail',
    templateUrl: './employee-detail.component.html',
    styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

    /**
     * 详情页编号
     */
    public detailId:number;
    /**
     * 部门、员工姓名、员工工号、岗位名称、岗位职责、性别、工作电话、手机号码、邮箱、工作QQ、短号、职位级别、职务类别、员工状态、
     * 职位状态、商机客户、分配状态、备注
     */
    public bm:string;
    public ygxm:string;
    public yggh:number;
    public gwmc:string;
    public gwzz:string;
    public sex:string;
    public gzdh:number;
    public sjhm:number;
    public email:string;
    public gzqq:number;
    public dh:number;
    public zwjb:string;
    public zwlb:string;
    public ygzt:string;
    public zwzt:string;
    public sjkh:number;
    public fpzt:string;
    public fpCount:number;
    public bz:string;

    constructor(private route:ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(data=>{
            console.log(data)
            this.detailId = data.detailId;
        });
    }

}
