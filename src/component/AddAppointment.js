import React from 'react';
import { useState } from 'react';

import {BiCalendarPlus} from 'react-icons/bi'

function AddWrite({toggleForm}){
    if(!toggleForm){
        return null
    }
    return(
        <>
        <ul>
                <li>
                <label htmlFor='userName'>집사명</label>
                <input id='userName'
                type='text'/>
                </li>
                <li>
                <label htmlFor='userChildren'>애기명</label>
                <input id='userChildren'
                type='text'/>
                </li>
                <li>
                <label htmlFor='userDate'>예약일</label>
                <input id='userDate'
                type='date'/>
                </li>
                <li>
                <label htmlFor='userTime'>예약 시간</label>
                <input id='userTime'
                type='time'/>
                </li>
                <li>
                <label htmlFor='userDes'>기타설명</label>
                <input id='userDes'
                type='textarea' cols='30' rows='10' placeholder='기타설명'/></li>
            </ul>
            <p>
                <input type="submit" value='제출'
                />
            </p>
        </>
    )
}

function AddAppointment(){
    // 
    const [toggleForm,setToggleForm] = useState(false)

    return(
        <div id="appoint">
            <h4 onClick={
                ()=>{setToggleForm(!toggleForm)}
            }>
                <BiCalendarPlus />
                예약하기
            </h4>
            <AddWrite 
            toggleForm={toggleForm}/>
        </div>
    )
}


export default AddAppointment