import type { ReactNode } from "react"
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../store/Store";

export const RequireAuth = ({children}: {children: ReactNode}) => {
    const jwt = useSelector((s: RootState) => s.user.jwt)
    if (!jwt){
        return <Navigate to={'/Login'} replace/>
    }
    return children
}