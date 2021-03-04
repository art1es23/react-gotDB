import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';

import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ErrorMessage from '../errorMessage';
import ItemList from '../itemList';
import itemDetails from '../itemDetails';

import gotService from '../../services/gotServices';
import './app.css';

export default class App extends Component {
    
    gotService = new gotService();
    state = {
        showRandomChar: true,
        error: false
    }

    componentDidCatch () {
        console.log('Error');
        this.setState({
            error: true
        });
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render () {

        if ( this.state.error ) {
            return <ErrorMessage/>
        }

        const char = this.state.showRandomChar ? <RandomChar/> : null;

        return (
            <>
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <button 
                                    className="toggle-btn"
                                    onClick={this.toggleRandomChar}>Toggle random character</button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected={this.onItemSelected}
                                getData={this.gotService.getAllBooks}
                                renderItem={({name, publisher}) => `${name} (${publisher})`}/>
                        </Col>
                        <Col md='6'>
                            <itemDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected={this.onItemSelected}
                                getData={this.gotService.getAllHouses}
                                renderItem={({name, region}) => `${name} (${region})`}/>
                        </Col>
                        <Col md='6'>
                            <itemDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );    
    }
}