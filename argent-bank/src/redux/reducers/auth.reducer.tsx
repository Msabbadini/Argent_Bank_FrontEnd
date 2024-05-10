import { createSlice } from '@reduxjs/toolkit'

const settings = JSON.parse(localStorage.getItem('settings') || '{}')

export interface IAuthState {
    isLoggedin: boolean
    token: string | null
    error: string | null
}

const initialState: IAuthState = {
    isLoggedin: !!settings.token,
    token: settings.token || null,
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            if (action.payload.rememberMe) {
                localStorage.setItem('settings', JSON.stringify({ token: action.payload.token }))
            }
            state.isLoggedin = true
            state.token = action.payload.token
            state.error = null
        },
        loginFailure: (state, action) => {
            state.isLoggedin = false
            state.token = null
            state.error = action.payload
        },
        logout: (state) => {
            console.log('logout')
            localStorage.removeItem('settings')
            state.isLoggedin = false
            state.token = null
            state.error = null
        }
    }
})

export const { loginSuccess, loginFailure, logout } = authSlice.actions
export default authSlice.reducer