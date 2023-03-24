import { useRoutes } from "react-router"
import { Bosh, Statistika, Umumiy, Ruyhat, Aholi } from "../Pages"
import { MahallaSektorlar } from "../Pages/MahallaSektorlar"

export const RoutesX = () => {
    let route = [
        {
            path: "/",
            element: <Bosh/>
        },
        {
            path:"/bosh-sahifa",
            element: <Bosh/>
        },
        {
            path: "/statistika",
            element: <Statistika/>
        },
        {
            path: "/umumiy-ruyhat/*",
            element: <Umumiy/>
        },
        {
            path: "/ruyhatga-olish",
            element: <Ruyhat/>
        },
        {
            path: "/aholi",
            element: <Aholi/>
        },
        {
            path: "/mahalla-sektorlar/*",
            element: <MahallaSektorlar/>
        }
    ]
    return useRoutes(route)
}