import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

    /**
     * 部门名称
     */
    public departNameArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public departName:string = this.departNameArr[0].value;
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

    constructor() { }

    ngOnInit() {
    }

    /**
     * 查询用户
     */
    searchUser(){

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
