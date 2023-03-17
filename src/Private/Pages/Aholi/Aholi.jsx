import { useRef, useState } from "react"
import { Container_Fluid } from "../../../Container_Fluid"
import "./Aholi.scss"
export const Aholi =  () => {
    const date = new Date()
    const aholi_malumot = useRef()
    const [passportBlock, setPasswordBlock] = useState("none")
    const [metirka, setMetirka] = useState("none")
    const handleChange = (event) => {
        console.log(select_malumot)
       let yil = event.target.value.substring(0, 4)
      if( date.getFullYear() - yil-0 >= 16){
        setPasswordBlock("block")
        setMetirka("none")
    }else{
        setPasswordBlock("none")  
        setMetirka("block")
      }
      if(date.getFullYear() - yil-0 <= 7){
        aholi_malumot.current.value = "MTT"
      }else if(date.getFullYear() - yil-0 >= 7 && date.getFullYear() - yil-0 <= 18 ){
        aholi_malumot.current.value = "O'rta"
    }else if(date.getFullYear() - yil-0 > 18 ){
        aholi_malumot.current.value = "O'rta-yoki-Oliy"
    }
    }
    return(
        <div className="aholi">
            <Container_Fluid>
            <form>
                <div>
                    <input type="text" name="ism" id="ism" />
                    <input type="text" name="familya" id="familya" />
                </div>
                <div>
                    <input type="text" name="ota-ismi" id="ota-ismi" />
                    <input type="date" onChange={handleChange} name="tugilgan-sana" id="tugilgan-sana" />
                </div>
                <div style={{display: 'flex'}}>
                    <input type="number" placeholder="Passport seriyasi" style={{display: passportBlock }} name="passport-seriasi" id="passport-seriasi" />
                    <input type="text" placeholder="Metirka raqami" style={{display: metirka}} />
                    <select defaultValue={"O'rta"} ref={aholi_malumot} className="select_malumot">
                        <option value="MTT">MTT tarbiyalanuvchisi</option>
                        <option value="O'rta">O'rta ta'lim</option>
                        <option value="O'rta-yoki-Oliy">O'rta maxsus || Oliy</option>
                    </select>
                </div>
                <div>
                    <div>
                        <input type="radio" name="jins" />
                        <input type="radio" name="jins" />
                    </div>
                    <div>

                    </div>
                </div>
            </form>
            </Container_Fluid>
        </div>
    )
}