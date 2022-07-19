// 아이콘
import {BiTrash} from 'react-icons/bi'




function AddInfo({appointment,onDeleteAppoin}){
    return(
        <li>
            <dl>
                <dt>
                    {appointment.petName}
                </dt>
                <dd className='owner'>
                    <dfn>예약자명 : </dfn>
                    {appointment.ownerName}
                </dd>
                <dd className="desc">
                    {appointment.aptNotes}
                    </dd>
                <dd className="date">
                    {appointment.aptDate}
                    </dd>
            </dl>
            <p>
                <button type='button'
                onClick={
                    ()=>{
                        onDeleteAppoin(appointment.id)
                    }
                }>
                    <BiTrash />
                </button>
            </p>
        </li>
    )
}


export default AddInfo