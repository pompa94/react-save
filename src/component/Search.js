// 아이콘
import React from 'react';
import {BiSearch} from 'react-icons/bi'
import {BiCaretDown} from 'react-icons/bi'
import { useState } from 'react';

function DropDown({toggleSort}){
    if(!toggleSort){
        return null
    }
    return(
        <ul>
            <li>애기명</li>
            <li>예약자명</li>
            <li>날짜</li>
            <li>asc</li>
            <li>desc</li>
        </ul>
    )
}



function Search(){
    // 
    const [toggleSort, settoggleSort] = useState(false)

    return(
        <div id='search'>
            <p>
                <BiSearch />
                <input type='text' placeholder='search'/>
                <button type='button'
                    onClick={
                        ()=>{settoggleSort(!toggleSort)}
                    }>
                    정렬하기
                    <BiCaretDown />
                </button>
            </p>
            <DropDown 
            toggleSort={toggleSort}/>
        </div>
    )
}


export default Search