import React from "react";
import { Container} from "reactstrap";
import { Redirect } from "react-router-dom";

class ResultadoFormulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          nome:  '',
          nivelfinal:0,
          redirect:false
        }
    }

    componentDidMount(){
      this.setState({
        nome:this.props.location.state.nome,
        nivelfinal:this.props.location.state.nivelfinal
      })
    }

    backToHome(){
      if (this.state.redirect) {  
        return <Redirect to={{
            pathname: '/index'
        }} />
      }
    }

    render() {
        return (
        <>
        <Container >
        {this.backToHome()}
            <Nivel6
                nome={this.state.nome}
                nivelfinal={this.state.nivelfinal}
            />
             <Nivel5
              nome={this.state.nome}
                nivelfinal={this.state.nivelfinal}
            />
            <Nivel4
             nome={this.state.nome}
                nivelfinal={this.state.nivelfinal}
            />
             <Nivel3
              nome={this.state.nome}
                nivelfinal={this.state.nivelfinal}
            />
             <Nivel2
              nome={this.state.nome}
                nivelfinal={this.state.nivelfinal}
                />
             <Nivel1
              nome={this.state.nome}
                nivelfinal={this.state.nivelfinal}
                />
               <button className="btn btn-lg btn-primary btn-block" onClick={()=>{this.setState({redirect:true})}}>OK</button>
        </Container>
        </>
        );
    }
}

function Nivel6(props) {
    if (props.nivelfinal !== 6) {
        return null
    }
      return(
        <div>
        <h3>Caro(a) {props.nome}</h3>
        Infelizmente voce ainda não esta apto para doar sangue. 
        </div>
      )
}

function Nivel5(props) {
    if (props.nivelfinal !== 5) {
        return null
    }
      return(
        <div>
          <h3>Caro(a) {props.nome}</h3>
          Infelizmente por causa de seu peso voce não pode doar sangue, volte quando voce tiver mais que 50 quilos. 
          </div>
      )
}

function Nivel4(props) {
    if (props.nivelfinal !== 4) {
        return null
    }
      return(
        <div>
        <h3>Caro(a) {props.nome}</h3>
        Infelizmente voce ainda não esta apto para doar sangue, aguarde mais 12 meses para realizar o teste novamente. 
        </div>
      )
}

function Nivel3(props) {
    if (props.nivelfinal !== 3) {
        return null
    }
      return(
        <div>
        <h3>Caro(a) {props.nome}</h3>
        Infelizmente voce ainda não esta apto para doar sangue, aguarde mais 6 meses para realizar o teste novamente. 
        </div>
      )
}

function Nivel2(props) {
    if (props.nivelfinal !== 2) {
        return null
    }
      return(
        <div>
        <h3>Caro(a) {props.nome}</h3>
        Infelizmente voce ainda não esta apto para doar sangue, aguarde mais 7 dias para realizar o teste novamente. 
        </div>
      )
}

function Nivel1(props) {
    if (props.nivelfinal !== 1) {
        return null
    }
      return(
        <div>
        <h3>Caro(a) {props.nome}</h3>
        Infelizmente voce ainda não esta apto para doar sangue, aguarde mais 48h para realizar o teste novamente. 
        </div>
      )
}

export default ResultadoFormulario;