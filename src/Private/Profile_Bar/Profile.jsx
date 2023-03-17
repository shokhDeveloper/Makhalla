import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import { useState } from 'react';
import { Container_Fluid } from '../../Container_Fluid';
import { Logout } from '../../LogOut';
import "./Profile.scss"
export const Profile = () => {
    const [modal, setModal] = useState(!true)
    const handleClick = () => {
        setModal(!modal)
    }
    return(
        <div className="profile">
            <Container_Fluid>
            <div className="profile_align">
                <div className="profile_bar_align">
                <Logout modal={modal} setModal={setModal}/>
                <div onClick={handleClick} className="profile_bar"></div>

                </div>
                <button className='profile_btn_icons'>
                <AddAlertOutlinedIcon/>
                </button>
            </div>
            </Container_Fluid>
        </div>
    )
}