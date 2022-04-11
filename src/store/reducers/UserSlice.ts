import { createSlice, PayloadAction, PrepareAction } from '@reduxjs/toolkit'
import { IUser } from '../../modals/IUser'
import { UserFetching } from '../reducers/ActionsCreate'

interface UserState{
    users: IUser[];
    iisLoading: boolean;
    error: string;
    counter: number;
    fetching: number;
}

const initialState: UserState = {
    users: [],
    iisLoading: false,
    error: '',
    counter: 0,
    fetching: 0,
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment(state, action:PayloadAction<number>){
            state.counter += action.payload
        },
        FetchinfLoad(state){
            state.iisLoading = true
        },
        FetchingSucceful(state, action: PayloadAction<IUser[]>){
            state.iisLoading = false;
            state.users = action.payload;
            state.error = ''
        },
        FetchingError(state, action: PayloadAction<string>){
            state.iisLoading = false
            state.error = action.payload
        },
        ChangeFetching(state, action: PayloadAction){
            state.fetching += 1 
        }
    },
    extraReducers: {
        [UserFetching.fulfilled.type] : (state, action: PayloadAction<IUser[]>) => {
            state.iisLoading = false;
            state.users = action.payload;
            state.error = '';
            console.log(state)
        },
        [UserFetching.rejected.type] : (state, action: PayloadAction<string>) => {
            state.iisLoading = false
            state.error = action.payload
        },
        [UserFetching.pending.type] : (state) => {
            state.iisLoading = true
        }
    }
})


export default UserSlice.reducer
export const {increment, FetchinfLoad, FetchingSucceful, FetchingError, ChangeFetching} = UserSlice.actions
export const initval = initialState
