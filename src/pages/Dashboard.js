import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add'

import Container from '../components/Container';
import PlaceHorizontal from '../components/places/PlaceHorizontal';

import data from '../requests/places';

import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component{

    constructor(props){
        super(props);
    
        this.state = {
          places: data.places
        }
    }

    places(){
        return this.state.places.map((place,index)=>{
            return <PlaceHorizontal place={place} />
        })
    }
    render(){
        return(
            <div>
                <Link to="/new" />
                <FloatingActionButton className="Fab" secondary={true}>
                    <ContentAdd />
                </FloatingActionButton>
                <Container>
                    <div class="row">
                        <div className="col-xs-12 col-md-2" style={{'textAlign':'left'}}>
                            <FlatButton label="Explorar" />
                            <FlatButton label="Favoritos" />
                            <FlatButton label="Visitas Previas" />
                        </div>
                        <div className="col-xs-12 col-md-10">
                            {this.places()}
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

}