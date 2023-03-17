import axios from "axios"
import { useEffect, useState } from "react"
import { useMutation } from "react-query"
import {StyledButtons, SubmitterButtons} from "../../../Styled_Components/styledButtons"
export const RuyhatForm = ({modal, setModal, getAdmin}) => {
    const [block, setBlock] = useState("none")
    const handleChange = (event) => {
        if(event.target.value === "sektor-raxbari"){
            setBlock("block")
        }else{
            setBlock("none")
        }
    }
    const date = new Date()
    const mutation = useMutation(data => {
        axios({
            method: "POST",
            url: "http://localhost:8989/adminss",
            headers: {
                "Content-Type": "application/json"
            },
            data
        }).then((response) => {
            if(response.status === 201){
                setModal(!modal)
            }
        })
    })
    const handleSub = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        if(data.get("parol").length > 0 && data.get("parol_replay").length > 0 && data.get("parol") === data.get("parol_replay")){
            const user = {
                name: data.get("name"),
                familya: data.get("familya"),
                date: data.get("tugilgan_sana"),
                tel_number: data.get("telefon_raqam"),
                lavozim: data.get("lavozim"),
                default_sektor_raqam: data.get("sektor_raqami"),
                sektor_raqami:data.get("sektor-raqami") !== "raqam"?data.get("sektor-raqami"): null ,
                email: data.get("email"),
                password: data.get("parol"),
                password_replay: data.get("parol_replay")   
            }
            mutation.mutate({...user, date_request: `${date.toLocaleDateString()}-${date.getHours()}:${date.getMinutes()} Request-date` })
        }else{
            console.log(false)
        }
    }
    useEffect(() => {
        if(mutation.isSuccess === true){
            console.log("ishladi")
            console.log(getAdmin)
        }else{
            console.log(false)
        }
    },[mutation.isSuccess])
    return(
        <>
       <form onSubmit={handleSub} id="form" className="ruyhat_form">
            <div>
            <label form="form" htmlFor="ism">
                {/* <p>Ism</p> */}
                <input required name="name" placeholder="Ism" type="text" id="ism" />
            </label>
            <label  form="form" htmlFor="familya">
                {/* <p> Familya</p> */}
                <input required name="familya" type="text" placeholder="Familya" id="familya"/>
            </label>
            </div>
            <div>
            <label form="form" htmlFor="date">
                {/* <p>Tugilgan sana</p>  */}
                <input required name="tugilgan_sana" type="date" id="date" placeholder="Tugilgan sana" />
            </label>
            <label form="form" htmlFor="tel">
                {/* <p>Telefon raqam</p>  */}
                <input required name="telefon_raqam" id="tel" type="number" placeholder="Telefon raqami" />
            </label>
            </div>
            <div>
                <div className="check_form">
                <label htmlFor="erkak">
                    Erkak
                    <input required type="radio"  value={"erkak"} name="jins" id="erkak" />
                </label>
                <label htmlFor="ayol">
                    Ayol
                    <input required value={"ayol"} type="radio" id="jins" name="jins" />
                </label>
                </div>
                <label htmlFor="sektor_numer">
                    <select required  name="sektor_raqami" defaultValue={"sektor_raqami"} id="sektor_number">
                        <option value="sektor_raqami" selected disabled>Sektor raqami</option>
                        <option value="bir">1</option>
                        <option value="ikki">2</option>
                        <option value="uch">3</option>
                        <option value="turt">4</option>
                    </select>
                </label>
            </div>
            <div>
                <label htmlFor="lavozim" style={{margin: block !== "block"? "0 auto": false }}>
                    <select name="lavozim"  onChange={handleChange} id="lavozim">
                        <option value="lavozim" selected disabled>Lavozim</option>
                        <option value="mahalla-raisi">Mahalla raisi</option>
                        <option value="sektor-raxbari">Sektor raxbari</option>
                    </select>
                </label>
                <label htmlFor="sektor-raqami" style={{display: block}}>
                    <select required name="sektor-raqami" defaultValue={"raqam"} id="sektor-raqami">
                        <option value="raqam">Qaysi sektor raxbari</option>
                        <option value="bir">1</option>
                        <option value="ikki">2</option>
                    </select>
                </label>
            </div>
            <div>
                <label htmlFor="email">
                    <input name="email" placeholder="Email" type="email" id="email" />
                </label>
                <label htmlFor="parol">
                    <input name="parol" type="password" placeholder="Parol" id="parol" />
                </label>
            </div>
            <div>
                <label htmlFor="parol_replay">
                    Parolni takrorlang
                    <input name="parol_replay" type="password" placeholder="Parolni takrorlang" />
                </label>
                <SubmitterButtons variant="blue"  >
                Yuborish
            </SubmitterButtons>
            </div>
           
        </form>
        {(function(mutation){
            if(mutation.isLoading){
                console.log("Yuklanmoqdda")
            }else if(mutation.isError){
                console.log("Xatolik yuz berdi")
            }
        }(mutation))}
        </>
    )
}