import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserId = string

export interface User {
    name: string;
    email: string;
    github: string;
}

const DEFAULT_STATE = [
    {
        id:"1",
        name: "Yazman Rodriguez",
        email: "yazmanito@gmail.com",
        github: "yazmanito",
    },
    {
        id: "2",
        name: "John Doe",
        email: "leo@gmail.com",
        github: "leo",
    },
    {
        id: "3",
        name: "Haakon Dahlberg",
        email: "haakon@gmail.com",
        github: "JorgeVeraz23",
    }    
];

export interface UserWithId extends User {
    id: string;
}

const initialState: UserWithId[] = (() => {
    const persistedState =localStorage.getItem("__redux_state__");
    if(persistedState){
        return JSON.parse(persistedState).users;
    }
    return DEFAULT_STATE; 
})()



export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter((user) => user.id != id);
        }
    }
})

export default userSlice.reducer;

export const {deleteUserById} = userSlice.actions