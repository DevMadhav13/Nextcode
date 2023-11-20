import axios from "axios";
import {AddCourse} from 'ui'

export default function AllCourse() {

    console.log('Before fetch');   
    return<div>
        <AddCourse onClick={async function (title: string, description: string, image: string) {
            const resp = await axios.post("/api/addcourse",{
                title : title,
                description: description,
                imageLink: image,
                price : 100,
                published :true, 
            })       
            alert(resp.data.message)     
        } }></AddCourse>
    </div>
}

