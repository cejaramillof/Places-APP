import React from 'react';

import { withRouter } from 'react-router-dom';

import { getPlace } from '../requests/places';
import Container from '../components/Container';
import {Card} from 'material-ui/Card';

class Place extends React.Component{ 

    constructor(props){
        super(props);
        const slug = props.match.params.slug;

        this.loadPlace(slug);

        this.state = {
            place: {}
        }
    }

    loadPlace(slug){
        getPlace(slug).then(json=>{
            console.log(json);

            this.setState({
                place: json
            })
        })
    }

    render(){
        const { place } = this.state;
        return(
            <div className="Place-container">
                <header className="Place-cover" style={{'backgroundImage':'url('+place.coverImage+')'}}></header>
                <container>
                    <div className="row">
                        <div className="col-xs-12 col-md-8">
                            <Card className="Place-card">
                                <div className="col-xs-12 col-sm-3 col-lg-2">
                                    <img src={place.avatarImage} style={{'maxWidth': '100%'}} />
                                </div>
                                <div className="col-xs">
                                    <h1>{place.title}</h1>
                                    <address>{place.address}</address>
                                    <p>{place.description}</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </container>
            </div>
        );
    }
}

export default withRouter(Place);