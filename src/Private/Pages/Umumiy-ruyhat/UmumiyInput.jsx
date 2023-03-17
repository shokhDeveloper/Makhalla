import { SearchOutlined } from "@mui/icons-material"
export const UmumiyInput = () => {
    return (
        <form >
            <label htmlFor="search">
            <SearchOutlined/>
            </label>
            <input id="search" autoFocus type="text" />
        </form>
    )
}