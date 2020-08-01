import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getFormData , incrementStep} from '../../actions/formActions'
import PropTypes from 'prop-types'


const BasicInformation = ({ getFormData , step, incrementStep }) => {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ mobile, setMobile ] = useState('')
    const [ busiName, setBusiName ] = useState('')
    const [ loanAmt, setLoanAmt ] = useState('')
    const [ ownBusi, setOwnBusi ] = useState(true)
    const [ beenInBusiness, setBeenInBusiness ] = useState(true)
    const [ pOfLoan, setPOfLoan ] = useState('')



    const data = {
        firstName,
        lastName,
        email,
        mobile,
        busiName,
        loanAmt,
        ownBusi,
        beenInBusiness,
        pOfLoan
    }
    const onSubmit = (e) => {
        e.preventDefault()
        

        getFormData(data)
        incrementStep(step)
        console.log('Hello', firstName);
    }
    return (
        <div className='p-4'>
           <form onSubmit= {onSubmit}>
                <div className="form-group">
                    <label htmlFor="first_name">First Name </label>
                    <input type="text" className="form-control" id="first_name" value = {firstName} onChange={e => setFirstName(e.target.value)} required /> 
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name </label>
                    <input type="text" className="form-control" id="last_name" value = {lastName} onChange={e => setLastName(e.target.value)} required /> 
                </div>
                <div className="form-group">
                    <label htmlFor="email">Best Contact Email</label>
                    <input type="email" className="form-control" id="email" value = {email} onChange={e => setEmail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="ph_no">Mobile Phone Number </label>
                    <input type="tel" pattern="[0-9]{10}" maxLength='10' value = {mobile} onChange={e => setMobile(e.target.value)} className="form-control" id="ph_no" required /> 
                </div>
                <div className="form-group">
                    <label htmlFor="purpose_loan"> Do you own a Business? </label>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text bg-white border-right-0">
                            <input type="radio" id="ownBusiness1" name="ownBusiness" value = {ownBusi} onChange={e => setOwnBusi(true)} required defaultChecked/>
                            </div>
                        </div>
                        <label className="form-control border-left-0">Yes</label>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text bg-white border-right-0">
                            <input type="radio" id="ownBusiness2" name="ownBusiness" value = {ownBusi} onChange={e => setOwnBusi(false)} required/>
                            </div>
                        </div>
                        <label className="form-control border-left-0">No</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="bus_name">Business Name </label>
                    <input type="text" className="form-control" value = {busiName} onChange={e => setBusiName(e.target.value)} id="bus_name" required /> 
                </div>
                <div className="form-group">
                    <label htmlFor="loan_amt"> Desired Loan Amount </label>
                    <input type="number" className="form-control" value = {loanAmt} onChange={e => setLoanAmt(e.target.value)} id="load_amt" required /> 
                </div>
                <div className="form-group">
                    <label htmlFor="purpose_loan"> Purpose of Loan </label>
                    <select value={pOfLoan} onChange={ e => setPOfLoan(e.target.value)} className="custom-select">
                        <option value="" disabled>Select </option>
                        <option value='Personal' >Personal</option>
                        <option value='Educational' >Educational</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="purpose_loan"> Have you been in Business for atleast 9 months? </label>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text bg-white border-right-0">
                            <input type="radio" id="beenInBuss1" name="beenInBuss" value = {beenInBusiness} onChange={e => setBeenInBusiness(true)} required/>
                            </div>
                        </div>
                        <label className="form-control border-left-0">Yes</label>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text bg-white border-right-0">
                            <input type="radio" id="beenInBuss2" name="beenInBuss" value = {beenInBusiness} onChange={e => setBeenInBusiness(false)} required/>
                            </div>
                        </div>
                        <label className="form-control border-left-0">No</label>
                    </div>
                </div>
                <button type='submit' className="btn btn-block btn-primary">Next</button>
            </form> 
        </div>
    )
}

BasicInformation.propTypes = {
    getFormData: PropTypes.func.isRequired, 
    step: PropTypes.number.isRequired,
    incrementStep: PropTypes.func.isRequired
}

const mapStateToProps= state => ({
    step : state.info.step
})

export default connect(mapStateToProps, { getFormData, incrementStep }) (BasicInformation)
