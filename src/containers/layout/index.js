import React from 'react'
import Sidebar from 'components/sidebar'
import Search from 'components/search'
import Pagination from 'components/pagination'

const Layout = ({children}) => (
    <div className='pt-5'>
        <div className='container'>
            <div className='row'>
            
                <div className='col-12'>
                    <Pagination />
                </div>
            
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