import { SearchOutlined } from "@mui/icons-material"
export const RuyhatHeader = () => {
    return(
        <div className="ruyhat_header">
           <form>
                <label htmlFor="search">
                     <SearchOutlined/>
                     <input autoFocus id="search" type="text" />
                </label>
            </form>          
        </div>
    )
}