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
  // 함수

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

      <AddAppointment />
      <Search />

      <div id='list'>
        <ul>
          {
            appointList.map(
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
