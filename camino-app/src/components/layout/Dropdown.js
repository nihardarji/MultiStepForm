import React, { useState } from 'react'

const Dropdown = () => {
    const [showDiv, setShowDiv] = useState(false)
    return (
        <div className='row no-gutters pb-4 pr-2' style={{'backgroundColor':'#114E57'}}>
            <div className='col-11 align-items-center text-white'>
                <hr className='border-light'/>
            </div>
            <div className="col-1 border ">
                {showDiv ? 
                <button onClick={(e) => setShowDiv(false)} className="btn btn-block align-middle text-white"> <i class="fas fa-chevron-up"></i> </button> :
                <button onClick={(e) => setShowDiv(true)} className="btn btn-block align-middle text-white"><i class="fas fa-question-circle m-1"></i>Help</button>}
            </div> 
            {showDiv && 
            <div className='row w-100 d-flex justify-content-center'>
                <div className="col-md-6 text-center text-white">
                Need help? Call or chat with us directly
                    <div className="col-md">
                        <button className='btn btn-outline-light m-2'><i class="fas fa-phone-alt pr-2"></i>Call</button>
                        <button className='btn btn-outline-light m-2'><i class="fas fa-comments pr-2"></i>Email</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Dropdown
