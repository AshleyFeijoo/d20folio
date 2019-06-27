import React from 'react';
import {Col, Row, Container, Jumbotron} from 'reactstrap';
// import seeds from './charSeeds.json';
import CharacterCard from '../../components/CharacterCard/';
import API from '../../util/API';

export default class ViewAllCharacters extends React.Component{
    state = {
       characters: []
    }
    fetchCharacters = () => (
        API.getAllCharacters()
            .then(characters => this.setState({characters: characters}) )
    )
    componentDidMount(){
        this.fetchCharacters();
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Jumbotron>
                            <h1 className="mb-2 mt-1 display-3 border-bottom border-dark">Welcome to D2Folio!</h1>
                            <h3 className="h1"> Here are all the current characters:</h3>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                        {
                            this.state.characters.map((character, id )=> (
                                <CharacterCard character={character} key={id}/>
                            ))
                        }
                
                </Row>

            </Container>
        )
    }

}