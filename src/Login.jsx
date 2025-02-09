import React, { useEffect } from 'react'
import { useState } from 'react';
import App from './App';

const User = {
    email : 'test@example.com',
    password : 'test1234@@'
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false); 

    const [notAllow, setNotAllow] = useState(true);

    const handelEmail = (e) => {
        setEmail(e.target.value);

        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(email)){
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    const handelPassword = (e) => {
        setPassword(e.target.value);

        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{7,20}$/;
        if (regex.test(password)){
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    const onClickConfirmButton = () => {
        if(email === User.email && password === User.password) {
            alert("로그인에 성공했습니다.")
        } else {
            alert("등록되지 않은 회원입니다.")
        }
    }

    useEffect(() => {
        if(emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid,pwValid]);

  return (
    <div className='login-page'>
        <div className='title-wrap'>
            이메일과 비밀번호를
            <br/>
            입력해주세요
        </div>

        <div className='content-wrap'>
            <div className='input-title'>이메일 주소</div>
            <div className='input-wrap'>
                <input 
                    type = "text"
                    className='input' 
                    placeholder='test@gmail.com'
                    value={email} 
                    onChange={handelEmail}
                />
            </div>
            <div className='error-message-wrap'>
                {
                    !emailValid && email.length > 0 && (
                        <div>올바른 이메일을 입력해주세요.</div>
                    )
                }
            </div>

            <div className='input-title' style={{marginTop: "26px"}}>비밀번호 </div>
            <div className='input-wrap'>
                <input 
                    type="password"
                    className='input' 
                    placeholder='영문, 숫자, 특수문자 포함 8자 이상'
                    value={password}
                    onChange={handelPassword}
                />
            </div>
            <div className='error-message-wrap'>
                {
                    !pwValid && password.length > 0 && (
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )
                }
            </div>
        </div>

        <div>
            <button onClick={onClickConfirmButton} disabled={notAllow} className='bottom-button'>
                확인
            </button>
        </div>
    </div>
  )
}
