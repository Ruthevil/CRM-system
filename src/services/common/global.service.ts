/**
 * GlobalService是一个用来发布订阅共享数据的服务，实现多方监听 subscribe()，一方发布 next()
 * 说明：
 *      RxJS Subject 是一种特殊类型的 Observable，它允许将值多播给多个观察者
 * 使用注意：
 *      订阅者和发布者必须使用的是同一个GlobalService的实例，
 *      所以不能在各自的component中provider（注入），必须在app.module中注入
 */
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    valueUpdated: Subject<any> = new Subject<any>();

    public loginFlag: boolean = false;

    constructor(){}

    getLoginFlag():boolean{
        return this.loginFlag;
    }

    setLoginFlag(val){
        this.loginFlag = val;
        // 变量已更新，将其发布
        this.valueUpdated.next(this.loginFlag);
    }
}