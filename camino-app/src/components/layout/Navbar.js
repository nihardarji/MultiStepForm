import React from 'react'
import logo from '../../resources/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light pb-3" data-test='navbarComponent' style={{ 'backgroundColor':'#114E57'}}>
            <a className="navbar-brand ml-2" href="#">
                <div className="row d-flex align-items-center">
                    <div className="">
                        <img src={logo} data-test='logoIMG' width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
                    </div>
                    <div className="">
                        <h5 className='m-0 text-white'>CAMINO</h5>
                        <h6 className='text-white'>FINANCIAL</h6>
                    </div>
                </div>
            </a>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">ESPANOL</button>
        </nav>
    )
}

export default Navbar
