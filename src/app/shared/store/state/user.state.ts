import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store'
import { tap } from 'rxjs';
import { UserModel } from "../../models/user";
import { UsersService } from '../../services/users.service';
import { GetUsersAction } from '../action/user.action';

export class UserStateModel{
    users: UserModel[] | undefined;
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})

@Injectable()
export class UserState{

    constructor(private usersService: UsersService){}

    @Selector()
    static GetAllUsers(state: UserStateModel){
        return state.users
    }

    @Action(GetUsersAction)
    getUsersFromAction({getState, setState}: StateContext<UserStateModel>){
        return this.usersService.getUsers().pipe(tap((result) => {
            const state = getState();

            setState({
                ...state,
                users: result
            })
        }))
    }
}