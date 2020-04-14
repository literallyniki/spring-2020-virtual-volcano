import React, { Component } from 'react';
import Footer from '../template/Footer';
import Header from '../template/Header';
import ResultForm from '../forms/ResultForm';
import MapContainer from '../forms/MapContainer';
import axios from "axios";

class ResultPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                lat: 35.9039889,
                lng: -70.9261412,
            }
            //data: [],
        }


    }

    //   get the final midpoint location
    componentDidMount() {
        axios.get("http://localhost:3000/result")
            .then((response) => {
                console.log("These are the coordinates");
                console.log(response);
                this.setState({ data: response.data })
                console.log(this.state.data);
                console.log(typeof (parseFloat(this.state.data.lat)));
                //console.log(this.state.data.lat);
                //console.log(this.state.data.lng);
                //var lat = this.state.data.lat;
                //var lng = this.state.data.lng;
                // console.log(lat);
                // console.log(lng);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        console.log(this.state.data.lat);
        return (
            <div>
                <Header />
                <ResultForm />
                <MapContainer
                    google={this.props.google}
                    //center={{ lat: 40.9039889, lng: -73.9261412 }}
                    center={{ lat: this.state.data.lat, lng: this.state.data.lng }}
                    height='300px'
                    zoom={15}
                />
                <Footer />
            </div>
        )
    }
}


export default ResultPage;
