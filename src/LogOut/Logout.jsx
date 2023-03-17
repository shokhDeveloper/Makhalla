import LogoutOutlined from "@mui/icons-material/LogoutOutlined"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { Context } from "../Context"
import { StyledButtons } from "../Styled_Components/styledButtons"
import "./Logout.scss"
export const Logout = ({modal, setModal}) => {
    const { setToken } = useContext(Context)
    const navigator = useNavigate()
    const handleOut = () => {
        setModal(!modal)
    }
    useEffect(() => {
        if(modal == true){
            window.addEventListener("mouseup", handleOut)
        }
        return () => {
            window.removeEventListener("mouseup", handleOut)
        }
    }, [modal])
    return(
        <div style={{display: modal !== true? "none": "block"}} className="logout">
            <StyledButtons onClick={() => {
                setToken(null)
                window.localStorage.clear()
                navigator("/")
            }} variant="blue" style={{display: "flex", alignItems: "center"}}>Chiqish <span><LogoutOutlined/></span></StyledButtons>           
        </div>
    )
}