import React from 'react'
import { connect } from 'react-redux'
import {  incrementStep} from '../../actions/formActions'

const PersonalInformation = ({ step , incrementStep }) => {
    const onSubmit = (e) => {
        e.preventDefault()
        incrementStep(step)
    }
    return (
        <div className='p-4'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" className="form-control" id="age" required /> 
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text bg-white border-right-0">
                            <input type="radio" id="male" name="gender" required/>
                            </div>
                        </div>
                        <label className="form-control border-left-0">Male</label>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text bg-white border-right-0">
                            <input type="radio" id="female" name="gender" required/>
                            </div>
                        </div>
                        <label className="form-control border-left-0">Female</label>
                    </div>
                </div>
                <button type='submit' className="btn btn-block btn-primary">Next</button>
            </form>
        </div>
    )
}

const mapStateToProps= state => ({
    step : state.info.step
})

export default connect(mapStateToProps, { incrementStep }) (PersonalInformation)
