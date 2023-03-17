import "./Ruyhat.scss"
import { Container_Fluid } from "../../../Container_Fluid"
import { RuyhatHeader } from "./RuyhatHeader"
import { RuyhatForm } from "./RuyhatForm"
import { Ruyhat_cards } from "./Ruyhar_cards"

export const Ruyhat  = () => {
    return(
        <div className="ruyhat">
            <Container_Fluid>
                <RuyhatHeader/>
                <Ruyhat_cards/>    
                
            </Container_Fluid>
        </div>
    )
}