import { Container_Fluid } from "../../../Container_Fluid"
import "./Umumiy.scss"
import { UmumiyInput } from "./UmumiyInput"
import { Umumiy_Routes } from "./Umumiy_routes"

export const Umumiy = () => {
    return(
        <div className="umumiy">
            <Container_Fluid>
                <div className="umumiy_align">
                    <UmumiyInput/>    
                    <Umumiy_Routes/>
                </div>
            </Container_Fluid>
        </div>
    )
}