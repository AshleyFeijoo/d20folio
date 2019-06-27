import React from 'react';
// import Api from '../../util/API';
import {Container, Row, Col, Button, FormGroup, Label, Input, Jumbotron} from 'reactstrap';
import API from '../../util/API';

export default class EditCharacter extends React.Component{
    state = {
        name: "x",
        imageUrl: "x",

        STR: "10",
        DEX: "10",
        CON: "10",
        INT: "10",
        WIS: "10",
        CHA: "10",

    }
    handleInput = field => event => {
        const {value}=event.target;
        this.setState ({
            [field]: value
        })
    }

    clearForm = () => {
        this.setState({Name: "", imageUrl: "",
        STR: "10", DEX: "10", CON: "10",
        INT: "10", WIS: "10", CHA: "10"});
    }
    submitCharacterCreation = () =>{
        const newChar = {
            name: this.state.name,
            imageUrl: this.state.imageUrl,
            STR: this.state.STR,
            DEX: this.state.DEX,
            CON: this.state.CON,
            INT: this.state.INT,
            WIS: this.state.WIS,
            CHA: this.state.CHA
        }
        API.createCharacter(newChar)
            .then(() => this.clearForm())
    }


    render() {
        return (
             this.props.new?
             <Container className="mx-auto">
             <Jumbotron><h1>Create a new Character</h1></Jumbotron>
                <Row className="mx-auto text-center justify-content-center p-2">
                    <Col md={6} xs={12} className="m-0">

                    <FormGroup>
                    <div className="label-head p-2 mx-auto">
                        <Label className=""><u>Character Name:</u></Label>
                    </div>
                    <div className="inputParent rounded p-2 mx-auto">
                        <Input
                            name = "name"
                            value={this.state.name}
                            onChange={this.handleInput("name")}
                        />
                        </div>
                    </FormGroup>
                    <FormGroup>
                    <div className="label-head p-2 mx-auto">
                        <Label>Character Image: </Label>
                    </div>
                    <div className="inputParent rounded p-2 mx-auto">
                        <Input
                            name = "Image"
                            value={this.state.imageUrl}
                            onChange={this.handleInput("imageUrl")}
                        />
                        </div>
                    </FormGroup>

                    <img alt="" src={this.state.imageUrl} className="img-fluid img-circle "></img>
                    </Col>

                    <Col md={6} xs={12}>
                        <div className="row text-center justify-content-around">
                            <FormGroup  className="col-xs-12 col-md-3 p-0 text-center">
                                <div className="label-head p-2 mx-auto">
                                    <Label className="text-center m-0 border-bottom border-dark">Strength:</Label>
                                </div>
                                <div className="inputParent rounded p-1 mx-auto text-center">
                                    <Input
                                        name = "Str"
                                        value={this.state.STR}
                                        onChange={this.handleInput("STR")}
                                        type="number"
                                        min="3" max="18"
                                        className="p-0 text-center"
                                    />
                                </div>
                            </FormGroup>
                        
                            <FormGroup  className="col-xs-12 col-md-3 p-0 text-center ">
                                <div className="label-head p-2 mx-auto">
                                    <Label className="text-center m-0 border-bottom border-dark">
                                        Dexterity: 
                                    </Label>
                                </div>
                                <div className="inputParent rounded p-1 mx-auto text-center">
                                    <Input
                                        name = "Dex"
                                        value={this.state.DEX}
                                        onChange={this.handleInput("DEX")}
                                        type="number"
                                        min="3" max="18"
                                        className="p-0 text-center"
                                    />
                                </div>
                            </FormGroup>
                            
                            <FormGroup  className="col-xs-12 col-md-3 p-0 text-center">
                                <div className="label-head p-2 mx-auto">
                                    <Label className="text-center m-0 border-bottom border-dark">
                                        Constitution:
                                    </Label>
                                </div>
                                <div className="inputParent rounded p-1 mx-auto text-center">
                                    <Input
                                        name = "Con"
                                        value={this.state.CON}
                                        onChange={this.handleInput("CON")}
                                        type="number"
                                        min="3" max="18"
                                        className="p-0 text-center"
                                    />
                                </div>
                            </FormGroup>
                        </div>
                        <div className="row text-center justify-content-around">
                            <FormGroup  className="col-xs-12 col-md-3 p-0 text-center">
                                <div className="label-head p-2 mx-auto">
                                    <Label className="text-center m-0 border-bottom border-dark">
                                        Intelligence
                                    </Label>
                                </div>
                                <div className="inputParent rounded p-1 mx-auto text-center">
                                    <Input
                                        name = "Int"
                                        value={this.state.INT}
                                        onChange={this.handleInput("INT")}
                                        type="number"
                                        min="3" max="18"
                                        className="p-0 text-center"

                                    />
                                </div>
                            </FormGroup>
                            <FormGroup className="col-xs-12 col-md-3 p-0 text-center">
                            <div className="label-head p-2 mx-auto">
                            <Label className="text-center m-0 border-bottom border-dark">Wisdom</Label>
                            </div>
                            <div className="inputParent rounded p-1 mx-auto text-center">
                                    <Input
                                        name = "Wis"
                                        value={this.state.WIS}
                                        onChange={this.handleInput("WIS")}
                                        type="number"
                                        min="3" max="18"
                                        className="p-0 text-center"
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup className="col-xs-12 col-md-3 p-0 text-center">
                            <div className="label-head p-2 mx-auto">
                                <Label>Charisma</Label>
                                </div>
                                <div className="inputParent rounded p-1 mx-auto text-center">
                                <Input
                                    name = "Cha"
                                    value={this.state.CHA}
                                    onChange={this.handleInput("CHA")}
                                    type="number"
                                    min="3" max="18"
                                    className="p-0 text-center"
                                /></div>
                            </FormGroup>
                        </div>
                   
                    </Col>

                    <Col md={12}>
                        <Button onClick={this.submitCharacterCreation}>
                            Create Character
                        </Button>
                    </Col>
                </Row>
             </Container>
             : null
        );
    }
};
