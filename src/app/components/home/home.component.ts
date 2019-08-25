import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public totalCount:any[]=[{
        icon:'fa fa-edit',
        name:'机构数量',
        num:20048,
    },{
        icon:'fa fa-edit',
        name:'员工数量',
        num:2000,
    },{
        icon:'fa fa-edit',
        name:'合同数量',
        num:20050,
    },{
        icon:'fa fa-edit',
        name:'日志数量',
        num:20048,
    },{
        icon:'fa fa-edit',
        name:'任务数量',
        num:20040,
    },{
        icon:'fa fa-edit',
        name:'售后数量',
        num:20040,
    }];

    public todayCount:any[]=[{
        icon:'fa fa-edit',
        name:'今日新增机构',
        num:200,
    },{
        icon:'fa fa-edit',
        name:'今日新增预约',
        num:210,
    },{
        icon:'fa fa-edit',
        name:'今日新增日志',
        num:220,
    },{
        icon:'fa fa-edit',
        name:'今日新增合同',
        num:230,
    },{
        icon:'fa fa-edit',
        name:'今日新增商机',
        num:240,
    },{
        icon:'fa fa-edit',
        name:'今日新增售后',
        num:240,
    }];

    public totalToDoList:any[]=[{
        icon:'fa fa-edit',
        name:'总的任务',
        num:150,
    },{
        icon:'fa fa-edit',
        name:'总的商机',
        num:580,
    },{
        icon:'fa fa-edit',
        name:'总的预约',
        num:280,
    },{
        icon:'fa fa-edit',
        name:'总的产品',
        num:360,
    },{
        icon:'fa fa-edit',
        name:'总的合同',
        num:300,
    },{
        icon:'fa fa-edit',
        name:'总的售后',
        num:300,
    }];

    public todayToDoList:any[]=[{
        icon:'fa fa-edit',
        typeName:'任务',
        type:'条',
        totalCount:156,
        typeList:[{
            name:'资源部',
            num:30
        },{
            name:'实施部',
            num:30
        },{
            name:'制作部',
            num:30
        },{
            name:'技术部',
            num:30
        },]
    },{
        icon:'fa fa-edit',
        typeName:'资料库',
        type:'种',
        totalCount:120,
        typeList:[{
            name:'培训资料',
            num:30
        },{
            name:'产品资料',
            num:100
        },{
            name:'FAQ资料',
            num:70
        }]
    },{
        icon:'fa fa-edit',
        typeName:'开通产品',
        type:'个',
        totalCount:80,
        typeList:[{
            name:'触摸屏',
            num:30
        },{
            name:'专区',
            num:30
        },{
            name:'APP',
            num:10
        },{
            name:'微刊',
            num:10
        }]
    }];

    constructor() {

    }

    ngOnInit() {
    }

}
