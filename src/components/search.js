import React from 'react';
import '../css/header.css';

class Search extends React.Component {
    handleOnchange = (e) => {
        e.preventDefault();
    }
    handleOnClick = (e) => {
        e.preventDefault();
        
    }

    render() {
        return(
            <div className="search-bar">
                <link rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>    
                <form>
                    <input type="text" className="s-query" onChange={this.handleOnchange} placeholder="Search location" />
                    <button type="submit" onClick={this.handleOnClick}><i className="fa fa-search"></i></button>
                </form>
                
            </div>
        );
    }

}

export default Search;