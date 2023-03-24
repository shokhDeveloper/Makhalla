import axios from "axios"
import { useCallback, useContext } from "react"
import { useQuery } from "react-query"
import { Context } from "../../../../Context"

export const Mahalla = () => {
    const {user} = useContext(Context)
    const getQuery = useCallback( async () => {
        const request = await axios.get("http://localhost:8989/mahalla")
        const response = await request.data
        return response
    },[user.id])
    const query = useQuery("/mahalla", getQuery)
    const handleDelete = async (id) => {
        const request = await axios({
            method: "Delete",
            url: `http://localhost:8989/mahalla/${id-0}`
        }).catch((error) => console.log(error))
        if(request.status === 200){
            getQuery()
        }
        const response = await request.data
        return response
    }
    if(query.isError) return console.log("Xatolik yuz berdi")
    if(query.isLoading) return console.log("Yuklanmoqda")
    return(
        <div className="mahalla-page">
            <div className="mahalla_header">
                <h1>Mahallalar ro'yhati</h1>
            </div>
            <ul className="mahalla_malumotlar">
                {query?.data?.length? 
                    <>     
                    {query?.data?.map((item, index) => (    
                        <li>
                        <div className="mahalla_nomi_text" style={{display: "flex"}}>
                        <p> <span>{index+1}.</span> </p><p><strong>{item.name}</strong></p>
                        </div>
                        <div>
                            <p><strong>{item.sektor_raqami}</strong></p>
                        </div>
                        <div>
                            <select defaultValue={"null"}>
                                <option value="null"></option>
                                <option value="null">Mahalla</option>
                                <option value="null"></option>
                            </select>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(item.id)}>O'chirish</button>
                        </div>
                    </li>  

                    ))}
                    </>
                :<h1>Hali mahallalar ruyhati kirgazilmagan</h1>}
            </ul>
        </div>
    )
} 
