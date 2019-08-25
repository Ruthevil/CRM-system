import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-library',
    templateUrl: './new-library.component.html',
    styleUrls: ['./new-library.component.css']
})
export class NewLibraryComponent implements OnInit {

    /**
     * 资料分类
     */
    public librarySplitArr:any = [
        { value: '', label: '请选择资料分类' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public librarySplit:string = this.librarySplitArr[0].value;

    /**
     * 文件类型
     */
    public fileTypeArr:any = [
        { value: '', label: '请选择文件类型' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭'}
    ];
    public fileType:string = this.fileTypeArr[0].value;

    constructor() { }

    ngOnInit() {
    }

    /**
     * 确定创建当前资料
     */
    submit(){

    }

    /**
     * 取消创建当前资料
     */
    cancel(){

    }
}
