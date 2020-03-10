import React, {Component} from "react";
import axios from 'axios';
import queryHelper from '../../helpers/queryHelper'
import Search from '../../components/Main/Search'
import Card from '../../components/Main/Card'
import "./styles.css";
import NextPrevNavigator from "../../components/Main/NextPrevNavigator";

//This is a View Model. It does not render anything itself, instead it pulls in other controls to render, and controls logic.
//It would have been cool if I could have had storybook working, but that wis for another time. 

class CardViewer extends Component{
    _teamList = []; 
    _unmounted = false;
    //I don't need state for these as they are not used to refresh the page. Rather to navigate to another page.
    _page; //I declared these here so you would know he was used later. 
    _prevUrl;
    _nextUrl;

    constructor(props){
        super(props);
        this.state = {isLoading: true, playerData: [], showError: false};
    }

    componentDidMount(){
        this._page = queryHelper.getParameterByName('page') ?? "0";

        //TODO: Store this in session, then test if it is there. We only need it once. 
        axios.get('http://localhost:3008/teams')
        .then(this.getTheTeamList)
        .catch(this.processPlayerDataError);     
    }

    componentWillUnmount(){
        this._unmounted = true;
    }

    //TODO: Flexbox still needs work. I hoping that I could get the wrap working. 
    render (){
        const bunchOfCards = this.state.playerData.map((dataItem, index)=>{
            return <Card key={index} playerName={dataItem.name} playerImageUrl={'http://localhost:3008/' + dataItem.image} playerTeamName={this.getTeamNameById(dataItem.team)} />
        });

        return <div className='container'>
            <p className='title'>NBA Interview</p>
            {this.state.showError && <span> There was an error. Normally this would be in red or something. </span>}
            {this.state.isLoading && <span> Loading...</span>}
            {!this.state.isLoading && <>
                <Search />
                <div className='flexContainer'>
                    {bunchOfCards}
                </div>
                <NextPrevNavigator />
            </>}
        </div>
    }

    getTeamNameById(id){
        let team = this._teamList.find((team) =>{return team.id === id});
        if(team)
            return team.name;
    }

    //Because anonymous functions consume more memory every time the component mounts or renders. This will do it once per class
    getTheTeamList = (result) => {
        if(this._unmounted)
            return;
        this._teamList = result.data.map((team)=>{ return {id: team.id, name: team.name}});

        axios.get(`http://localhost:3008/players?_limit=10${this._page ? ('&_page=' + this._page) : ''}`)
        .then(this.assignPlayerData)
        .catch(this.processPlayerDataError);   
    }

    assignPlayerData = (result) => {        
        console.log(result);          
        this.setState({isLoading:false, playerData: result.data});
    }

    processPlayerDataError = (error) => {
        console.log(error);        
        this.setState({showError: true});
    }

    //Running out of time for tonight, but I wanted to show how I would handle the events in the card. We want to pass them back into the view model,
    //and let this decide how to work. Then we can swap out UI components as needed and keep the same business logic tied into the view model. 
    saveCardEdit(playerId, firstName, etc){
        //axios.patch(`http://localhost:3008/players/${playerId}`, {
        // object values would go here. 
        //})
    }
}

export default CardViewer;