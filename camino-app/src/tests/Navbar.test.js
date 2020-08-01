import React from 'react'
import { shallow } from 'enzyme'
import Navbar from '../components/layout/Navbar'
import { findByTestAtrr } from '../../Utils/index'

const setUp = ( props = {} ) => {
    const component = shallow(<Navbar {...props} /> )
    return component
}

describe('Navbar Component', () => {
    let component;
    beforeEach(() => {
        component = setUp()
    })

    it('Should render without error', () => {
        const wrapper = findByTestAtrr(component, 'navbarComponent')
        expect(wrapper.length).toBe(1)
    })

    it('Should render without error', () => {
        const wrapper = findByTestAtrr(component, 'logoIMG')
        expect(wrapper.length).toBe(1)
    })
})
