import { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { login } from "../../../store/slices/authSlice";

export const useAuth = () => {
    const [UserName, setUserName] = useState("fariba");
    const dispatch = useAppDispatch()

    const changeName = (value: string) => {
        setUserName(value);
    }
    const userlogin = () => {
        if (UserName === "fariba")
            dispatch(login())
    }

    return {
        UserName,
        changeName,
        userlogin
    }
}