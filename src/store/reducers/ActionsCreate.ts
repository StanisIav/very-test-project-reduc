import axios from "axios";
import { AppDispatch } from "../store";
//import {FetchinfLoad, FetchingSucceful, FetchingError} from '../reducers/UserSlice'
import { IUser } from "../../modals/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

/*export const UserFetching = () => async (dispatch: AppDispatch) => {
    try{
        dispatch(FetchinfLoad())
        const respons = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(FetchingSucceful(respons.data))
    }
    catch(e){
        dispatch(FetchingError('Ошибка'))
    }
}*/

export const UserFetching = createAsyncThunk(
    'userfetchAll',
    async(_______, thunkAPIII) => {
        try{
            const respons = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return respons.data
        }catch(e){
            return thunkAPIII.rejectWithValue('Ошибка')
        }
    }
)