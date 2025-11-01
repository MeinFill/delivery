import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import type { AppDispatch, RootState } from "../../store/Store"
import { userData } from "../../store/UserSlice"

export const InitComponent = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { jwt } = useSelector((S: RootState) => S.user)

  useEffect(() => {
    if (jwt) {
      dispatch(userData())
    }
  }, [jwt, dispatch])

  return <Outlet></Outlet>
}
