import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-employee',
    templateUrl: './new-employee.component.html',
    styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

    /**
     * 部门
     */
    public bmArr:any = [
        { value: '', label: '请选择部门名称' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public bm:string = this.bmArr[0].value;
    /**
     * 职位级别
     */
    public zwjbArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public zwjb:string = this.zwjbArr[0].value;
    /**
     * 职务类别
     */
    public zwlbArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public zwlb:string = this.zwlbArr[0].value;
    /**
     * 员工状态
     */
    public ygztArr:any = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public ygzt:string = this.ygztArr[0].value;
    /**
     * 分配状态
     */
    public fpztArr:any = [
        { value: '选项1', label: '已分配' },
        { value: '选项2', label: '未分配' },
    ];
    public fpzt:string = this.fpztArr[0].value;

    constructor() { }

    ngOnInit() {
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
