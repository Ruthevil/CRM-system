import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-system-config',
    templateUrl: './system-config.component.html',
    styleUrls: ['./system-config.component.css']
})
export class SystemConfigComponent implements OnInit {

    /**
     * 系统消息是否开启
     */
    public systemInfo:string = '1';
    /**
     * 收到消息是否弹出小窗口
     */
    public smallWindow:string = '1';
    /**
     * 收到消息是否开启
     */
    public orderRemind:string = '1';
    /**
     * 预约提醒是否弹出小窗口
     */
    public orderWindow:string = '1';
    /**
     * 文件格式
     */
    public fileFormat:string = 'docx';
    /**
     * 文件大小
     */
    public fileSize:string = '1';
    /**
     * 图片大小
     */
    public imgSize:string = '1';
    /**
     * 图片格式
     */
    public imgFormat:string = '1';
    /**
     * 周备份时间
     */
    public weekBackupTime:string = '';
    /**
     * 日备份时间
     */
    public dayBackupTime:string = '';
    /**
     * 自动备份数据库名
     */
    public autoDatabaseName:string = '201603082300.SQL';
    /**
     * 手动备份数据库名
     */
    public manualDatabaseName:string = '201603082300.SQL';
    /**
     * 是否自动发短信
     */
    public autoSendMsg:string = '1';
    /**
     * 是否群发短信
     */
    public allSendMsg:string = '1';
    /**
     * 绑定的手机号
     */
    public inputMsisdn:number;
    /**
     * 邮件发送方式
     */
    public emailSendFormat:string = '1';
    /**
     * 发信人邮箱
     */
    public mainSendEmail:string;
    /**
     * SMTP服务器地址
     */
    public SMTPAddress:string;
    /**
     * SMTP服务器端口
     */
    public SMTPPort:number;
    /**
     * SMTP用户名
     */
    public SMTPUsername:string;
    /**
     * SMTP密码
     */
    public SMTPPassword:string;
    /**
     * 预约提醒值
     */
    public orderRemindArr = [
        { value: 0.5, label: 0.5 },
        { value: 1, label: 1 },
        { value: 1.5, label: 1.5 },
        { value: 2, label: 2 },
    ];
    public orderRemindValue:number = this.orderRemindArr[0].value;
    /**
     * 商机提醒值
     */
    public businessRemindArr = [
        { value: 1, label: 1 },
        { value: 3, label: 3 },
        { value: 5, label: 5 },
        { value: 7, label: 7 },
    ];
    public businessRemindValue:number = this.businessRemindArr[0].value;
    /**
     * 合同提醒值
     */
    public contractRemindArr = [
        { value: 7, label: 7 },
        { value: 10, label: 10 },
        { value: 15, label: 15 },
        { value: 20, label: 20 },
    ];
    public contractRemindValue:number = this.contractRemindArr[0].value;

    constructor() { }

    ngOnInit() {
    }

    /**
     * 下载自动备份数据库
     */
    downloadAutoDatabase(){

    }

    /**
     * 开始手动备份数据库
     */
    beginManualBackup(){

    }

    /**
     * 下载手动备份数据库
     */
    downloadManualDatabase(){

    }

    /**
     * 测试绑定手机号
     */
    testMsisdn(){

    }

    /**
     * 确定绑定手机号
     */
    confirmBindMsisdn(){

    }

    /**
     * 测试SMTP
     */
    testSMTP(){

    }

    /**
     * 确定设置SMTP服务器
     */
    confirmSetSMTP(){

    }

    /**
     * 确认保存系统配置
     */
    saveSystemConfig(){

    }

    /**
     * 取消保存系统配置
     */
    cancelSystemConfig(){

    }
}
