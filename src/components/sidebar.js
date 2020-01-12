import React from 'react';
import '../css/sidebar.css';


function Sidebar(){
    return(
        <div>
            <div className="side">
            
            <nav>
                    <a className="link" href="/">Home</a>
                    <a className="link" href="/locations">Locations</a>         
                </nav>
            </div>                
        </div>

    );
}

export default Sidebar;