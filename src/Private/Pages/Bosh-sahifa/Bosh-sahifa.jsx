import "./Bosh_sahifa.scss"
import { Container_Fluid } from "../../../Container_Fluid"
import { StyledButtons } from "../../../Styled_Components/styledButtons"
import { Radial } from "../Statistika/RadialCharts"

export const Bosh = () => {
    return(
        <div className="bosh">
            <Container_Fluid>
                <div className="bosh_cards">
                    <div className="bosh_card_align">
                    <div className="bosh_card">
                    <StyledButtons variant="blue">
                        Mahalla haqida ma'lumot
                    </StyledButtons>
                    <div className="card">
                        <div className="card_text">
                            <p><strong>Manzili:</strong></p>
                            <p><strong>Telefon raqami:</strong></p>
                            <p><strong>Geografik joylashuvi:</strong></p>
                            <p><strong>Mahalla raisi:</strong></p>
                            <p><strong>Tashkil topgan yili:</strong></p>
                        </div>
                        <div className="card_text_2">
                            <p>XXX <span>XXX</span></p>
                            <p>XXX <span>XXX</span></p>
                            <p>XXX <span>XXX</span></p>
                            <p>XXX <span>XXX</span></p>
                            <p>1996</p> 
                        </div>
                    </div>
                    <StyledButtons className="mahalla_btn" variant="blue">
                    Maxalla aholisi:
                    </StyledButtons>
                    <div className="card">
                        <div className="card_text">
                            <p><strong>Jami aholi soni:</strong></p>
                            <p><strong>Ayollar soni:</strong></p>
                            <p><strong>Erkaklar soni:</strong></p>
                            <p><strong>Xonadon soni:</strong></p>
                            <p><strong>Oila soni:</strong></p>
                        </div>
                        <div className="card_text_2">
                            <p>5419</p>
                            <p>2123 (45%)</p>
                            <p>2876 (55%)</p>
                            <p>1234</p>
                            <p>1234</p> 
                        </div>
                    </div>
                    </div>  
                    <div className="thue_cards" style={{width: "50%", textAlign: "start"}}>
                    <div className="thue_cards_align" style={{width: "70%"}}>
                    <StyledButtons className="mahalla_btn" variant="blue">
                    Maxalla aholisi:
                    </StyledButtons>
                     <div className="statistika_card_1" style={{width: "100%", margin: "0 auto"}}>
                    <div className="statistika_card_1_header">
                    <p><strong>Statistika:</strong></p>
                    <select defaultValue={"2023"}>
                        <option value="2023">
                            2023
                        </option>
                    </select>
                    </div>
                    <Radial/>
                    <div className="statistika_texts">
                        <p><strong>Umumiy erkaklar soni: 0%</strong></p>
                        <p><strong>Umumiy ayollar soni: 0%</strong></p>
                        <p><strong>Umumiy bolalar soni: 0%</strong></p>
                    </div>                
                </div>
                    </div>
                                            
                    </div>
                    </div>
                </div>
            </Container_Fluid>
        </div>
    )
}