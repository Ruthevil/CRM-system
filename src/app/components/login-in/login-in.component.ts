import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ElMessageService,ElNotificationService  } from 'element-angular'
import { GlobalService } from 'src/services/common/global.service';
import { SystemService } from "src/services/system.service";

@Component({
    selector: 'app-login-in',
    templateUrl: './login-in.component.html',
    styleUrls: ['./login-in.component.css'],
    providers:[
        SystemService
    ]
})
export class LoginInComponent implements OnInit {

    public username:string;
    public password:string;

    constructor(private router:Router,
                private message:ElMessageService,
                private notify:ElNotificationService,
                private globalService:GlobalService,
                private systemService:SystemService) {
    }

    ngOnInit() {
    }

    /**
     * 获取用户名
     */
    getUsername($event){
        this.username = $event.target.value;
    }

    /**
     * 获取密码
     */
    getPassword($event){
        this.password = $event.target.value;
    }

    /**
     * 登录
     */
    async handleLogin(){
        if(!this.username){
            this.message.setOptions({ showClose: true });
            this.message.error('用户名不能为空！');
            return;
        }
        if(!this.password){
            this.message.setOptions({ showClose: true });
            this.message.error('密码不能为空！');
            return;
        }
        /**
         * 密码加密，向后台发起请求，成功则设置login=true并页面跳转
         */
        let params = {
            username: this.username,
            password: this.password
        };
        this.systemService.login(params).subscribe(res=>{
            if (res && res['success']){
                this.globalService.setLoginFlag(true);
                this.router.navigate(['home'],{});
            }else{
                this.notify.setOptions({});
                this.notify.error('用户名不能为空！','错误提示');
            }
        });
    }
}
