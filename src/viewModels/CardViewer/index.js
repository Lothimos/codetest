import React, {Component} from "react";
import axios from 'axios';
import queryHelper from '../../helpers/queryHelper'
import headerHelper from '../../helpers/headerHelper'
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

    constructor(props){
        super(props);
        this.state = {isLoading: true, playerData: [], showError: false, canMoveNext: false, canMovePrev: false, filterText: ''};
    }

    componentDidMount(){
        this._page = queryHelper.getParameterByName('page') ?? "1";

        //TODO: Store this in session, then test if it is there. We only need it once. 
        axios.get('http://localhost:3008/teams')
        .then(this.getTheTeamList)
        .catch(this.processPlayerDataError);     
    }

    componentWillUnmount(){
        this._unmounted = true;
    }


    render (){
        const bunchOfCards = this.state.playerData.map((dataItem, index)=>{
            return <Card key={index} playerName={dataItem.name} playerImageUrl={'http://localhost:3008/' + dataItem.image} playerTeamName={this.getTeamNameById(dataItem.team)} />
        });

    

        return <div className='cardViewerContainer'>
            <p className='title'>NBA Interview</p>
            {this.state.showError && <span> There was an error. Normally this would be in red or something. </span>}
            {!this.state.showError && <>
                {this.state.isLoading && <span> Loading...</span>}
                {!this.state.isLoading && <>
                    <div className="centeredThing">
                        <Search textValue={this.state.filter} updateFilterText={this.updateFilterText} />
                    </div>
                    <div className='flexContainer'>
                        {bunchOfCards}
                    </div>
                    <div className='centeredThing'>
                        <NextPrevNavigator nextUrl={this.state.canMoveNext ? '?page=' + (+this._page + 1) : ''} prevUrl={this.state.canMovePrev ? '?page=' + (+this._page - 1) : ''} />
                    </div>
                </>}
            </>}
        </div>
    }

    getTeamNameById(id){
        let team = this._teamList.find((team) =>{return team.id === id});
        if(team)
            return team.name;
    }

    getPayerData(){
        axios.get(`http://localhost:3008/players?_limit=10${this._page ? ('&_page=' + this._page) : ''}&q=${this.state.filterText}`)
        .then(this.assignPlayerData)
        .catch(this.processPlayerDataError); 
    }

    //Because anonymous functions consume more memory every time the component mounts or renders. This will do it once per class
    getTheTeamList = (result) => {
        if(this._unmounted)
            return;
        this._teamList = result.data.map((team)=>{ return {id: team.id, name: team.name}});

        this.getPayerData();  
    }

    assignPlayerData = (result) => {               
        //some variables to store things rather than set state over and over: 
        let canMoveNext;
        let canMovePrev;
        if(result.headers && result.headers["link"]){
            canMoveNext = headerHelper.getNextLink(result.headers["link"]) != null;
            canMovePrev = headerHelper.getPrevLink(result.headers["link"]) != null;
        }

        
        

        //I see now that you probably expected a single page app, in which the get changes. I made it just shift the page so its navigable in the browser. 

            
        this.setState({isLoading:false, playerData: result.data, canMoveNext: canMoveNext, canMovePrev: canMovePrev});
    }

    processPlayerDataError = (error) => {
        console.log(error);        
        this.setState({showError: true});
    }

    //view models always handle events. The UI should be dumb and pass back their information to the view model...
    updateFilterText = (filterText) => {
        this.setState({filterText: filterText});

        //TODO: Put this on a delay to avoid hammering your server.... 
        this.getPayerData();
    }
}

export default CardViewer;