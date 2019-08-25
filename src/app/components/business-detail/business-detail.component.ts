import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-business-detail',
    templateUrl: './business-detail.component.html',
    styleUrls: ['./business-detail.component.css']
})
export class BusinessDetailComponent implements OnInit {

    /**
     * 详情页编号
     */
    public detailId:number;
    /**
     * 机构名称、机构地址、联系人、手机、电话、国家、省份、城市、
     * 邮箱、网站、机构级别、行业类别、重要级别、单位等级、区域等级、
     * 经办人、年费、电子资源经费、采购时间、采购级别、采购方式、
     * 采购途径、分配情况、商机状态、备注信息、合同信息、产品信息
     */
    public organizationName:string;
    public organizationAddress:string;
    public lxr:string;
    public count:number;
    public msisdn:string;
    public telephone:string;
    public gj:string;
    public sf:string;
    public city:string;
    public email:string;
    public wz:string;
    public jgjb:string;
    public hylb:string;
    public zyjb:string;
    public dwdj:string;
    public qydj:string;
    public jbr:string;
    public nf:string;
    public dzzyjf:string;
    public cgsj:string;
    public cgjb:string;
    public cgfs:string;
    public cgtj:string;
    public fpqk:string;
    public sjzt:string;
    public bzxx:string;
    public htxx:string;
    public cpxx:string;

    constructor(private route:ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(data=>{
            this.detailId = data.detailId;
        })
    }

}
