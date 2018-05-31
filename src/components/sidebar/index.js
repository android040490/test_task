import React from 'react';

import Search from 'components/search';

const Sidebar = ({children}) => {
    return (
    <div className='sidebar'>
        {children}
    </div>
    );
} ;


export default Sidebar;