import React from 'react'
import { useState } from 'react'

const EducationInformation = () => {

    const [show, setShow]= useState(true)
    const onSubmit = (e) => {
        e.preventDefault()

        
        setShow(false)
    }
    return (
        <div className = 'p-4'>
            { show &&<form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="university">Name of the University</label>
                    <input type="text" className="form-control" id="university" required /> 
                </div>
                <div className="form-group">
                    <label htmlFor="degree">Name of the Degree</label>
                    <input type="text" className="form-control" id="degree" required /> 
                </div>
                <button className='btn btn-block btn-primary' type='submit'>Submit</button>
            </form>}
            { !show && 
            <div className='text-center'>
                <h1>Thank You!!!</h1>
            </div>}
        </div>
    )
}

export default EducationInformation
