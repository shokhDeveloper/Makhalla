import { NavLink } from "react-router-dom"
import Logo from "../../assets/images/Mahalla.png"
import Arrow from "../../assets/images/Arrow_1.svg"
import "./Sidebar.scss"
import { useContext } from "react"
import { Context } from "../../Context"
export const Sidebar = () => {
    const {side, setSide} = useContext(Context)
    const handleClick = () => {
        setSide(!side)
    }
    return(
        <div className="sidebar" style={{width: side !== true? "6%": false }} >
            <div className="sidebar_header">
            <div className="sidebar_logo">
            {side  !== false? (
                <img src={Logo}  alt="Logo Sidebar" />
            ):false}
            </div>
            <div>
                <button onClick={handleClick} className={`${side !== false? "out_sidebar": "active_sidebar"}`}/>
                </div>
            </div>
            <div className="sidebar_links">
                <NavLink style={{margin: side !== true? "1.5rem 0rem": false, backgroundPosition: side !== true? "calc(50%)":false }} className={(params) => params.isActive? "active": "page_1"} to={"/bosh-sahifa"}>
                {side  !== false? (
                    "Bosh-sahifa"
                ):false}
                </NavLink>
                <NavLink style={{margin: side !== true? "1.5rem 0rem": false, backgroundPosition: side !== true? "calc(50%)":false }} className={(params) => params.isActive? "active": "page_2"} to={"/statistika"}>
                {side  !== false? (
                    "Statistika"
                ):false}
                </NavLink>
                <NavLink style={{margin: side !== true? "1.5rem 0rem": false, backgroundPosition: side !== true? "calc(50%)":false}} className={(params) => params.isActive? "active": "page_3"} to={"/umumiy-ruyhat"}>
                {side  !== false? (
                    "Umumiy-ruyhat"
            
                ):false}
                </NavLink>
                <NavLink style={{margin: side !== true? "1.5rem 0rem": false, backgroundPosition: side !== true? "calc(50%)":false}} className={(params) => params.isActive? "active": "page_4"} to={"/ruyhatga-olish"}>
                {side  !== false? (
                    "Foydalanuvchi"
                ):false}
                </NavLink>
                <NavLink style={{margin: side !== true? "1.5rem 0rem": false, backgroundPosition: side !== true? "calc(50%)":false}} className={(params) => params.isActive? "active": "page_5"} to={"/aholi"}>
                {side  !== false? (
                    "Aholi qo'shish "
                ):false}
                </NavLink>
                <NavLink style={{margin: side !== true? "1.5rem 0rem": false, backgroundPosition: side !== true? "calc(50%)":false}} to={"/mahalla-sektorlar"} className={(params) => params.isActive? "active": "page_6" }>
                    {side !== false? "Mahalla Sektorlar": false}
                </NavLink>
            </div>
        </div>
    )   
}