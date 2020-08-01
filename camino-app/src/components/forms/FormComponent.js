import React, { useState } from 'react'
import BasicInformation from './BasicInformation'
import { connect } from 'react-redux'
import PersonalInformation from './PersonalInformation'
import EducationInformation from './EducationInformation'

const FormComponent = ({ step }) => {
    const showProgress = () => {
        
    }
    return (
        <div>
        <div className='d-flex p-2'>
            <div className="mr-auto">
            Step {step}: { step === 1 ? 'Basic Information' : (step === 2 ? `Personal Information` : `Educational Information`)}
            </div>
            <div>
                Step {step} of 3
                {/* { step === 1 ?
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: '33%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>  : 
                (step === 2 ? 
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: '66%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div> : 
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>)} */}
                <div className='row no-gutters d-flex '>
                    <div class="col-3 progress mr-1" style={{height:'8px'}}>
                        <div class="progress-bar" role="progressbar" style={{width : '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="50"></div>
                    </div>

                    { step > 1  &&<div class="col-3 progress mr-1" style={{height:'8px'}}>
                        <div class="progress-bar" role="progressbar" style={{width : '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> }

                    { step > 2 && <div class="col-3 progress mr-1" style={{height:'8px'}}>
                        <div class="progress-bar" role="progressbar" style={{width : '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>}
                </div>
                
            </div>
        </div>
            <div className='container-class'>
                { step === 1 && 
                <BasicInformation/>}
                { step === 2 && 
                <PersonalInformation/>}
                { step === 3 &&
                <EducationInformation/>}
            </div>
        </div>
    )
}
const mapStateToProps= state => ({
    step : state.info.step
}) 

export default connect(mapStateToProps, null)(FormComponent)
