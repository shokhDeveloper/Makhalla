import "./Statistika.scss"
import { Radial } from "./RadialCharts"
import { Container_Fluid } from "../../../Container_Fluid"
import { Erkaklar_charts } from "./Erkaklar_chart"
import { Ayollar_charts } from "./Ayollar_charts"

export const Statistika = () => {
    return(
        <div className="statistika">
            <Container_Fluid>
            <div className="statistika_cards">
               

            <div className="statistika_card_2">
                <div className="statistika_card_2_card_1">
                    <p><strong>Umumiy erkaklar soni:</strong></p>
                    <Erkaklar_charts/>
                    <p><strong>Umumiy ayollar soni</strong></p>
                    <Ayollar_charts/>
                </div>
            </div>
            </div>

            </Container_Fluid>
        </div>
    )
}