import { createSlice } from "@reduxjs/toolkit"

export interface IUserState {
    firstName: string
    lastName: string
}

const initialState:IUserState = {
    firstName:'',
    lastName:''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUser: (state: IUserState, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        editUser: (state: IUserState, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        }
    }
})

export const { fetchUser, editUser } = userSlice.actions
export default userSlice.reducer