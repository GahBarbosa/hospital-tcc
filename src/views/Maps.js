import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Container, Row, Col } from "reactstrap";

const K_WIDTH = 40;

const Style = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_WIDTH,
  left: -K_WIDTH / 2,
  top: -K_WIDTH / 2,

  border: '5px solid #f44336',
  borderRadius: K_WIDTH,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
};

const StyleHover = {
  ...Style,
  border: '5px solid #3f51b5',
  color: '#f44336'
};


class Mapa extends Component {
  
  static defaultProps = {
    center: {
      lat: -23.618237,
      lng: -46.635197
    },
    zoom: 15
  };
 
  
  constructor(props) {
    super(props);
    this.state = {
      lat:1,
      lng:1,
      nome:'',
      endereco:'',
      }
  }
  componentDidMount(){
    console.log('mapa',this.props.location)
    this.setState({
      lat:this.props.location.state.lat,  
      lng:this.props.location.state.lng,
      latUsuario:this.props.location.state.lat,  
      lngUsuario:this.props.location.state.lng,
      lat1:this.props.location.state.lat1,  
      lng1:this.props.location.state.lng1,
      lat2:this.props.location.state.lat2,  
      lng2:this.props.location.state.lng2,
      lat3:this.props.location.state.lat3,  
      lng3:this.props.location.state.lng3,
      lat4:this.props.location.state.lat4,  
      lng4:this.props.location.state.lng4,
      lat5:this.props.location.state.lat5,  
      lng5:this.props.location.state.lng5,
      lat6:this.props.location.state.lat6,  
      lng6:this.props.location.state.lng6,
      lat7:this.props.location.state.lat7,  
      lng7:this.props.location.state.lng7,
      lat8:this.props.location.state.lat8,  
      lng8:this.props.location.state.lng8,
      lat9:this.props.location.state.lat9,  
      lng9:this.props.location.state.lng9,
      lat10:this.props.location.state.lat10,  
      lng10:this.props.location.state.lng10,
    })
  }
 
  buscar = () => {
    console.log(this.state.lat,this.state.lng)
    console.log(Style)
  }

  handleHover = (event) => {
    let element = document.getElementById(event.target.id)
    let nome = element.getAttribute("nome")
    let endereco = element.getAttribute("endereco")
    this.setState({
      nome:nome,
      endereco: endereco
    })
  };

  handleClick = (event) => {
  
  };


  render() {
    const style = this.props.$hover ? StyleHover : Style;
        
    // const apiIsLoaded = (map,maps) => {
    //   const directionsService = new maps.DirectionsService();
    //   const directionsDisplay = new maps.DirectionsRenderer();
    //   directionsService.route({
    //     origin: 'Av 565 145, San Juan de Aragón II Secc, 07969 Ciudad de México, CDMX, Mexico',
    //     destination: 'Piña MZ3 LT8, Ampliacion Lopez Portillo, 13400 Ciudad de México, CDMX, Mexico',
    //     travelMode: 'DRIVING'
    //   }, (response, status) => {
    //     if (status === 'OK') {
    //       directionsDisplay.setDirections(response);
    //       console.log(response.routes[0].overview_path, 'Ruta')
    //       const routePolyline = new google.maps.Polyline({
    //         path: response.routes[0].overview_path
    //       });
    //       routePolyline.setMap(map);
    //     } else {
    //       window.alert('Directions request failed due to ' + status);
    //       }
    //     });
    // };


    return (
      <Container>
      <Row>
        <Col>
          <div >
          <input 
            type="button"
            value="buscar"
            onClick={this.buscar}
            onMouseEnter={this.someHandler}
          />
          <h1>{this.state.nome}</h1>
          <h1>{this.state.endereco}</h1>
          </div>
          
        </Col>
        <Col>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyBm5xD22Qaw9aSERJeKRQymyv9LB6dwhRk" }}
          defaultCenter= {{
            lat:this.state.lat,
            lng: this.state.lng
          }}
          defaultZoom={this.props.zoom}
          // yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
        >
          <div
            id="usuario"
            lat={this.state.latUsuario}
            lng={this.state.lngUsuario}
            style={style}
          > Você</div>
          <div
            onMouseEnter={this.handleHover}
            onMouseDown={this.handleClick}
            id="hospital1"
            lat={this.state.lat1}
            lng={this.state.lng1}
            style={style}
            nome="hospital 1 nome"
            endereco='rua xxxxxxx 0'
          />
          <div
            onMouseEnter={this.handleHover}
            onMouseDown={this.handleClick}
            id="hospital2"
            lat={this.state.lat2}
            lng={this.state.lng2}
            style={style}
            nome = ' hospital 2'
            endereco = 'rua  xxxx 3'
          />
          <div
            onMouseEnter={this.handleHover}
            onMouseDown={this.handleClick}
            id="hospital3"
            lat={this.state.lat3}
            lng={this.state.lng3}
            style={style}
            nome = ' hospital 3 '
            endereco = 'rua xxxxx 3'
          />
             {/* <div onMouseEnter={this.someHandler}
            id="hospital4"
            lat={this.state.lat4}
            lng={this.state.lng4}
            style={style}
          /> */}
            {/* <div
              id="hospital5"
              lat={this.state.lat5}
              lng={this.state.lng5}
              style={style}
            /> */}
              {/* <div onMouseEnter={this.someHandler}
            id="hospital6"
            lat={this.state.lat6}
            lng={this.state.lng6}
            style={style}
          /> */}
             {/* <div onMouseEnter={this.someHandler}
            id="hospital7"
            lat={this.state.lat7}
            lng={this.state.lng7}
            style={style}
          /> */}
              {/* <div onMouseEnter={this.someHandler}
            id="hospital8"
            lat={this.state.lat8}
            lng={this.state.lng8}
            style={style}
          /> */}
           {/* <div onMouseEnter={this.someHandler}
            id="hospital9"
            lat={this.state.lat9}
            lng={this.state.lng9}
            style={style}
          /> */}
            {/* <div onMouseEnter={this.someHandler}
            id="hospital10"
            lat={this.state.lat10}
            lng={this.state.lng10}
            style={style}
          /> */}
        </GoogleMapReact>
      </div>
      </Col>
      </Row>
      </Container>
    );
  }
}
 
export default Mapa;