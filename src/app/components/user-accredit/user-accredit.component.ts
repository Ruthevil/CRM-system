import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-accredit',
    templateUrl: './user-accredit.component.html',
    styleUrls: ['./user-accredit.component.css']
})
export class UserAccreditComponent implements OnInit {

    /**
     * 管理员分类
     */
    public adminCategoryArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public adminCategory:string = this.adminCategoryArr[0].value;

    /**
     * 职务类别
     */
    public jobCategoryArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public jobCategory:string = this.jobCategoryArr[0].value;

    /**
     * 授权状态
     */
    public authorityStatusArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public authorityStatus:string = this.authorityStatusArr[0].value;

    /**
     * 授权列表
     */
    public authorityList:any = [
        { value: '机构管理', label: '机构管理' },
        { value: '信息管理', label: '信息管理' },
        { value: '商机管理', label: '商机管理' },
        { value: '日志管理', label: '日志管理' },
        { value: '产品管理', label: '产品管理'},
        { value: '合同管理', label: '合同管理'},
        { value: '预约管理', label: '预约管理'},
        { value: '售后日志', label: '售后日志'},
        { value: '任务清单', label: '任务清单'},
        { value: '员工管理', label: '员工管理'},
        { value: '资料库管理', label: '资料库管理'},
        { value: '统计分析', label: '统计分析'},
        { value: '系统对接管理', label: '系统对接管理'},
        { value: '权限管理', label: '权限管理'},
        { value: '系统配置', label: '系统配置'},
        { value: '用户管理', label: '用户管理'},
        { value: '系统日志', label: '系统日志'},
    ];
    public authorityAllSelect:boolean = false;

    /**
     * 授权列表
     */
    public functionList:any = [
        { value: '创建', label: '创建' },
        { value: '编辑', label: '编辑' },
        { value: '删除', label: '删除' },
        { value: '查看', label: '查看' },
        { value: '搜索', label: '搜索'},
        { value: '授权', label: '授权'},
    ];
    public functionAllSelect:boolean = false;

    constructor() { }

    ngOnInit() {
    }

    /**
     * 获取当前选中的权限列表
     */
    selectAuthority($event){
        console.log($event)
    }

    /**
     * 获取当前选中的功能列表
     */
    selectFunction($event){
        console.log($event)
    }

    /**
     * 查询员工
     */
    searchEmployee(){

    }

    /**
     * 确定创建当前员工
     */
    submit(){

    }

    /**
     * 取消创建当前员工
     */
    cancel(){

    }
}
