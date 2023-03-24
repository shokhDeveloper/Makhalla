import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { NavLink, Route, Routes } from "react-router-dom"
import { Modal } from "../../../Modal"
import { StyledButtons, SubmitterButtons } from "../../../Styled_Components/styledButtons"
import { Mahalla, Sektorlar } from "./Pages"
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup";
import axios from "axios"
import { useMutation } from "react-query"
export const MahallaCards = () => {
    const [modal, setModal] = useState(!true)
    const [sektorModal, setSektorModal] = useState(!true)
    const [inputNumber, setInputNumber] = useState([])
    const date = new Date()
   const mutation = useMutation(data => {
    axios({
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        data: {...data, date: `${date.toLocaleDateString()}-${date.getHours()}:${date.getMinutes()} Ruyhatga kirgazildi` },
        url: "http://localhost:8989/mahalla"
    }).catch((error) => console.log(error)).then((response) => {
        if(response.status === 201){
            setModal(!modal)
        }
    })
   })
   let validationSchema = Yup.object({
    name: Yup.string().required("Ism kiritish majburiy"),
    sektor_raqami: Yup.string().required("Sektor raqami")
   })
   const {register, formState, handleSubmit, watch, formState:{isValid, errors}} = useForm({
    values: {
        name: "",
        sektor_raqami: ""
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema)
   }) 
   const onSubmit = async (event) => { 
        mutation.mutate(event)
   }
   watch()
   const handleKey = (event) => {
    let rejex = RegExp("Mahalla", "gi"  )
    if(event.target.value.match(rejex) !== null){
            
    }else{
        console.log(false)  
    }
   }
   const handleChange = (event) => {
        setInputNumber([...Array(event.target.value-0).keys()])
    }
   useEffect(() => {
        if(inputNumber?.length){
            console.log(inputNumber)
        }
   },[inputNumber])
   if(mutation.isLoading) return console.log("Yuborilmoqda")
   if(mutation.isError) return console.log("Xatolik yuz beri")
   return(
        <>
        <div className="mahalla_cards" >
            <ul className="mahalla_links">
                <li><NavLink className={(params) => params.isActive? "active_page_mahalla": "page_mahalla" } to={"mahalla"}>Mahallalar</NavLink></li>
                <li><NavLink className={(params) => params.isActive? "active_page_mahalla": "page_mahalla" } to={"sektorlar"}>Sektorlar</NavLink></li>
            </ul>
            <div>
            <StyledButtons onClick={() => setModal(!modal)} style={{fontSize: "16px"}} variant="blue">Mahalla qo'shish + </StyledButtons>
            <StyledButtons style={{fontSize: "16px", marginLeft: "0.3rem"}} variant="blue" onClick={() => setSektorModal(!sektorModal)}>Sektor qo'shish + </StyledButtons>
            </div>
            <Modal modal={sektorModal} setModal={setSektorModal} title="Sektor qo'shish">
                <form action="" style={{paddingTop: "4rem"}}>
                    <input type="text" placeholder="Sektor nomi" style={{width: "50%", margin: "1rem auto"}} />
                    <input type="text" style={{width: "50%", margin: "1rem auto"}} placeholder="Sektor rahbari" />
                    <input type="text" placeholder="Telefon raqami" style={{width: "50%", margin: "1rem auto"}} />
                    <input type="text" style={{width: "50%", margin: "1rem auto"}} placeholder="Manzili" />
                    <StyledButtons variant="blue">Saqlash</StyledButtons>
                </form>
            </Modal>
            <Modal title={"Mahalla yoki sektor qo'shish"} modal={modal} setModal={setModal}>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="mahallaName_Sektor">
                            <input placeholder="Mahalla nomi " id="mahallaName_Sektor" name="mahallaName_Sektor" onKeyUp={handleKey} type="text" {...register("name")} />
                            {errors?.name? <p className="error_text">{errors.name.message}</p>: false}
                        </label>
                        <label htmlFor="sektor_raqami">
                            <input placeholder="Sektor raqami" type="text" id="sektor_raqami" name="sektor_raqami" {...register("sektor_raqami")} />
                            {errors?.sektor_raqami? <p className="error_text">{errors.sektor_raqami.message}</p>: false}
                        </label>
                        <label htmlFor="mahalla_uchastkovoy">
                            <input placeholder="Mahalla uchastkovoyi" type="text" id="mahalla_uchastkovoy" name="mahalla_uchastkovoy" {...register("mahalla_uchastkovoy")} />
                            {errors?.mahalla_uchastkovoy? <p className="error_text">{errors.mahalla_uchastkovoy.message}</p>: false}
                        </label>
                        <label htmlFor="hokim_yordamchisi">
                            <input placeholder="Hokim yordamchisi" type="text" id="hokim_yordamchisi" name="hokim_yordamchisi" {...register("hokim_yordamchisi")} />
                            {errors?.hokim_yordamchisi? <p className="error_text">{errors.hokim_yordamchisi.message}</p>: false}
                        </label>
                        <label htmlFor="yoshlar_yetakchisi">
                            <input placeholder="Yoshlar yetakchisi" type="text" id="yoshlar_yetakchisi" name="yoshlar_yetakchisi" {...register("yoshlar_yetakchisi")} />
                            {errors?.yoshlar_yetakchisi? <p className="error_text">{errors.yoshlar_yetakchisi.message}</p>: false}
                        </label>
                        <label htmlFor="kucha_soni">
                            <input type="number" placeholder="ko'chalar sonini kirgazing" onKeyUp={handleChange} id="kucha_soni" name="kucha_soni" />
                        </label>
                        {inputNumber?.length?
                            <>
                                {inputNumber?.map((item) => {
                                    return(
                                        <label htmlFor="son">
                                            <input placeholder={`${item+1}-ko'cha nomi`} type="text" id="son" />
                                        </label>
                                    )
                                })}
                            </>
                        :console.log(false)}
                    </div>
                    <SubmitterButtons variant="blue">Yuborish</SubmitterButtons>
                </form>
            </Modal>
        </div>
            <div className="mahalla_align">
            <Routes>
                <Route index element={<Mahalla/>}/>
                <Route path="/mahalla" element={<Mahalla/>}/>
                <Route path="/sektorlar" element={<Mahalla/>}/>
            </Routes>
            </div>
            </>
    )
}