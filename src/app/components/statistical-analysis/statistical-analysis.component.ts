import { Component, OnInit } from '@angular/core';
import { graphic } from 'echarts';

@Component({
    selector: 'app-statistical-analysis',
    templateUrl: './statistical-analysis.component.html',
    styleUrls: ['./statistical-analysis.component.css']
})
export class StatisticalAnalysisComponent implements OnInit {

    public tableData:any[]=[{
        month:9,
        jgCount:539,
        sjCount:355,
        htCount:655,
        rzCount:655,
        rwCount:232
    },{
        month:8,
        jgCount:539,
        sjCount:355,
        htCount:655,
        rzCount:655,
        rwCount:232
    },{
        month:7,
        jgCount:539,
        sjCount:355,
        htCount:655,
        rzCount:655,
        rwCount:232
    },{
        month:6,
        jgCount:539,
        sjCount:355,
        htCount:655,
        rzCount:655,
        rwCount:232
    },{
        month:5,
        jgCount:539,
        sjCount:355,
        htCount:655,
        rzCount:655,
        rwCount:232
    },{
        month:4,
        jgCount:539,
        sjCount:355,
        htCount:655,
        rzCount:655,
        rwCount:232
    },{
        month:3,
        jgCount:539,
        sjCount:355,
        htCount:655,
        rzCount:655,
        rwCount:232
    },{
        month:2,
        jgCount:539,
        sjCount:355,
        htCount:655,
        rzCount:655,
        rwCount:232
    },{
        month:1,
        jgCount:539,
        sjCount:355,
        htCount:655,
        rzCount:655,
        rwCount:232
    }];
    public tableCenter = 'all';

    public dataTypeArr = [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];

    public showLoading:boolean = true;
    public data = [95,245,150,180,270];

    public linkOption = {
        title: {
            text: '业务数据统计',
        },
        legend: {
            data:['机构数量','商机数量','合同数量','日志数量','任务数量'],
        },
        xAxis: {
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitNumber: 5,
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
        },
        series: [
            {
                type: 'bar',
                barWidth: '30',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'black',
                                fontSize: 16
                            }
                        },
                        color: function (params){
                            let colorList = ['#f54882','#47d1de','#8058bd','#ffd84f','#008654'];
                            return colorList[params.dataIndex];
                        }
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }
                },
                data: this.data,
            }
        ]
    };

    constructor() {
        setTimeout(()=> {
            this.showLoading = false;
        }, 1000);
    }

    ngOnInit() {

    }

}
