import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TableManagementService } from 'src/app/services/table-management.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent
{
  @Input({required: true}) title! : string;

  constructor(private authService:AuthService, private router: Router,
    private utilsService : UtilsService,
    private tableManagement : TableManagementService) 
  { 
    
  }

  logout()
  {
    this.utilsService.showSweet({title:'¿Seguro que desea salír?',
      showDenyButton: true, denyButtonText: 'No',
      confirmButtonText: 'Sí'})
      .then((result)=>
      {
        if(result.isConfirmed)
        {
          this.authService.logOut();
          this.tableManagement.resetInsideFlagsFlags();
          this.utilsService.changeRoute('/login');
        } 
      })
  }

}
