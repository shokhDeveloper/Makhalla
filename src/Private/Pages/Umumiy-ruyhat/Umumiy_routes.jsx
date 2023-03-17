import { useEffect, useState } from "react"
import { NavLink, Route, Routes } from "react-router-dom"
import { Ayollar, Migrant, Temir, Umumiy, Yoshlar } from "./Pages"

export const Umumiy_Routes = () => {
    const [modal, setModal] = useState(!true)
    const handleUp = () => {
        setModal(!modal)
    }
    useEffect(() => {
        if(modal !== false){
            window.addEventListener("mouseup", handleUp)
            return () => {
                window.addEventListener("mouseup", handleUp)
            }
        }
    }, [modal])
    return(
        <>
        <div className="umumiy_routes">
        <ul>
        <li>
                <NavLink className={(params) => params.isActive ? "ruyhat_active":"ruyhat_page"} to={"umumiy"}>
                    Umumiy
                </NavLink>
            </li>
            <li>
                <NavLink className={(params) => params.isActive ? "ruyhat_active": "ruyhat_page"} to={"yoshlar"}>
                Yoshlar daftari
                </NavLink>
            </li>
            <li>
                <NavLink className={(params) => params.isActive ? "ruyhat_active": "ruyhat_page"} to={"ayollar"}>
                Ayollar daftari
                </NavLink>
            </li>
            <li>
                <NavLink className={(params) => params.isActive ? "ruyhat_active": "ruyhat_page"} to={"temir"}>
                Temir daftar
                </NavLink>
            </li>
            <li>
                <NavLink className={(params) => params.isActive ? "ruyhat_active":"ruyhat_page"} to={"migrant"}>
                Migrantlar
                </NavLink>
            </li>
        </ul>
            <div className="filter_parent">
            <button className="filter" onClick={() => setModal(!modal)}>Filtr</button>
            <div className="filter_bars">
            <div className="filter_uchburchak" style={{display: modal !== true? "none": "block"}}></div>
            <ul className="filter_bar"  style={{display: modal !== true? "none": "block"}}>
                <li>0-14 yoshgacha</li>
                <li>0-14 yoshgacha</li>
                <li>0-14 yoshgacha</li>
            </ul>
            </div>
            </div> 
        </div>
        <div className="ruyhat_route">
        <Routes>
            {/* Umumiy route qushiladi */}  
            <Route index  element={<Yoshlar/>}/>
            <Route path="/umumiy" element={<Umumiy/>}/>
            <Route path="/yoshlar" element={<Yoshlar/>}/>
            <Route path="/ayollar" element={<Ayollar/>}/>
            <Route path="/migrant" element={<Migrant/>}/>
            <Route path="/temir" element={<Temir/>}/>
        </Routes>
        </div>
        </>
    )
}