import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-system-log-detail',
    templateUrl: './system-info.component.html',
    styleUrls: ['./system-info.component.css']
})
export class SystemInfoComponent implements OnInit {

    /**
     * 详情页编号
     */
    public detailId:number;

    /**
     * 分页对象
     */
    public logDetailPagination:any = {
        totalCount: 100,
        currentPage: 2,
        pageSize: 20,
        pageCount: 5,
        pageSizes: [10,20,30,40,50,100],
        layOut: ['prev', 'pager', 'next', 'jumper', 'size', 'total']
    };

    /**
     * 日志列表
     */
    public logDetailList:any = [
        {
            title:'系统消息内容',
            time:'2016-09-20',
            bodyTitle:'【版本更新】述廉管理后台1.3版',
            content:'今年2月，自国家卫生健康委员会发布《关于开展“互联网+护理服务”试点工作的通知》及试点方案以来，北京、上海、江苏、浙江等试点地区医疗机构通过“线上申请、线下服务”的方式开展试点。',
        },{
            title:'系统消息内容',
            time:'2016-09-20',
            bodyTitle:'【版本更新】述廉管理后台1.3版',
            content:'今年2月，自国家卫生健康委员会发布《关于开展“互联网+护理服务”试点工作的通知》及试点方案以来，北京、上海、江苏、浙江等试点地区医疗机构通过“线上申请、线下服务”的方式开展试点。',
        },
    ];

    constructor() { }

    ngOnInit() {
    }

}
