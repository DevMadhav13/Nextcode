import axios from "axios";
import { Signup } from "ui";
import { useRouter } from 'next/router';
import React from 'react';

import{useSetRecoilState} from 'recoil'
import {usersState} from 'store'


export default function SignupPage() {
  const setUserEmail = useSetRecoilState(usersState)
  
  const router = useRouter();
    return (
      <>
        <div>
          <Signup onClick={async(username: any ,password: any)=>{
            const resp = await axios.post("/api/signup",{
              username ,
                password
            })
            
            if (resp.data.tokan!==""){
              localStorage.setItem("tokan", resp.data.tokan)
              alert(resp.data.message)
              
              
              router.push('/Signin');
            }}          

          }/>
        </div>
      </>
    );


  }