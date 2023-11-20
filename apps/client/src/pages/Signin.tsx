import axios from "axios";
import { Signin } from "ui";
import { useSetRecoilState } from "recoil";
import {usersState} from "store"

export default function SigninPage() {
const setUserEmail = useSetRecoilState(usersState)
    return (
      <>
        <div>
          <Signin onClick={async(username: any ,password: any)=>{
            const resp = await axios.post("/api/signin",{
              username ,
                password
            })
            if (resp.data.tokan==""){
              alert("Your credentials are not correct")
              
            }
            if (resp.data.tokan){
            localStorage.setItem("tokan", resp.data.tokan)
            alert(resp.data.message)
            setUserEmail({isLoading: false,
              userEmail: username})
            }

          }}/>
        </div>
      </>
    );


  }