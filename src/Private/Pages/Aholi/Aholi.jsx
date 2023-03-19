import { useFormik } from "formik"
import { useEffect, useRef, useState } from "react"
import { Container_Fluid } from "../../../Container_Fluid"
import { SubmitterButtons } from "../../../Styled_Components/styledButtons"
import * as Yup from "yup";
import "./Aholi.scss"
import { Input } from "@mui/icons-material";
import axios from "axios";
export const Aholi =  () => {
    const date = new Date()
    const aholi_malumot = useRef()
    const bandlik_input = useRef()
    const ayollar = useRef()
    const dateRef = useRef()
    const formRef = useRef()
    const [passportBlock, setPasswordBlock] = useState("none")
    const [metirka, setMetirka] = useState("none")
    const [student, setStudent] = useState("none")
    const [band, setBand] = useState("none")
    const [oddiy, setOddiy] = useState("none")
    const [ayol, setAyol] = useState("none")
    const [dates, setDates] = useState("none")
    const handleChange = (event) => {
       setDates("none")
       let yil = event.target.value.substring(0, 4)
       if( date.getFullYear() - yil-0 >= 16){
        setPasswordBlock("block")
        setMetirka("none")
       }else{
        setPasswordBlock("none")  
        setMetirka("block")
       }
       if(date.getFullYear() - yil-0 <= 7 && date.getFullYear() - yil-0 > 3){
        aholi_malumot.current.value = "MTT"
        bandlik_input.current.value = "MTT"
       }else if(date.getFullYear() - yil-0 >= 7 && date.getFullYear() - yil-0 <= 18 ){
        aholi_malumot.current.value = "O'rta"
        bandlik_input.current.placeholder = "Maktab raqami"
        bandlik_input.current.value = null
       }else if(date.getFullYear() - yil-0 >= 18 ){
        aholi_malumot.current.value = "O'rta-yoki-Oliy"
        bandlik_input.current.placeholder = "Talabami (ha yoki yo'q)"
        bandlik_input.current.value = null
       }else if(date.getFullYear() - yil-0 <=3  ){
        aholi_malumot.current.value = "chaqaloq"
        bandlik_input.current.value = "Chaqaloq"
        }
        if(yil === ""){
            bandlik_input.current.placeholder = "Bandlik"
            aholi_malumot.current.value = "malumoti"
            setStudent("none")
            setOddiy("none")
            setBand("none")
            setAyol("none")
        }
     }
     const handleChangeBands = (event) => {
        if(event.target.value.trim() === "ha" && aholi_malumot.current.value === "O'rta-yoki-Oliy"){
            setStudent("flex")
        }else if(event.target.value.trim() !== "ha" && aholi_malumot.current.value === "O'rta-yoki-Oliy"){
            setStudent("none")
        }
        if(event.target.value.trim() === "yo'q" && aholi_malumot.current.value === "O'rta-yoki-Oliy"){
            setOddiy("block")
        }else if(event.target.value.trim() !== "yo'q" && aholi_malumot.current.value === "O'rta-yoki-Oliy"){
            setOddiy("none")
        }
     }
     const handleKurs = (event) => {
        if(event.target.value){
            setBand("block")
        }else{
            setBand("none")    
        }
     }
     const handleAyollar = (event) => {
        let yil = dateRef.current.value.substring(0, 4)
        if(yil !== ""){
            if(event.target.checked === true && date.getFullYear() - yil-0 > 30 ){
                setAyol("block")
            }else{
                setAyol("none")
            }
        }

     }
     const formik = useFormik({
        initialValues:{
            name: "",
            lastname: "",
            otch: "",
        },
        onSubmit: async (event) => {
            const data = new FormData(formRef.current)
            const user = {
                ...event,
                date: data.get("date"),
                malumot: data.get("malumoti"),
                jins: data.get("jins"),
                bandlik_yoki_talaba: data.get("bandlik"),
                oliygoh_nomi: data.get("oliygoh-nomi") !== null ? data.get("oliygoh-nomi"): false ,
                kurs_raqami: data.get("kurs") !== null?  data.get("kurs"): false,
                talaba_bandlik: data.get("bandlik_talaba") !== null?  data.get("bandlik_talaba"): false,
                oddiy_bandlik: data.get("oddiy_bandlik") !== null? data.get("oddiy_bandlik"): false,
                temir_daftar: data.get("temir") ,
                nogironlig: data.get("nogironlig"),
                manzil: data.get("manzil"),
                ayollar_daftari: data.get("ayol") !== null? data.get("ayol"): false
            }
            const request = await axios.post("http://localhost:8989/aholi", {...user, vaqt: `${date.toLocaleDateString()}-${date.getHours()}:${date.getMinutes()} Ruyhatga kirgazildi`})
            const response = await request.data
            console.log(response)
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Ism majburiy"),
            lastname: Yup.string().required("Familya majburiy"),
            otch: Yup.string().required("Ota ismi majburiy"),
            

        })
     })
     const handleFocus = (event) => {
        if(event.target.value !== null){
            setDates("none")
        }  else{
            setDates("block")
        }
     }
    useEffect(() => {
        if(formik?.errors?.name){
            setDates("block")
        }
    },[formik.errors])
    console.log(formik.errors)
    return(
        <div className="aholi">
            <Container_Fluid>
            <form ref={formRef} id="form" onSubmit={formik.handleSubmit}>
            <h1 style={{paddingBottom: "1rem"}}>Aholi Ruyhatga olish + </h1>
                <div className="temir"> 
                    <label htmlFor="name">
                    <input form="form"  {...formik.getFieldProps("name")} type="text" placeholder="Ism" name="name" id="name" />
                    {formik?.errors?.name? <p className="error_text">{formik.errors.name}</p>: false}
                    </label>
                    <label htmlFor="lastname">
                    <input form="form"  type="text" placeholder="Familya"    {...formik.getFieldProps("lastname")} name="lastname" id="familya" />
                    {formik?.errors?.lastname? <p className="error_text">{formik.errors.lastname}</p> : false}
                    </label>
                </div>
                <div className="temir">
                    <label htmlFor="otch">
                    <input type="text" placeholder="Otasining ismi" {...formik.getFieldProps("otch")} name="otch" id="otch" />
                    {formik?.errors?.otch? <p className="error_text">{formik.errors.otch}</p>: false}
                    </label>
                    <label htmlFor="date">
                    <input onFocus={handleFocus} type="date" ref={dateRef} onChange={handleChange} name="date" id="date" />
                    {dates !== "none"? <p className="error_text">Tug'ilgan sana majburiy</p>: false }
                    </label>
                </div>
                <div className="temir">
                    <label htmlFor="passport" style={{display: passportBlock }}>
                    <input type="number"  placeholder="Passport seriyasi"  name="passport" id="passport" />
                    </label>
                    <label htmlFor="metirka" style={{display: metirka, textAlign: "start"}}>
                    <input type="text" name="metirka" id="metirka" placeholder="Metirka raqami"  />
                    </label>
                    <label htmlFor="malumoti"  style={{width: metirka !== "block" && passportBlock !== "block"? "50%": "85%", textAlign: "end", margin: "0 auto", justifyContent: "end"}}>
                    <select name="malumoti" defaultValue={"malumoti"} id="malumoti"  ref={aholi_malumot} className="select_malumot" style={{width: "100%"}}>
                        <option value="malumoti" selected disabled>Ma'lumoti</option>
                        <option value="MTT">MTT tarbiyalanuvchisi</option>
                        <option value="O'rta">O'rta ta'lim</option>
                        <option value="O'rta-yoki-Oliy">O'rta maxsus || Oliy</option>
                        <option value="chaqaloq">Chaqaloq</option>
                    </select>
                    </label>
                </div>
                <div>
                    <div>
                        <label htmlFor="erkak">
                            Erkak
                        <input value="erkak" type="radio" required id="erkak" name="jins" />
                        </label>
                        <label htmlFor="ayol">
                            Ayol        
                        <input value="ayol" id="ayol" required  onChange={handleAyollar} ref={ayollar} type="radio" name="jins" />
                        </label>               
                    </div>
                    <div>
                        <label htmlFor="bandlik">
                        <input type="text"  placeholder="Bandlik" onChange={handleChangeBands} ref={bandlik_input} id="bandlik" name="bandlik" />
                        </label>
                    </div>
                </div>
                <div style={{display: student}}  className="temir">
                    <label  htmlFor="oliygoh-nomi">
                        <input type="text" id="oliygoh-nomi" name="oliygoh-nomi" placeholder="Oliygoh nomi" />
                    </label>
                    <label htmlFor="kurs">
                        <input type="number" onChange={handleKurs} id="kurs" name="kurs" placeholder="Nechinchi kurs" />
                    </label>
                </div>
                <div>
                <div style={{display: band}} className={band !== "block"? "none": "temir"}>
                    <label htmlFor="bandlik-talaba">
                        <input name="bandlik_talaba" type="text" placeholder="(Ishsiz, Band, Migrant)" />
                    </label>
                </div>
                <div style={{display: oddiy}}>
                    <label htmlFor="urta-bandlik">
                        <input name="oddiy_bandlik" type="text" placeholder="(Migrant, Ishli, Ishsiz)" />
                    </label>
                </div>
                
                </div>
                <div className="temir">
                    <label htmlFor="temir" >
                        <input type="text"  id="temir" placeholder="Temir daftar (ha yoki yo'q)" name="temir"  />
                    </label>
                    <label htmlFor="nogiron">
                        <input name="nogironlig" type="text" id="nogiron" placeholder="Nogironligi (ha yoki yo'q)" />
                    </label>
                   
                </div>
                <div className={ayol !== "block"? "none": "temir"}>
                    <label htmlFor="manzil">
                        <input name="manzil" type="text" id="manzil" placeholder="Manzil" />
                    </label>
                    <label htmlFor="ayol" style={{display: ayol}}>
                        <input name="ayol" type="text" id="ayol" placeholder="Ayollar daftari (ha yoki yo'q)" />
                    </label>
                </div>
                <SubmitterButtons variant="blue">Yuborish</SubmitterButtons>
            </form>
            </Container_Fluid>
        </div>
    )
}