import React,{useState,useCallback,useEffect} from 'react';
import ReactDOM from 'react-dom/client';

// component
import AddAppointment from './component/AddAppointment';
import Search from './component/Search';
import AddInfo from './component/AddInfo';


// source
import './index.css'
// import AppointData from './data.json'
import {BiArchive} from 'react-icons/bi'






function App(){
  // state
  const [appointList,setAppointList] = useState([])
  // search
  const [query,setQuery] = useState('')
  // search 정리,차순
  const [sortBy,setSortBy] = useState('petName')
  const [orderBy,setOrderBy] = useState('asc')

  // 함수

  // search
  const filterAppointments = appointList.filter(
    (item) =>{return(
      item.petName.toLowerCase().includes(query.toLowerCase()) || 
      item.ownerName.toLowerCase().includes(query.toLowerCase()) || 
      item.aptNotes.toLowerCase().includes(query.toLowerCase())
    )}
  ).sort(
    (a,b)=>{
      let order = (orderBy === 'asc' ? 1 : -1)
      return (a[sortBy].toLowerCase() <
      b[sortBy].toLowerCase() ? -1*order : 1*order)
    }
  )

  // change
  

  // useCallback
  const fetchData = useCallback(()=>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setAppointList(data))
  },[])
  

  // useEffect
  // useEffect = (()=>{fetchData()},[fetchData()])
  useEffect(()=>{fetchData()},[fetchData])
  
  return(
    <article>
      <h3>
        <BiArchive />
        예약 시스템
      </h3>

      <AddAppointment 
      onSendAppointment={
        myAppointment=>setAppointList([...appointList,myAppointment])
      }
      lastId = {
        appointList.reduce((max,item)=>Number(item.id) > max ? Number(item.id) : max , 0)
      }
      />
      
      <Search 
      query={query}
      onQueryChange={myQuery=>setQuery(myQuery)}
      /*  */
      orderBy={orderBy}
      onOrderByChange={myorder=>setOrderBy(myorder)}
      sortBy={sortBy}
      onSortByChange={mySort=>setSortBy(mySort)}
      />

      <div id='list'>
        <ul>
          { 
            // appointList.map(
            filterAppointments.map(
              (appointment) => (
                <AddInfo 
                key={appointment.id}
                appointment={appointment}
                onDeleteAppoin = {
                  (appointmentId)=>setAppointList(
                    appointList.filter(
                      appointment =>
                        appointment.id !== appointmentId
                      
                      )
                  )
                }
                />
              )
            )
          }
        </ul>
      </div>

    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
