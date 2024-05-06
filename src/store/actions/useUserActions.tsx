
import { UserId, deleteUserById } from '../users/slice.tsx';
import {useAppDispatch} from "../hooks/index.tsx"

const useUserActions = () => {
    const dispatch = useAppDispatch();
    const RemoveUser = (id : UserId) => {
        dispatch(deleteUserById(id));
    }

    return {RemoveUser} 
}


export default useUserActions;