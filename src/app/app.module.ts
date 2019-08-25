import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ElModule} from 'element-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { BsDropdownModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { GlobalService } from 'src/services/common/global.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InfoManageComponent } from './components/info-manage/info-manage.component';
import { BusinessManageComponent } from './components/business-manage/business-manage.component';
import { ProductManageComponent } from './components/product-manage/product-manage.component';
import { ContractManageComponent } from './components/contract-manage/contract-manage.component';
import { LogManageComponent } from './components/log-manage/log-manage.component';
import { OrderManageComponent } from './components/order-manage/order-manage.component';
import { AfterSaleLogComponent } from './components/after-sale-log/after-sale-log.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { EmployeeManageComponent } from './components/employee-manage/employee-manage.component';
import { LibraryManageComponent } from './components/library-manage/library-manage.component';
import { SystemDockingManageComponent } from './components/system-docking-manage/system-docking-manage.component';
import { StatisticalAnalysisComponent } from './components/statistical-analysis/statistical-analysis.component';
import { UserManageComponent } from './components/user-manage/user-manage.component';
import { SystemConfigComponent } from './components/system-config/system-config.component';
import { SystemLogComponent } from './components/system-log/system-log.component';
import { LoginInComponent } from './components/login-in/login-in.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftAsideComponent } from './components/left-aside/left-aside.component';
import { EchartsComponent } from './components/echarts/echarts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { OrganizationInfoPageComponent } from './components/organization-info-page/organization-info-page.component';
import { ContractInfoPageComponent } from './components/contract-info-page/contract-info-page.component';
import { NewOrganizationPageComponent } from './components/new-organization-page/new-organization-page.component';
import { NewContractPageComponent } from './components/new-contract-page/new-contract-page.component';
import { OrganizationDetailPageComponent } from './components/organization-detail-page/organization-detail-page.component';
import { ContractDetailPageComponent } from './components/contract-detail-page/contract-detail-page.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { SubcontractManageComponent } from './components/subcontract-manage/subcontract-manage.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { LibraryInfoComponent } from './components/library-info/library-info.component';
import { NewLibraryComponent } from './components/new-library/new-library.component';
import { LibraryDetailComponent } from './components/library-detail/library-detail.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserAccreditComponent } from './components/user-accredit/user-accredit.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { SystemInfoComponent } from './components/system-info/system-info.component';
import { BusinessInfoComponent } from './components/business-info/business-info.component';
import { NewBusinessComponent } from './components/new-business/new-business.component';
import { BusinessDetailComponent } from './components/business-detail/business-detail.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NewContractComponent } from './components/new-contract/new-contract.component';
import { ContractInfoComponent } from './components/contract-info/contract-info.component';
import { ContractDetailComponent } from './components/contract-detail/contract-detail.component';
import { LogInfoComponent } from './components/log-info/log-info.component';
import { LogDetailComponent } from './components/log-detail/log-detail.component';
import { NewLogComponent } from './components/new-log/new-log.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { OrderInfoComponent } from './components/order-info/order-info.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { AfterSaleInfoComponent } from './components/after-sale-info/after-sale-info.component';
import { AfterSaleDetailComponent } from './components/after-sale-detail/after-sale-detail.component';
import { NewAfterSaleComponent } from './components/new-after-sale/new-after-sale.component';
import { TaskListInfoComponent } from './components/task-list-info/task-list-info.component';
import { TaskListDetailComponent } from './components/task-list-detail/task-list-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        InfoManageComponent,
        BusinessManageComponent,
        ProductManageComponent,
        ContractManageComponent,
        LogManageComponent,
        OrderManageComponent,
        AfterSaleLogComponent,
        TaskListComponent,
        EmployeeManageComponent,
        LibraryManageComponent,
        SystemDockingManageComponent,
        StatisticalAnalysisComponent,
        UserManageComponent,
        SystemConfigComponent,
        SystemLogComponent,
        LoginInComponent,
        HeaderComponent,
        LeftAsideComponent,
        EchartsComponent,
        PageNotFoundComponent,
        OrganizationInfoPageComponent,
        ContractInfoPageComponent,
        NewOrganizationPageComponent,
        NewContractPageComponent,
        OrganizationDetailPageComponent,
        ContractDetailPageComponent,
        NewEmployeeComponent,
        SubcontractManageComponent,
        EmployeeDetailComponent,
        EmployeeInfoComponent,
        NewLibraryComponent,
        LibraryDetailComponent,
        LibraryInfoComponent,
        UserInfoComponent,
        NewUserComponent,
        UserAccreditComponent,
        UserDetailComponent,
        SystemInfoComponent,
        BusinessInfoComponent,
        NewBusinessComponent,
        BusinessDetailComponent,
        ProductInfoComponent,
        NewProductComponent,
        ProductDetailComponent,
        NewContractComponent,
        ContractInfoComponent,
        ContractDetailComponent,
        LogInfoComponent,
        LogDetailComponent,
        NewLogComponent,
        NewOrderComponent,
        OrderInfoComponent,
        OrderDetailComponent,
        AfterSaleInfoComponent,
        AfterSaleDetailComponent,
        NewAfterSaleComponent,
        TaskListInfoComponent,
        TaskListDetailComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ElModule.forRoot(),
        NgxEchartsModule,
        BsDropdownModule.forRoot(),
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [GlobalService],
    bootstrap: [AppComponent]
})
export class AppModule { }
