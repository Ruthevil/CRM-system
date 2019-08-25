import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-system-docking-manage',
    templateUrl: './system-docking-manage.component.html',
    styleUrls: ['./system-docking-manage.component.css']
})
export class SystemDockingManageComponent implements OnInit {

    /**
     * 任务系统查询区域
     */
    public taskAreaArr:any = [{
        label:'全部',
        value:'all'
    },{
        label:'A区',
        value:'A'
    }];

    /**
     * 实施系统查询区域
     */
    public doneAreaArr:any = [{
        label:'全部',
        value:'all'
    },{
        label:'A区',
        value:'A'
    }];

    /**
     * 资源OA系统查询区域
     */
    public oaAreaArr:any = [{
        label:'全部',
        value:'all'
    },{
        label:'A区',
        value:'A'
    }];
    constructor() { }

    ngOnInit() {
    }

}
