import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/services/common/global.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    /**
     * 接收父组件传递的数据
     */
    @Input() loginFlag:string;

    /**
     * 用户下拉列表
     */
    private userDropData: any[] = [{
        value: 'loginOut',
        label: '退出登录',
    }];
    constructor(private router:Router,
                private globalService: GlobalService) { }

    ngOnInit() {
    }

    /**
     * 打开用户授权息页面
     */
    openUserRightsPage(){
        this.router.navigate(['user-manage/user-accredit'],{
            queryParams: { 'detailId': '' },
            fragment: 'anchor'
        });
    }

    /**
     * 打开用户管理页面
     */
    openUserManagePage(){
        this.router.navigate(['user-manage'],{
            queryParams: { 'detailId': '' },
            fragment: 'anchor'
        });
    }

    /**
     * 打开系统日志页面
     */
    openSystemLogPage(){
        this.router.navigate(['system-log'],{
            queryParams: { 'detailId': '' },
            fragment: 'anchor'
        });
    }

    /**
     * 打开系统信息页面
     */
    openSystemInfoPage(){
        this.router.navigate(['system-info'],{
            queryParams: { 'detailId': '' },
            fragment: 'anchor'
        });
    }

    /**
     * 获取用户选择
     */
    getSelect(event){
        if (event.value === 'loginOut'){
            this.globalService.setLoginFlag(false);
            this.router.navigate(['login-in'],{});
        }
    }

}
