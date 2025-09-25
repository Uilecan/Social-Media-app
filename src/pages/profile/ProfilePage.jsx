import { use } from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {

    const id = useParams().id;
    return (
        <div style={{ paddingTop: '5rem' }}>ProfilePage{id}</div> //TODO: adauga style 
    )
}

export default ProfilePage; 