import React, {Component} from "react";
import Search from '../../components/Main/Search'
import Card from '../../components/Main/Card'
import "./styles.css";

//This is a View Model. It does not render anything itself, instead it pulls in other controls to render, and controls logic.
//It would have been cool if I could have had storybook working, but that wis for another time. 

class CardViewer extends Component{

    render (){
        return <div className='container'>
            <p className='title'>NBA Interview</p>
            <Search />
            <Card playerName='Gordon "Snake" Hayward' playerImageUrl='http://localhost:3008/gordon_hayward.png' playerTeamName='Boston Celtics' />
        </div>
    }
}

export default CardViewer;