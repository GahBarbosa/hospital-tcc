import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import style from '../assets/css/style.css';

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      nome:  '',
      permanente: false,
      nivel4_1: false,
      nivel4_2: false,
      nivel4_3: false,
      nivel4_4: false,
      nivel3_1: false,
      nivel3_2: false,
      nivel2_1: false,
      nivel2_2: false,
      nivel1: false,
      idade: '',
      peso : false,
      nivelfinal: 0,
      redirect:false
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
      if(this.state.nivelfinal == 0) {
        return <Redirect to={{
          pathname: '/cep',
          state: {nome: this.state.nome}
          }} />
      } else {
        return <Redirect to={{
        pathname: '/resultado',
        state: {nome: this.state.nome, nivelfinal: this.state.nivelfinal}
        }} />
      }
    }
    
}

  handleSubmit = event => {
    event.preventDefault()
    if(this.state.permanente == true){
      this.setState({nivelfinal:6,redirect:true})
    }
     else if(this.state.peso == true){
      this.setState({nivelfinal:5,redirect:true})
    }
     else if(this.state.nivel4_1 == true || this.state.nivel4_2  == true|| this.state.nivel4_3 == true || this.state.nivel4_4 == true){
      this.setState({nivelfinal:4,redirect:true})
    } 
    else if(this.state.nivel3_1  == true|| this.state.nivel3_2 == true){
      this.setState({nivelfinal:3,redirect:true})
    } 
    else if(this.state.nivel2_1  == true|| this.state.nivel2_2 == true){
      this.setState({nivelfinal:2,redirect:true})
    }
    else if(this.state.nivel1 == true){
      this.setState({nivelfinal:1,redirect:true})
    }
    else {
      this.setState({nivelfinal:0,redirect:true})
    }
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 12? 13: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button
        className="btn btn-secondary btn-round"
        type="button" onClick={this._prev}>
      Anterior
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <13){
    return (
      <button
        className="btn btn-primary btn-round float-right"
        type="button" onClick={this._next}>
      Próxima
      </button>
    )
  }
  return null;
}

  render() {
    return (
    <>
    <div className="section">
    <Container className={style.all}>
    <Row>
    <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
    <div className="card card-signin my-5">
    <div className="card-body">
    {this.renderRedirect()}
      <h3>Olá, {this.state.nome} </h3>

      <form onSubmit={this.handleSubmit}>
        <Nome
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          nome={this.state.nome}
        />

        {/* 16 e 69 */}
        <Idade
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          idade={this.state.idade}
        />

        {/* acima de 50kg */}
        <Peso
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          peso={this.state.peso}
        />

        {/* Impedimentos 12 meses */}
        <Filho
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          nivel={this.state.nivel}
        />
        <LugarRisco
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            nivel={this.state.nivel}
        />
        <Tattoo
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          nivel={this.state.nivel}
        />
        <SexoRisco
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          nivel={this.state.nivel}
        />

        {/* Impedimentos 6 meses */}
        <Herpes
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          nivel={this.state.nivel}
        />
        <Endoscopico
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          nivel={this.state.nivel}
        />

        {/* Impedimentos 7 dias */}
        <Dente
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          nivel={this.state.nivel}
        />
        <Resfriado
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          nivel={this.state.nivel}
        />

        {/* Impedimentos 48 horas */}
        <VacinaGripe
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          nivel={this.state.nivel}
        />

        {/* Impedimentos Definitivos */}
        <Definitivos
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          permanente={this.state.permanente}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
    </div>
    </div>
    </Col>
            </Row>
    </Container>
    </div>
    </>
    );
  }
}

function Nome(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return(
    <div className="form-group">
      <label htmlFor="nome">Qual o seu nome?</label>
      <input
        className="form-control"
        id="nome"
        name="nome"
        type="text"
        value={props.nome}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Idade(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return(
    <div className="form-group">
      <label htmlFor="idade">Quantos anos?</label>
      <input
        className="form-control"
        id="idade"
        name="idade"
        type="text"
        value={props.idade}
        onChange={props.handleChange}
        />
    </div>
  );
}


function Peso(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="peso">Possui mais de 50kg?</label>
      <ul>
        <label>Sim</label>
        <li><input type="radio" onClick={props.handleChange} name="peso" id="" value="false"/></li>
        <label>Não</label>
        <li><input type="radio" onClick={props.handleChange} name="peso" id="" value="true"/></li>
      </ul>
    </div>
    </React.Fragment>
  );
}


function Filho(props) {
  if (props.currentStep !== 4) {
    return null
  }
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="filho">Está gravida ou teve filho nos ultimos 12 meses?(Se for homem responda com Não)</label>
      <ul>
        <label>Não</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel4_1" id="" value="false"/></li>
        <label>Sim</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel4_1" id="" value="true"/></li>
      </ul>
    </div>
    </React.Fragment>
  );
}

function LugarRisco(props) {
  if (props.currentStep !== 5) {
    return null
  }
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="malaria">Você esteve em alguem lugar com risco de malaria?</label>
      <ul>
        <label>Não</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel4_2" id="" value="false"/></li>
        <label>Sim</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel4_2" id="" value="true"/></li>
      </ul>
    </div>
    </React.Fragment>
  );
}
function Tattoo(props) {
  if (props.currentStep !== 6) {
    return null
  }
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="tattoo">Você fez tatuagem/maquiagem definitiva nos ultimos 12 meses?</label>
      <ul>
        <label>Não</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel4_3" id="" value="false"/></li>
        <label>Sim</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel4_3" id="" value="true"/></li>
      </ul>
    </div>
    </React.Fragment>
  );
}
function SexoRisco(props) {
  if (props.currentStep !== 7) {
    return null
  }
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="SexoRisco">Você passou por situações nas quais a maior de adquirir
      um doença sexualmente trasmissível?</label>
      <ul>
        <label>Não</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel4_4" id="" value="false"/></li>
        <label>Sim</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel4_4" id="" value="true"/></li>
      </ul>
    </div>
    </React.Fragment>
  );
}

function Herpes(props) {
  if (props.currentStep !== 8) {
    return null
  }
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="herpes">Nos ultimos 6 meses você teve Herpes Zoster?</label>
      <ul>
        <label>Não</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel3_1" id="" value="false"/></li>
        <label>Sim</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel3_1" id="" value="true"/></li>
      </ul>
    </div>
    </React.Fragment>
  );
}

function Endoscopico(props) {
  if (props.currentStep !== 9) {
    return null
  }
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="endoscopico">Realizou algum procedimento endoscopico nos ultimos 6 meses?</label>
      <ul>
        <label>Não</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel3_2" id="" value="false"/></li>
        <label>Sim</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel3_2" id="" value="true"/></li>
      </ul>
    </div>
    </React.Fragment>
  );
}

function Dente(props) {
  if (props.currentStep !== 10) {
    return null
  }
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="dente">Realizou extração dentaria ou tratamento de canal nos ultimos 7 dias?</label>
      <ul>
        <label>Não</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel2_1" id="" value="false"/></li>
        <label>Sim</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel2_1" id="" value="true"/></li>
      </ul>
    </div>
    </React.Fragment>
  );
}

function Resfriado(props) {
  if (props.currentStep !== 11) {
    return null
  }
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="resfriado">Ficou resfriado nos ultimos 7 dias?</label>
      <ul>
        <label>Não</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel2_2" id="" value="false"/></li>
        <label>Sim</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel2_2" id="" value="true"/></li>
      </ul>
    </div>
    </React.Fragment>
  );
}

function VacinaGripe(props) {
  if (props.currentStep !== 12) {
    return null
  }
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="vacina">Você tomou vacina nas ultimas 48 horas?</label>
      <ul>
        <label>Não</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel1" id="" value="false"/></li>
        <label>Sim</label>
        <li><input type="radio" onClick={props.handleChange} name="nivel1" id="" value="true"/></li>
      </ul>
    </div>
    </React.Fragment>
  );
}

function Definitivos(props) {
  if (props.currentStep !== 13) {
    return null
  }
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="definitivos">Teve Hepatite após os 11 anos idade? Ou evidência clinica das seguintes doenças:
      Hepatite B e C, AIDS ou doenças associadas ao virús HTVL I e II?</label>
      <ul>
        <label>Não</label>
        <li><input type="radio" onClick={props.handleChange} name="permanente" id="" value="false"/></li>
        <label>Sim</label>
        <li><input type="radio" onClick={props.handleChange} name="permanente" id="" value="true"/></li>
      </ul>
    </div>
    <button className="btn btn-success btn-block" >Sign up</button>
    </React.Fragment>
  );
}

export default MasterForm;
