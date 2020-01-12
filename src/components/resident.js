import React from 'react';
class Resident extends React.Component{
    state={
        loading: true,
        planets : null,
        residents: [],
    };
    async componentDidMount(){
        let id = sessionStorage.getItem("id")-1;
        console.log(id);
        const url="https://rickandmortyapi.com/api/location/";
        const response=await fetch(url);
        const data=await response.json();
        this.setState({planets: data.results[id], loading:false})
        
    }
    render(){
        if (this.state.loading)
        {
            return <div>page loading...</div>;
        }
        if(!this.state.planets)
        {
            return <div>Didn't get a planet</div>;
        }  
        return(
            <div>
                <div><h1>Locations-{this.state.planets.name}</h1></div>
                <p><b>Type:</b> {this.state.planets.type}</p>
               <p><b>Created:</b> {this.state.planets.created}</p>
                <p><b>Dimension:</b> {this.state.planets.dimension}</p>
                <p><b>Residents:</b></p>
                {this.state.planets.residents.map(planet =>(
                    <div key={planet} >
                        <div>{planet}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Resident;