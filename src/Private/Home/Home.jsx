import "./Home.scss"
import { Sidebar } from "../Sidebar"
import {Container_Fluid} from "../../Container_Fluid"
import { RoutesX } from "../RoutesX/RoutesX"
import { Profile } from "../Profile_Bar"
export const Home = () => {
    return(
        <div className="home">
          
            <div className="home_align">
            <Sidebar/>
            <RoutesX/>
            <Profile/>           
            </div>
        </div>
    )
}