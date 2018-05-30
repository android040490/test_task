import React from 'react'
import Sidebar from 'components/sidebar'

const Layout = ({children}) => (
    <div className='pt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar/>
                </div>
                <div className='col-md-9'>
                    {children}
                </div>
            </div>
        </div>
    </div>
)

export default Layout