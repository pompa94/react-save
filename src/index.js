import React from 'react';
import ReactDOM from 'react-dom/client';

// component
import AddAppointment from './component/AddAppointment';
import Search from './component/Search';
import AddInfo from './component/AddInfo';


// source
import './index.css'
import AppointData from './data.json'
import {BiArchive} from 'react-icons/bi'






function App(){
  
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
            AppointData.map(
              item => (
                <AddInfo 
                key={item.id}
                appointment={item}
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
