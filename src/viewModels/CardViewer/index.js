import React, {Component} from "react";
import axios from 'axios';
import Search from '../../components/Main/Search'
import Card from '../../components/Main/Card'
import "./styles.css";

//This is a View Model. It does not render anything itself, instead it pulls in other controls to render, and controls logic.
//It would have been cool if I could have had storybook working, but that wis for another time. 

class CardViewer extends Component{

    constructor(props){
        super(props);
        this.state = {isLoading: true, playerData: [], showError: false};
    }

    componentDidMount(){
        axios.get('http://localhost:3008/players')
        .then(this.assignPlayerData)
        .catch(this.processPlayerDataError);        
    }

    render (){
        return <div className='container'>
            <p className='title'>NBA Interview</p>
            {this.state.showError && <span> There was an error. Normally this would be in red or something. </span>}
            {this.state.isLoading && <span> Loading...</span>}
            {!this.state.isLoading && <>
                <Search />
                <Card playerName='Gordon "Snake" Hayward' playerImageUrl='http://localhost:3008/gordon_hayward.png' playerTeamName='Boston Celtics' />
            </>}
        </div>
    }

    //Because anonymous functions consume more memory every time the component mounts or renders. This will do it once per class
    assignPlayerData= (result) => {        
        console.log(result);          
        this.setState({isLoading:false, playerData: result.data});
    }

    processPlayerDataError = (error) => {
        console.log(error);        
        this.setState({showError: true});
    }
}

export default CardViewer;