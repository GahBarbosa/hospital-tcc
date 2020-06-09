import React, { PropTypes, Component } from 'react';
import GoogleMapReact from 'google-map-react';
const Hospital = ({ text,style }) => <div style={style}>{text}</div>;
const Usuario = ({ text, style }) => <div style={style}>{text}</div>;
 
const K_WIDTH = 40;
const K_HEIGHT = 40;
const style = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
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
    console.log(style)
  }

  render() {
    return (
      <>
        <input 
                type="button"
                value="buscar"
                onClick={this.buscar}
            />
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyBm5xD22Qaw9aSERJeKRQymyv9LB6dwhRk" }}
          defaultCenter= {{
            lat:this.state.lat,
            lng: this.state.lng
          }}
          defaultZoom={this.props.zoom}
        >
          <Usuario
            lat={this.state.latUsuario}
            lng={this.state.lngUsuario}
            text="Você"
            style={style}
          />
          <Hospital
            lat={this.state.lat1}
            lng={this.state.lng1}
            text={"1"}
            style={style}
          />
            <Hospital
            lat={this.state.lat2}
            lng={this.state.lng2}
            text="2"
            style={style}
          />
           <Hospital
            lat={this.state.lat3}
            lng={this.state.lng3}
            text="3"
              style={style}
          />
           <Hospital
            lat={this.state.lat4}
            lng={this.state.lng4}
            text="4"
            style={style}
          />
           {/* <Hospital
            lat={this.state.lat5}
            lng={this.state.lng5}
            text="My Hospital"
              style={style}
          /> */}
           {/* <Hospital
            lat={this.state.lat6}
            lng={this.state.lng6}
            text="My Hospital"
              style={style}
          /> */}
           {/* <Hospital
            lat={this.state.lat7}
            lng={this.state.lng7}
            text="My Hospital"
              style={style}
          /> */}
           {/* <Hospital
            lat={this.state.lat8}
            lng={this.state.lng8}
            text="My Hospital"
              style={style}
          /> */}
          {/* <Hospital
            lat={this.state.lat9}
            lng={this.state.lng9}
            text="My Hospital"
              style={style}
          /> */}
          {/* <Hospital
            lat={this.state.lat10}
            lng={this.state.lng10}
            text="My Hospital"
              style={style}
          />  */}
        </GoogleMapReact>
      </div>
      </>
    );
  }
}
 
export default Mapa;