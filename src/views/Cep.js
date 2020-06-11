import React from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import { alertService } from '../components/Alert/Services';
import { Alert } from '../components/Alert';
// components
const style = {
    width: '100%',
    height: '100%'
  }
class IndexMaps extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        redirect: false,
        numero: '',
        cep:  '',
        lat:'0',
        lng:'0',
        endereco:'',
        cidade:'',
        nome:'',
        }
    }
    
    componentDidMount(){
      if(typeof(this.props.location.state) !== 'undefined'){
        this.setState({
          nome:this.props.location.state.nome,
        })
        let autoClose = true;
        let keepAfterRouteChange  = true;
        alertService.success('Você está apto a doar sangue, Parabéns!!', { autoClose, keepAfterRouteChange })
        console.log('chefou')
      } 
    }

  


  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
 
  
  renderRedirect = () => {
    if (this.state.redirect) {  
        return <Redirect to={{
            pathname: '/mapa',
            state: {
              lat:this.state.lat,
              lng:this.state.lng,
              lat1: -23.5078995,
              lng1: -46.58795139999999,
              lat2: -23.5102,
              lng2: -46.5163717,
              lat3: -23.5958894,
              lng3: -46.68984529999999,
              lat4: -23.5529814,
              lng4: -46.6406297,
              lat5: '',
              lng5: '',
              lng6: -46.58795139999999,
              lat7: -23.5078995,
              lng7: -46.58795139999999,
              lat8: -23.5078995,
              lng8: -46.58795139999999,
              lat9: -23.5078995,
              lng9: -46.58795139999999,
              lat10: -23.5078995,
              lng10: -46.58795139999999,
            }
        }} />
    }
  }

   buscar = () => {
    let numero = this.state.numero;
    fetch('http://viacep.com.br/ws/'+this.state.cep+'/json/').then(response => response.json()).then(data => {
        this.setState({
            endereco: data.logradouro.split(" ").join("%20"),
            cidade: data.localidade.split(" ").join("%20"),
            numero: "%20"+numero,
        }) ;
        // console.log('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBm5xD22Qaw9aSERJeKRQymyv9LB6dwhRk&sensor=false&address='+this.state.endereco+','+this.state.numero+',%20'+this.state.cidade)
      })
      .then(() => {
        //   console.log(this.state.endereco) 
        fetch(
            'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBm5xD22Qaw9aSERJeKRQymyv9LB6dwhRk&sensor=false&address=' +
            this.state.endereco + ',' + this.state.numero + ',%20' + this.state.cidade)
          .then(response => response.json())
          .then(data =>  { 
            let lat = data.results[0].geometry.location.lat
            let lng = data.results[0].geometry.location.lng
            this.setState({
              lat: lat,
              lng: lng,
              redirect:true
            })
          })
      })

}

  render() {
    return (
        <>
        <Container className={style.all}>
        <Row>
        <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
        <div className="card-body">
        {this.renderRedirect()}
     
        <Alert />
        <br></br>
        <input 
            type="text" 
            id="cep" 
            name="cep"
            placeholder="digite seu cep"
            onChange={this.handleChange}
        />
        <br></br>
        <input 
            type="text" 
            name="numero"
            id="numero" 
            placeholder="digite o número"
            onChange={this.handleChange}
        />
          <br></br>
        <input 
            type="button"
            value="buscar"
            onClick={this.buscar}
        />
             
          </div>
          </div>
          </Col>
          </Row>
          </Container>
    </>
    );
    }
}

export default IndexMaps;
