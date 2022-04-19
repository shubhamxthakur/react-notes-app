import React from 'react';

const Header = ({handleToggleMode}) => {
    return(
        <div className='header'>
            <h1>My Notes</h1>
            <button 
                onClick={ ()=>  handleToggleMode(          (previousMode)=> !previousMode
                )} 
                className='save'
                >
                    Toggle Mode</button>
        </div>
    )
}

export default Header;