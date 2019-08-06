import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOutletComponent } from './user-outlet/user-outlet.component';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routes';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';


// Font Awesome imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Icons import
import {
  faUserCircle,
  faDownload,
  faChevronRight,
  faInfoCircle,
  faColumns,
  faProjectDiagram,
  faCoins,
  faExchangeAlt,
  faUser,
  faCog,
  faCopy,
  faAddressCard,
  faPassport,
  faCheck,
  faCheckCircle,
  faCircle,
  faUpload

} from '@fortawesome/free-solid-svg-icons';
import { UserHomeComponent } from './home-group/user-home/user-home.component';
import { TokenAreaComponent } from './home-group/components-home/token-group/components/token-area/token-area.component';
import { DescriptionAreaComponent } from './home-group/components-home/token-group/components/description-area/description-area.component';
import { TransDivComponent } from './home-group/components-home/trans-group/trans-div/trans-div.component';
import { TokenDivComponent } from './home-group/components-home/token-group/token-div/token-div.component';
import { TransTableComponent } from './home-group/components-home/trans-group/components/trans-table/trans-table.component';
import { TransCalcComponent } from './home-group/components-home/trans-group/components/trans-calc/trans-calc.component';
import { UserHeaderComponent } from 'src/app/shared/components/user-header/user-header.component';
import { KYCMainComponent } from './KYC-group/components-kyc/kyc-main/kyc-main.component';
import { KYCComponent } from './KYC-group/kyc/kyc.component';
import { KycFormComponent } from './KYC-group/components-kyc/kyc-form/kyc-form.component';
import { KycSuccessComponent } from './KYC-group/components-kyc/kyc-success/kyc-success.component';
import { ProfileComponent } from './profile-group/profile/profile.component';
import { DetailProComponent } from './profile-group/comps-prof/detail-group/detail-pro/detail-pro.component';
import { StatusProComponent } from './profile-group/comps-prof/status-pro/status-pro.component';
import { ReferralProComponent } from './profile-group/comps-prof/referral-pro/referral-pro.component';
import { IdVfyProComponent } from './profile-group/comps-prof/id-vfy-pro/id-vfy-pro.component';
import { VfyProComponent } from './profile-group/comps-prof/vfy-pro/vfy-pro.component';
import { DetDataComponent } from './profile-group/comps-prof/detail-group/comps-det/det-data/det-data.component';
import { DetSettingsComponent } from './profile-group/comps-prof/detail-group/comps-det/det-settings/det-settings.component';
import { DetPasswordComponent } from './profile-group/comps-prof/detail-group/comps-det/det-password/det-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTokenComponent } from './component-createtoken/create-token/create-token.component';
import { MainCreatetokenComponent } from './component-createtoken/main-createtoken/main-createtoken.component';

@NgModule({
  declarations:
  [
    UserOutletComponent,
    HeaderComponent,
    UserHomeComponent,
    TokenAreaComponent,
    DescriptionAreaComponent,
    TransDivComponent,
    TokenDivComponent,
    TransTableComponent,
    TransCalcComponent,
    UserHeaderComponent,
    KYCMainComponent,
    KYCComponent,
    KycFormComponent,
    KycSuccessComponent,
    ProfileComponent,
    DetailProComponent,
    StatusProComponent,
    ReferralProComponent,
    IdVfyProComponent,
    VfyProComponent,
    DetDataComponent,
    DetSettingsComponent,
    DetPasswordComponent,
    CreateTokenComponent,
    MainCreatetokenComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UserModule {

  constructor() {
    library.add(
      faUserCircle,
      faDownload,
      faChevronRight,
      faInfoCircle,
      faColumns,
      faProjectDiagram,
      faCoins,
      faExchangeAlt,
      faUser,
      faCog,
      faCopy,
      faPassport,
      faAddressCard,
      faCheck,
      faCheckCircle,
      faCircle,
      faUpload
    )
  }

}
