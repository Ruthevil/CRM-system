import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';

@Component({
    selector: 'app-left-aside',
    templateUrl: './left-aside.component.html',
    styleUrls: ['./left-aside.component.css']
})
export class LeftAsideComponent implements OnInit {

    /**
     * 菜单列表
     */
    public currentIndex:string = '1';
    public menuArr:any = [
        {
            index: '1',
            iClass: 'fa fa-home',
            name: '首页',
            routerLinker: '/home',
            subMenu: [],
        },{
            index: '2',
            iClass: 'fa fa-users',
            name: '机构管理',
            subMenu: [
                {
                    index: '2-1',
                    iClass: 'fa fa-chevron-right',
                    name: '信息管理',
                    routerLinker: '/info-manage',
                },{
                    index: '2-2',
                    iClass: 'fa fa-chevron-right',
                    name: '商机管理',
                    routerLinker: '/business-manage',
                },{
                    index: '2-3',
                    iClass: 'fa fa-chevron-right',
                    name: '产品管理',
                    routerLinker: '/product-manage',
                },{
                    index: '2-4',
                    iClass: 'fa fa-chevron-right',
                    name: '合同管理',
                    routerLinker: '/contract-manage',
                },{
                    index: '2-5',
                    iClass: 'fa fa-chevron-right',
                    name: '日志管理',
                    routerLinker: '/log-manage',
                },{
                    index: '2-6',
                    iClass: 'fa fa-chevron-right',
                    name: '预约管理',
                    routerLinker: '/order-manage',
                },{
                    index: '2-7',
                    iClass: 'fa fa-chevron-right',
                    name: '售后日志',
                    routerLinker: '/after-sale-log',
                },{
                    index: '2-8',
                    iClass: 'fa fa-chevron-right',
                    name: '任务清单',
                    routerLinker: '/task-list',
                }
            ],
        },
        {
            index: '3',
            iClass: 'fa fa-user',
            name: '员工管理',
            routerLinker: '/employee-manage',
            subMenu: [],
        },
        {
            index: '4',
            iClass: 'fa fa-folder-open',
            name: '资料库管理',
            routerLinker: '/library-manage',
            subMenu: [],
        },
        {
            index: '5',
            iClass: 'fa fa-joomla',
            name: '系统对接管理',
            routerLinker: '/system-docking-manage',
            subMenu: [],
        },
        {
            index: '6',
            iClass: 'fa fa-signal',
            name: '统计分析',
            routerLinker: '/statistical-analysis',
            subMenu: [],
        },{
            index: '7',
            iClass: 'fa fa-group',
            name: '用户管理',
            routerLinker: '/user-manage',
            subMenu: [],
        },{
            index: '8',
            iClass: 'fa fa-cogs',
            name: '系统配置',
            routerLinker: '/system-config',
            subMenu: [],
        },{
            index: '9',
            iClass: 'fa fa-edit',
            name: '系统日志',
            routerLinker: '/system-log',
            subMenu: [],
        }
    ];

    constructor(private router:Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd){
                if (router.url) {
                    let url = router.url.split('?')[0] || router.url.split('#')[0];
                    switch (url) {
                        case '/home': this.currentIndex = '1'; break;
                        case '/info-manage': this.currentIndex = '2-1'; break;
                        case '/business-manage': this.currentIndex = '2-2'; break;
                        case '/product-manage': this.currentIndex = '2-3'; break;
                        case '/contract-manage': this.currentIndex = '2-4'; break;
                        case '/log-manage': this.currentIndex = '2-5'; break;
                        case '/order-manage': this.currentIndex = '2-6'; break;
                        case '/after-sale-log': this.currentIndex = '2-7'; break;
                        case '/task-list': this.currentIndex = '2-8'; break;
                        case '/employee-manage': this.currentIndex = '3'; break;
                        case '/library-manage': this.currentIndex = '4'; break;
                        case '/system-docking-manage': this.currentIndex = '5'; break;
                        case '/statistical-analysis': this.currentIndex = '6'; break;
                        case '/user-manage': this.currentIndex = '7'; break;
                        case '/system-config': this.currentIndex = '8'; break;
                        case '/system-log': this.currentIndex = '9'; break;
                        default: break;
                    }
                }
            }
        });
    }

    ngOnInit() {
    }

}
