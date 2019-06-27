import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
import './index.css';





const CharacterCard = props =>(
    <div className="col-xs-12 col-lg-4 mt-3 mb-3 p-2">
    <Card className="cardDad">

        <CardBody className="col-md-12 bod" id="crdBd">
        <div className="col-md-4 col-offset-2 m-0 side-crop p-1">
        <CardImg top src={props.character.imageUrl} alt="Card image cap" className="sideCropImg" />
        </div>
          <div className="cardTitles text-center text-underline p-2 h5 mt-4">
      
            <CardTitle ><p>{props.character.name}</p></CardTitle>
            
            <CardSubtitle className="h4 pb-0"><u>Race</u></CardSubtitle>
              <CardText>(race here)</CardText>
            <CardSubtitle className="h4 pb-0"><u>Class</u></CardSubtitle>
              <CardText>(race here)</CardText>

            <hr></hr>
            <div className="row text-center mx-auto">
              <CardText className="col-md-4 p-0 ">STR: </CardText>
              <CardText className="col-md-4 p-0 ">DEX: </CardText>
              <CardText className="col-md-4 p-0 ">INT: </CardText>
            </div>
            <div className="row mx-auto text-center">
              <CardText className="col-md-4 p-0 ">CON: </CardText>
              <CardText className="col-md-4 p-0 ">WIS: </CardText>
              <CardText className="col-md-4 p-0 ">CHA: </CardText>
            </div>
       
          </div>
        </CardBody>
      </Card>
    </div>
);


export default CharacterCard;