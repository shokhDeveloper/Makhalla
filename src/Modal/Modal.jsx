import { useEffect } from "react"
import "./Modal.scss"
export const Modal = ({title, children, modal, setModal}) => {
    const handleScroll = () => {
        console.log(window.scrollY)
        console.log("ishladi")
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    },[window.scrollY])
    return(
        <div className="modal_overlay" style={{display: modal !== true? "none": "flex"}}>
            <div className="modal">
                <div className="modal_header">
                <h3>{title}</h3>
                <button className="x" onClick={() => setModal(() => setModal(!modal))}>&times;</button>
                </div>
                <div className="modal_align">
                    {children}
                </div>
            </div>
        </div>
    )
}