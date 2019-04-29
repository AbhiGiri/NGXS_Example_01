import { User } from '../models/user';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AddUser } from '../actions/user.action';

export class UserStateModel {
    users: User[];
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})

export class UserState {
    @Selector()
    static getusers(state: UserStateModel) {
        return state.users;
    }

    @Action(AddUser)
    add({getState, patchState} : StateContext<UserStateModel>, { payload } : AddUser) {
        const state = getState();
        patchState({
            users: [...state.users, payload]
        });
    }

}