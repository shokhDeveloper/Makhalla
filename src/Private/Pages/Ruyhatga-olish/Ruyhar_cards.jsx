import {Context} from "../../../Context"
import { useCallback, useContext, useState } from "react"
import { Modal } from "../../../Modal"
import { StyledButtons } from "../../../Styled_Components/styledButtons"
import { RuyhatForm } from "./RuyhatForm"
import axios from "axios"
import { useQuery } from "react-query"

export const Ruyhat_cards = () => {
    const [modal, setModal] = useState(!true)
    const {user} = useContext(Context)
    console.log(user)
    const getAdmin = async () => {
        const request = await axios.get("http://localhost:8989/adminss")
        const response = await request.data
        return response
    }
    const handleDelete = useCallback( async (event, id) => {
        axios.delete(`http://localhost:8989/adminss/${id}`).then((response) => {
            if(response.status === 200){
                alert("Muvaffaqiyatli o'chirildi")
                getAdmin()
                return response.data
            }
        }).catch((error) => console.log(error))
    }, )
    const query = useQuery("/adminss", getAdmin)
    return(
        <>
        <div className="ruyhat_cards">
            <div className="ruyhat_cards_title">
                <h2>Foydalanuvchilar</h2>      
                <StyledButtons variant="blue" onClick={() => setModal(!modal)}>Foydalanuvchi qo'shish + </StyledButtons>
            </div>
            <Modal title={"Foydalanuvchi qushish +"} modal={modal} setModal={setModal}>
                <RuyhatForm getAdmin={getAdmin} modal={modal} setModal={setModal}/>
            </Modal>
            <div className="foydalanuvchi_malumot">
                <div className="foydalanuvchi_header">
                    <h2>Foydalanuvchilar ro'yhati</h2>
                </div>
                <ul className="foydalanuvchilar">
                   {query?.data?.map((item, index) => {
                        
                        return(
                            <li key={item.id}>
                            <div className="foydalanuvchi_name">
                                <p><span>{index+1}.</span></p>
                                <p><strong>{item.name}  {item.familya}</strong></p>
                            </div>
                            <div className="foydalanuvchi_lavozim">
                                <p><strong>{item.lavozim}</strong></p>
                            </div>
                            <div className="foydalanuvchi_btns">
                                <button>Yangilash</button>
                                <button onClick={(event) => handleDelete(event, item.id)}>O'chirish</button>
                            </div>
                        </li>
                        )
                   })}
                </ul>
            </div>
        </div>
        {(function(q){
            if(q.isLoading){
                console.log("Yuklanmoqda")
            }else if(q.isError){
                console.log('Hatolik keldi')
            }
        }(query))}
        </>
    )
}