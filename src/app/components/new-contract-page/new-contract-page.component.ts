import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-contract-page',
    templateUrl: './new-contract-page.component.html',
    styleUrls: ['./new-contract-page.component.css']
})
export class NewContractPageComponent implements OnInit {

    /**
     * 重要等级
     */
    public zydjArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public zydj:string = this.zydjArr[0].value;
    /**
     * 跟进状态
     */
    public newContract_gjztArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public newContract_gjzt:string = this.newContract_gjztArr[0].value;

    constructor() { }

    ngOnInit() {
    }

    /**
     * 确定创建当前联系人
     */
    submit(){

    }

    /**
     * 取消创建当前联系人
     */
    cancel(){

    }

}
