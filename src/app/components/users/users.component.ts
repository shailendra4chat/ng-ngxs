import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/shared/models/user';
import { GetUsersAction } from 'src/app/shared/store/action/user.action';
import { UserState } from 'src/app/shared/store/state/user.state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  @Select(UserState.GetAllUsers) users: Observable<UserModel[]> | undefined

  constructor(private store: Store) { } 

  getAllUsers(){
    this.store.dispatch(new GetUsersAction())
  }

}
