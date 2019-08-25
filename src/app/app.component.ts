import { Component } from '@angular/core';
import { GlobalService } from 'src/services/common/global.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: []
})
export class AppComponent {
    public loginFlag: boolean;

    constructor(private globalService:GlobalService){
        this.loginFlag = globalService.getLoginFlag();
    }

    ngOnInit(){
        this.globalService.valueUpdated.subscribe(value => {
            this.loginFlag = value;
        });
    }

}
