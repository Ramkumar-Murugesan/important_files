import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './user.service';
import { UserComponent } from './user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        UserComponent  
    ],
    imports: [
        MatSelectModule,
        MatListModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,

        RouterModule.forChild([
            { path: 'user', component: UserComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        UserService
    ]
})

export class UserModule {

}
