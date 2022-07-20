import React from 'react';
import { useState } from 'react';

import {BiCalendarPlus} from 'react-icons/bi'

function AddWrite({toggleForm,formData,formDataPublish,setFormData}){
    if(!toggleForm){
        return null
    }
    return(
        <>
        <ul>
                <li>
                <label htmlFor='userName'>집사명</label>
                <input id='userName'
                type='text'
                onChange={(event)=>{setFormData({...formData,ownerName:event.target.value})}}
                />
                </li>
                <li>
                <label htmlFor='userChildren'>애기명</label>
                <input id='userChildren'
                type='text'
                onChange={(event)=>{setFormData({...formData,petName:event.target.value})}}/>
                </li>
                <li>
                <label htmlFor='userDate'>예약일</label>
                <input id='userDate'
                type='date'
                onChange={(event)=>{setFormData({...formData,aptDate:event.target.value})}}/>
                </li>
                <li>
                <label htmlFor='userTime'>예약 시간</label>
                <input id='userTime'
                type='time'
                onChange={(event)=>{setFormData({...formData,aptTime:event.target.value})}}/>
                </li>
                <li>
                <label htmlFor='userDes'>기타설명</label>
                <input id='userDes'
                type='textarea' cols='30' rows='10' placeholder='기타설명'
                onChange={(event)=>{setFormData({...formData,aptNotes:event.target.value})}}/></li>
            </ul>
            <p>
                <input type="submit" value='제출'
                onClick={formDataPublish}
                />
            </p>
        </>
    )
}

function AddAppointment({onSendAppointment,lastId}){
    // 
    const clearData = {
        petName :"",
        ownerName:"",
        aptNotes:"",
        aptDate:""
    }
    const [toggleForm,setToggleForm] = useState(false)
    const [formData,setFormData] = useState(clearData)


 

    // 함수만들기
    function formDataPublish(){
        const appointMentInfo = {
            id: lastId+1,
            petName:formData.petName,
            ownerName:formData.ownerName,
            aptNotes:formData.aptNotes,
            aptDate:formData.aptDate +''+ formData.aptTime
        }

        setToggleForm(!toggleForm)
        setFormData(clearData)
        onSendAppointment(appointMentInfo)
    }

    return(
        <div id="appoint">
            <h4 onClick={
                ()=>{setToggleForm(!toggleForm)}
            }>
                <BiCalendarPlus />
                예약하기
            </h4>
            <AddWrite 
            toggleForm={toggleForm}
            
            formData = {formData}
            formDataPublish={formDataPublish}
            setFormData={setFormData}
            />
        </div>
    )
}


export default AddAppointment