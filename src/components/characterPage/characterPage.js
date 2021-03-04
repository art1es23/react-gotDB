import React, { Component } from 'react';
// import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import './characterPage.css';
import gotService from '../../services/gotServices';
import RowBlock from '../rowBlock';

export default class CharacterPage extends Component {
    
    gotService = new gotService();
    
    state = {
        selectedChar: 130,
        error: false
    } 

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        });
    }

    componentDidCatch () {
        this.setState({
            error: true
        });
    } 

    render () {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                        onCharSelected={this.onCharSelected}
                        getData={this.gotService.getAllCharacters}
                        renderItem={({name, gender}) => `${name} (${gender})`}/>
        )

        const charDetails = (
            <CharDetails charId={this.state.selectedChar}/>      
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}