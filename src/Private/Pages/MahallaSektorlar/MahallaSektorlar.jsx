import "./Mahalla.scss"
import { SearchOutlined } from "@mui/icons-material"
import { Container_Fluid } from "../../../Container_Fluid"
import { MahallaCards } from "./MahallaCards"

export const MahallaSektorlar = () => {
    return(
        <div className="mahalla">
            <Container_Fluid>
                <form className="mahalla-form">
                    <label htmlFor="search_mahalla">
                        <SearchOutlined/>
                        <input autoFocus type="text" id="search_mahalla" />
                    </label>
                </form>
                <MahallaCards/>
            </Container_Fluid>
        </div>
    )
}