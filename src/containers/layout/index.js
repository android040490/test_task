import React from 'react'
import Sidebar from 'components/sidebar'
import Search from 'components/search'

const Layout = ({children}) => (
    <div className='pt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-lg-3'>
                    <Sidebar>
                        <Search/>
                    </Sidebar>
                </div>
                <div className='col-md-8 col-lg-9'>
                    {children}
                </div>
            </div>
        </div>
    </div>
)

export default Layout