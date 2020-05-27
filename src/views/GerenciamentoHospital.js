import React from "react";
import {
    Container,
    Row,
    Col
  } from "reactstrap";

import Slider from "nouislider";
import { alertService } from '../components/Alert/Services';
import { Alert } from '../components/Alert';
import { Redirect } from "react-router-dom";


const autoClose = true;
const keepAfterRouteChange  = true;

class Hospital extends React.Component {
    constructor(props) {
        super(props)
        this.state = {     
            id:'',
            nome:'',
            responsavel:'',
            email: '',
            telefone:'',
            endereco:'',
            numero_endereco:'',
            cep:'',
            latitude:'',
            longitude:'',
            referencia:'',
            senha:'',
            confirm_senha:'',
            id_instituicao:'',
            tipo_a_posi:'',
            tipo_a_nega:'',
            tipo_b_posi:'', 
            tipo_b_nega:'', 
            tipo_ab_posi:'',
            tipo_ab_nega:'',
            tipo_o_posi:'', 
            tipo_o_nega:'',
            redirect:false,
          }
    }

    componentDidMount(){
      if(typeof(this.props.location.state) == 'undefined'){
        this.setState({
          redirect:true
        })
      } else {
        fetch('http://localhost:5000/instituicao/'+this.props.location.state.id, {
          method : 'post',
          headers :{ 'Content-Type' : 'application/json'},
          body : JSON.stringify({
              id : this.state.id,
          }), 
          // Adding headers to the request 
          headers: { 
              "Content-type": "application/json; charset=UTF-8"
          } 
        }).then(response => response.json())
          .then(data=> this.setState({
            id:this.props.location.state.id,
            nome:data.nome,
            email:data.email,
            responsavel:data.responsavel,
            senha:data.senha,
            confirm_senha:data.senha,
            telefone:data.telefone,
            tipo_a_posi:data.tipo_a_pos,
            tipo_a_nega:data.tipo_a_neg,
            tipo_b_posi:data.tipo_ab_pos, 
            tipo_b_nega:data.tipo_ab_neg, 
            tipo_ab_posi:data.tipo_b_pos,
            tipo_ab_nega:data.tipo_b_neg,
            tipo_o_posi:data.tipo_o_pos, 
            tipo_o_nega:data.tipo_o_neg,
          }))
      }
    }

    renderRedirect = () => {
      if (this.state.redirect) {  
        return <Redirect to={{
            pathname: '/index',
        }} />
      }
    }
    
    changeBlood = event => {
        event.preventDefault()
        let elementos = document.getElementsByClassName("sangue")
        this.setState({
          tipo_a_posi: elementos[0].innerText,
          tipo_a_nega: elementos[1].innerText,
          tipo_b_posi: elementos[2].innerText,
          tipo_b_nega: elementos[3].innerText,
          tipo_o_posi: elementos[4].innerText,
          tipo_o_nega: elementos[5].innerText,
          tipo_ab_posi: elementos[6].innerText,
          tipo_ab_nega: elementos[7].innerText,
        })
    }

    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
    }

    SubmitEdit = event => {
        event.preventDefault()
        fetch('http://localhost:5000/alterarInstituicao/'+this.state.id, {
            method : 'post',
            headers :{ 'Content-Type' : 'application/json'},
            body : JSON.stringify({
                nome : this.state.nome,
                responsavel:this.state.responsavel,
                email : this.state.email,
                telefone:this.state.telefone,
                senha : this.state.senha,
            }), 
            // Adding headers to the request 
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        }).then(response => response.json())
    }

    SubmitBlood = event => {
      event.preventDefault()
      fetch("http://localhost:5000/alterarBolsaSangue/"+this.state.id, { 
        method: "POST", 
        body: JSON.stringify({       
          tipo_a_pos:Number(this.state.tipo_a_posi), 
          tipo_a_neg:Number(this.state.tipo_a_nega),
          tipo_b_pos:Number(this.state.tipo_b_posi),
          tipo_b_neg:Number(this.state.tipo_b_nega),    
          tipo_ab_pos:Number(this.state.tipo_ab_posi),    
          tipo_ab_neg:Number(this.state.tipo_ab_nega),
          tipo_o_pos:Number(this.state.tipo_o_posi),
          tipo_o_neg:Number(this.state.tipo_o_nega),
          }), 
          // Adding headers to the request 
          headers: { 
              "Content-type": "application/json; charset=UTF-8"
          } 
      }).then(response=>response.json())
    }

    SubmitDelete = event => {
      event.preventDefault()
      fetch("http://localhost:5000/deletarInstituicao/"+this.state.id, {
        method: "POST",
        body: JSON.stringify({
        }),
        
        // Adding headers to the request
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response=>response.json())
        .then(this.setState({redirect:true}))
    }
    
    render() {
        return (
            <>
            <Container>
            {this.renderRedirect()}
            <Row>
              <Col>
               aqui esta a sua imagem do hospital
              </Col>
              <Col>
              <form onSubmit={this.SubmitEdit}>
                    {/* <Col md="10">
                        <div className="images-container">
                        <img
                        alt="..."
                        src={require("assets/img/hospital-logo.png")}
                        ></img>
                        </div>
                    </Col> */}
                <Row>
                    <Col>
                    <div className="form-label-group">
                    <input 
                        type="text"
                        id="inputNome" 
                        className="form-control" 
                        name="nome" 
                        placeholder="Jose" 
                        value={this.state.nome} 
                        onChange={this.handleChange}
                        required/>
                    <label htmlFor="inputNome">Nome</label>
                    </div>                  
                    </Col>
                    <Col>
                    <div className="form-label-group">
                    <input 
                        type="text"
                        id="inputTelefone" 
                        className="form-control" 
                        name="telefone" 
                        placeholder="40028922" 
                        pattern="/[0-9]+/"
                        value={this.state.telefone} 
                        onChange={this.handleChange}
                        required />
                    <label htmlFor="inputTelefone">Telefone</label>
                    </div>                
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="form-label-group">
                    <input 
                        type="text"
                        id="inputResponsavel" 
                        className="form-control" 
                        name="responsavel" 
                        placeholder="Jose" 
                        value={this.state.responsavel} 
                        onChange={this.handleChange}
                        required />
                    <label htmlFor="inputResponsavel">Responsavel</label>
                    </div>
                    </Col>
                    <Col>
                    <div className="form-label-group">
                    <input 
                        type="email"
                        id="inputEmail" 
                        className="form-control" 
                        name="email" 
                        placeholder="Email address" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        required />
                    <label htmlFor="inputEmail">Email</label>
                    </div>                   
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="form-label-group">
                    <input 
                        type="password" 
                        id="inputPassword" 
                        className="form-control" 
                        name="senha" 
                        placeholder="Password" 
                        value={this.state.senha} 
                        onChange={this.handleChange}
                        required/>
                    <label htmlFor="inputPassword">Senha</label>
                    </div>
                    </Col>
                    <Col>
                    <div className="form-label-group">
                    <input 
                        type="password" 
                        id="inputConfirmPassword" 
                        className="form-control" 
                        name="senha" 
                        placeholder="Password" 
                        value={this.state.confirm_senha} 
                        onChange={this.handleChange}
                        required/>
                    <label htmlFor="inputConfirmPassword">Confirme sua Senha</label>
                    </div>
                    </Col>
                </Row>
                <button className="btn btn-success btn-block" onClick={() => alertService.success('Editado com sucesso!!', { autoClose, keepAfterRouteChange })}>Salvar Alterações</button>
                </form>
              </Col>
            </Row>
               
                <form onSubmit={this.SubmitBlood}>
                    <GerenciaBancoSangue
                        changeBlood={this.changeBlood}
                        tipo_a_posi ={this.state.tipo_a_posi}
                        tipo_a_nega ={this.state.tipo_a_nega}
                        tipo_b_posi ={this.state.tipo_b_posi}
                        tipo_b_nega ={this.state.tipo_b_nega}
                        tipo_ab_posi={this.state.tipo_ab_posi}
                        tipo_ab_nega={this.state.tipo_ab_nega}
                        tipo_o_posi ={this.state.tipo_o_posi}
                        tipo_o_nega ={this.state.tipo_o_nega}
                    />
                </form>
                <form onSubmit={this.SubmitDelete}>
                <button className="btn btn-danger btn-block" onClick={() => alertService.success('Excluido com sucesso!!', { autoClose, keepAfterRouteChange })}>Excluir Instituição</button>
                </form>
            </Container>
            </>
        );
    }
        
}

function GerenciaBancoSangue(props){
    React.useEffect(() => {
        if (
          !document
            .getElementById("a+")
            .classList.contains("noUi-target")
          &&
          props.tipo_a_posi !== "" 
        ) {
          Slider.create(document.getElementById("a+"), {
            start: [props.tipo_a_posi],
            connect: [true, false],
            step: 1,
            range: { min: 0, max: 100 },
            tooltips: true,
          });
        } 
    });
    React.useEffect(() => {
        if (
          !document
            .getElementById("a-")
            .classList.contains("noUi-target")
            &&
            props.tipo_a_nega !== "" 
        ) {
          Slider.create(document.getElementById("a-"), {
            start: [props.tipo_a_nega],
            connect: [true, false],
            step: 1,
            range: { min: 0, max: 100 },
            tooltips: true,
          
          });
        }
    });
    React.useEffect(() => {
        if (
          !document
            .getElementById("b+")
            .classList.contains("noUi-target")
            &&
            props.tipo_b_posi !== "" 
        ) {
          Slider.create(document.getElementById("b+"), {
            start: [props.tipo_b_posi],
            connect: [true, false],
            step: 1,
            range: { min: 0, max: 100 },
            tooltips: true,
          
          });
        }
    });
    React.useEffect(() => {
        if (
          !document
            .getElementById("b-")
            .classList.contains("noUi-target")
            &&
            props.tipo_b_nega !== "" 
        ) {
          Slider.create(document.getElementById("b-"), {
            start: [props.tipo_b_nega],
            connect: [true, false],
            step: 1,
            range: { min: 0, max: 100 },
            tooltips: true,
          
          });
        }
    });
    React.useEffect(() => {
        if (
          !document
            .getElementById("ab+")
            .classList.contains("noUi-target")
            &&
            props.tipo_ab_posi !== "" 
        ) {
          Slider.create(document.getElementById("ab+"), {
            start: [props.tipo_ab_posi],
            connect: [true, false],
            step: 1,
            range: { min: 0, max: 100 },
            tooltips: true,
          
          });
        }
    });
    React.useEffect(() => {
        if (
          !document
            .getElementById("ab-")
            .classList.contains("noUi-target")
            &&
            props.tipo_ab_nega !== "" 
        ) {
          Slider.create(document.getElementById("ab-"), {
            start: [props.tipo_ab_nega],
            connect: [true, false],
            step: 1,
            range: { min: 0, max: 100 },
            tooltips: true,
          
          });
        }
    });
    React.useEffect(() => {
        if (
          !document
            .getElementById("o+")
            .classList.contains("noUi-target")
            &&
            props.tipo_o_posi !== "" 
        ) {
          Slider.create(document.getElementById("o+"), {
            start: [props.tipo_o_posi],
            connect: [true, false],
            step: 1,
            range: { min: 0, max: 100 },
            tooltips: true,
          
          });
        }
    });
    React.useEffect(() => {
        if (
          !document
            .getElementById("o-")
            .classList.contains("noUi-target")
            &&
            props.tipo_o_nega !== "" 
        ) {
          Slider.create(document.getElementById("o-"), {
            start: [props.tipo_o_nega],
            connect: [true, false],
            step: 1,
            range: { min: 0, max: 100 },
            tooltips: true,
          });
        }
    });
    
    return(
        <>
        <Row>
          <Col>
            <div>
              <p>
                Informar em porcentagem a quantidade de sangue existente na bolsa de sangue da sua instituição.
              </p>
            </div>
          </Col>
          <Col>
              <Row>
                <Col>
                <p className="category">A+</p>
                <div 
                    id="a+"
                    name="tipo_a_posi"
                    className="sangue"
                    onMouseUp={props.changeBlood}
                >
                </div>
                </Col>
                <Col>
                <p className="category">A-</p>
                <div 
                    id="a-"
                    name="tipo_a_nega"
                    className="sangue"
                    onMouseUp={props.changeBlood}
                >
                </div>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                <p className="category">B+</p>
                <div 
                    id="b+"
                    name="tipo_b_posi"
                    className="sangue"
                    onMouseUp={props.changeBlood}
                >
                </div>
                </Col>
                <Col>
                <p className="category">B-</p>
                <div 
                    id="b-"
                    name="tipo_b_nega"
                    className="sangue"
                    onMouseUp={props.changeBlood}
                >
                </div>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                <p className="category">O+</p>
                <div 
                    id="o+"
                    name="tipo_o_posi"
                    className="sangue"
                    onMouseUp={props.changeBlood}
                >
                </div>
                </Col>
                <Col>
                <p className="category">O-</p>
                <div 
                    id="o-"
                    name="tipo_o_nega"
                    className="sangue"
                    onMouseUp={props.changeBlood}
                >
                </div>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                <p className="category">AB+</p>
                <div 
                    id="ab+"
                    name="tipo_ab_posi"
                    className="sangue"
                    onMouseUp={props.changeBlood}
                >
                </div>
                </Col>
                <Col>
                <p className="category">AB-</p>
                <div 
                    id="ab-"
                    name="tipo_ab_nega"
                    className="sangue"
                    onMouseUp={props.changeBlood}
                >
                </div>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <button className="btn btn-success btn-block" onClick={() => alertService.success('Editado com sucesso!!', { autoClose, keepAfterRouteChange })}>Salvar Alterações</button>
                </Col>
            </Row>
          </Col>
        </Row>
       
        </>
    )

}

export default Hospital;