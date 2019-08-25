import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-contract-detail-page',
    templateUrl: './contract-detail-page.component.html',
    styleUrls: ['./contract-detail-page.component.css']
})
export class ContractDetailPageComponent implements OnInit {

    /**
     * 详情页编号
     */
    public detailId:number;
    /**
     * 机构名称、姓名、性别、职务、手机、电话、传真、邮箱、QQ、微信、地址、重要等级、跟进状态、经办人、是否认同、认可理由、信息来源、备注
     */
    public organizationName:string;
    public name:string;
    public sex:string;
    public zw:string;
    public msisdn:string;
    public telephone:string;
    public cz:string;
    public email:string;
    public qq:string;
    public weChat:string;
    public address:string;
    public zydj:string;
    public gjzt:string;
    public jbr:string;
    public sfrt:string;
    public rkly:string;
    public xxly:string;
    public bz:string;

    constructor(private route:ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(data=>{
            console.log(data)
            this.detailId = data.detailId;
        });
    }

}
