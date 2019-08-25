import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-organization-page',
    templateUrl: './new-organization-page.component.html',
    styleUrls: ['./new-organization-page.component.css']
})
export class NewOrganizationPageComponent implements OnInit {

    /**
     * 机构级别
     */
    public jgjbArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public jgjb:string = this.jgjbArr[0].value;
    /**
     * 行业类别
     */
    public hylbArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public hylb:string = this.hylbArr[0].value;
    /**
     * 重要级别
     */
    public zyjbArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public zyjb:string = this.zyjbArr[0].value;
    /**
     * 单位等级
     */
    public dwdjArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public dwdj:string = this.dwdjArr[0].value;
    /**
     * 区域等级
     */
    public qudjArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public qydj:string = this.qudjArr[0].value;
    /**
     * 采购级别
     */
    public cgjbArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public cgjb:string = this.cgjbArr[0].value;
    /**
     * 采购方式
     */
    public cgfsArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public cgfs:string = this.cgfsArr[0].value;
    /**
     * 采购途径
     */
    public cgtjArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public cgtj:string = this.cgtjArr[0].value;
    /**
     * 分配情况
     */
    public fpqkArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public fpqk:string = this.fpqkArr[0].value;
    /**
     * 审核状态
     */
    public shztArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public shzt:string = this.shztArr[0].value;
    /**
     * 机构类型
     */
    public jglxArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public jglx:string = this.jglxArr[0].value;
    /**
     * 跟进状态
     */
    public newOrganization_gjztArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public newOrganization_gjzt:string = this.newOrganization_gjztArr[0].value;

    constructor() { }

    ngOnInit() {
    }

    /**
     * 确定创建当前机构
     */
    submit(){

    }

    /**
     * 取消创建当前机构
     */
    cancel(){

    }
}
