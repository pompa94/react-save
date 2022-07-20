// 아이콘
import React from 'react';
import {BiSearch} from 'react-icons/bi'
import {BiCaretDown,BiCheck} from 'react-icons/bi'
import { useState } from 'react';

function DropDown({toggleSort,orderBy,onOrderByChange,sortBy,onSortByChange}){
    if(!toggleSort){
        return null
    }
    return(
        <ul>
            <li
            onClick={
                ()=>{onSortByChange('petName')}
            }>
                애기명
                {(sortBy === 'petName') && <BiCheck />}
            </li>
            <li
            onClick={
                ()=>{onSortByChange('ownerName')}
            }>
                예약자명
                {(sortBy === 'ownerName') && <BiCheck />}
            </li>
            <li
            onClick={
                ()=>{onSortByChange('aptDate')}
            }>
                날짜
                {(sortBy === 'aptDate') && <BiCheck />}
            </li>

            <li
            onClick={
                ()=>{onOrderByChange('asc')}
            }>
                올림차순
                {(orderBy === 'asc') && <BiCheck />}
            </li>
            <li
            onClick={
                ()=>{onOrderByChange('desc')}
            }>
                내림차순
                {(orderBy === 'desc') && <BiCheck />}
            </li>
        </ul>
    )   
}



function Search({query,onQueryChange,orderBy,onOrderByChange,sortBy,onSortByChange}){
    // 
    const [toggleSort, settoggleSort] = useState(false)

    // 

    return(
        <div id='search'>
            <p>
                <BiSearch />
                <input 
                type='text' 
                placeholder='search'
                value={query}
                onChange={
                    (event) => {onQueryChange(event.target.value)}
                }
                />
                <button type='button'
                    onClick={
                        ()=>{settoggleSort(!toggleSort)}
                    }>
                    정렬하기
                    <BiCaretDown />
                </button>
            </p>
            <DropDown 
            toggleSort={toggleSort}
            orderBy={orderBy}
            onOrderByChange={onOrderByChange}
            sortBy={sortBy}
            onSortByChange={onSortByChange}
            />
        </div>
    )
}


export default Search