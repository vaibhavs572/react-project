import React from 'react';
import '../css/locations.css';


class Locations extends React.Component{
    state={
        loading: true,
        planets : [],
        // resident: [],
    };
    async componentDidMount(){
        const url="https://rickandmortyapi.com/api/location/";
        const response=await fetch(url);
        const data=await response.json();
        this.setState({planets: data.results, loading:false})
        console.log(data.results);
    }
    render(){
        if (this.state.loading)
        {
            return <div>page loading...</div>;
        }
        if(!this.state.planets.length)
        {
            return <div>Didn't get a planet</div>;
        }    
        return(
            <div>
                <h1>Locations</h1>
                {this.state.planets.map(planet =>(
                    <div className="planets" key={planet.id} >
                        
                        <a href="./resident.js" onClick={()=> {sessionStorage.setItem("id",planet.id)}} style={{ textDecoration: 'none' }}>
                        <div className="names" >{planet.name}</div>
                        <div className="types">{planet.type}</div>
                        <div className="residents">{planet.residents.length} Residents</div>
                        </a>
                    </div>
                ) )}
            </div>
        );
    }
}

export default Locations;
