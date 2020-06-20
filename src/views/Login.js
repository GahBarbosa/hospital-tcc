import React from 'react';
import {Button, Container, Row, Col } from "reactstrap";
import style from '../assets/css/style.css';
import { Redirect } from "react-router-dom";
import { alertService } from '../components/Alert/Services';
import { Alert } from '../components/Alert';

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          redirect: false,
          metodo: 'login',
          nome:'',
          responsavel:'',
          email: '',
          telefone:'',
          endereco:'',
          numero_endereco:'',
          cep:'',
          latitude:'123',
          longitude:'123',
          referencia:'asd',
          senha:  '',
          confirmaSenha:'',
          id:'',
          existeEmail: '',
          cnpj:'',
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {  
            return <Redirect to={{
                pathname: '/instituicao',
                state: {id:this.state.id}
            }} />
        }
    }

    setMetodo = (tela) =>{
        this.setState({
            metodo: tela
        })
    }
    

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
        [name]: value
        })
    }

    handleLogin = event => {
        event.preventDefault()

        fetch("http://localhost:5000/login", { 
            method: "POST", 
            body: JSON.stringify({ 
                  email:this.state.email,        
                senha:this.state.senha,
            }), 
              
            // Adding headers to the request 
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        }).then(response=>response.json()).then(data=> this.setState({id:data, redirect:true}))
            
    }

    handleSignUp = event => {
        event.preventDefault()
       
        fetch('http://localhost:5000/cadastrar', {
            method : 'post',
            headers :{ 'Content-Type' : 'application/json'},
            body : JSON.stringify({
                nome : this.state.nome,
                responsavel:this.state.responsavel,
                email : this.state.email,
                telefone:this.state.telefone,
                endereco: this.state.endereco,
                numero_endereco: this.state.numero_endereco,
                cep:this.state.cep,
                latitude:this.state.latitude,
                longitude:this.state.longitude,
                referencia: this.state.referencia,
                usuario : this.state.usuario,
                senha : this.state.senha,
                cnpj: this.state.cnpj,
            }),
             
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
          .then(data => {
            this.setState({
               metodo:'login',
              })
          })
    }

    handleForget = event => {
        event.preventDefault()

        fetch('http://localhost:5000/esqueciSenha/', {
            method : 'post',
            headers :{ 'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email : this.state.email,
            }),
              
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
          .then(data => {
            if(data === 'email invalido'){
                this.setState({
                    metodo: 'mensagemforget',
                    existeEmail: false,
                })
            } else {
                this.setState({
                    metodo: 'mensagemforget',
                    existeEmail: true,
                })
            }
          })
    }
    
    render() {
        return (
            <Container className={style.all}>
                  {this.renderRedirect()}
            <Button className="btn-round" color="primary" outline>
                <a href="/">
                    <i className="fas fa-arrow-left"></i>
                </a>
            </Button>
            <Row>
            <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
            <div className="card-body">
            <Alert />
            <form className="form-signin" onSubmit={this.handleLogin}>
            <Login 
                handleChange={this.handleChange}
                metodo={this.state.metodo}
                setMetodo={this.setMetodo}
                />
            </form>
            <form className="form-signin" onSubmit={this.handleSignUp}>
            <Cadastrar 
                handleChange={this.handleChange}
                metodo={this.state.metodo}
                meu_callback={this.meu_callback}
            />
            </form>
            <form className="form-signin" onSubmit={this.handleForget}>
                <EsqueceuSenha 
                handleChange={this.handleChange}
                metodo={this.state.metodo}
                />
            </form>
            <form className="form-signin">
            <MensagemEsqueceu 
                existeEmail={this.state.existeEmail}
                metodo={this.state.metodo}
                setMetodo={this.setMetodo}
            />
            </form>
            </div>
            </div>
            </Col>
            </Row>
            </Container>
            );
    }
    
}
function Login(props) {
    if (props.metodo != 'login') {
        return null
    }
   
    return (
        <>
        <h5 className="card-title text-center">Login</h5>
        <div className="form-label-group">
        <input 
            type="email"
            id="inputEmail" 
            className="form-control" 
            name="email" 
            placeholder="Email address" 
            value={props.email} 
            onChange={props.handleChange}
            required autoFocus/>
        <label htmlFor="inputEmail">Email</label>
        </div>
        
        <div className="form-label-group">
        <input 
            type="password" 
            id="inputPassword" 
            className="form-control" 
            name="senha" 
            placeholder="Password" 
            value={props.senha} 
            onChange={props.handleChange}
            required/>
        <label htmlFor="inputPassword">Senha</label>
        </div>
        
        <button className="btn btn-success btn-block">Entrar</button>
        <hr className="my-4"/>
        <button className="btn btn-lg btn-primary btn-block" onClick={props.setMetodo.bind(this,'cadastro')}> Ainda não sou cadastrado </button>
        <button className="btn btn-lg btn-primary btn-block" onClick={props.setMetodo.bind(this,'forget')}>Esqueci minha senha</button>
        </>
    );
}
function Cadastrar(props) {
    if (props.metodo != 'cadastro') {
        return null
    }
    const autoClose = true;
    const keepAfterRouteChange  = true;
    return (
        <>
        <h5 className="card-title text-center">Cadastro</h5>
        <div className="form-label-group">
        <input 
            type="text"
            id="inputNome" 
            className="form-control" 
            name="nome" 
            placeholder="Jose" 
            value={props.nome} 
            onChange={props.handleChange}
            required autoFocus/>
        <label htmlFor="inputNome">Nome</label>
        </div>

        <div className="form-label-group">
        <input 
            type="text"
            id="inputResponsavel" 
            className="form-control" 
            name="responsavel" 
            placeholder="Jose" 
            value={props.responsavel} 
            onChange={props.handleChange}
            required />
        <label htmlFor="inputResponsavel">Responsavel</label>
        </div>
        
        <div className="form-label-group">
        <input 
            type="email"
            id="inputEmail" 
            className="form-control" 
            name="email" 
            placeholder="Email address" 
            value={props.email} 
            onChange={props.handleChange}
            required />
        <label htmlFor="inputEmail">Email</label>
        </div>
        
        <div className="form-label-group">
        <input 
            type="password" 
            id="inputPassword" 
            className="form-control" 
            name="senha" 
            placeholder="Senha" 
            value={props.senha} 
            onChange={props.handleChange}
            required/>
        <label htmlFor="inputPassword">Senha</label>
        </div>

        <div className="form-label-group">
        <input 
            type="password" 
            id="inputConfirmPassword" 
            className="form-control" 
            name="confirmaSenha" 
            placeholder="Confirme sua Senha" 
            value={props.confirmaSenha} 
            onChange={props.handleChange}
            required/>
        <label htmlFor="inputConfirmPassword">Confirme a Senha</label>
        </div>

        <div className="form-label-group">
        <input 
            type="text"
            id="inputTelefone" 
            className="form-control" 
            name="telefone" 
            placeholder="40028922" 
            value={props.telefone} 
            onChange={props.handleChange}
            required />
        <label htmlFor="inputTelefone">Telefone</label>
        </div>

        <div className="form-label-group">
        <input 
            type="text"
            id="inputCNPJ" 
            className="form-control" 
            name="cnpj" 
            placeholder="40028922" 
            value={props.cnpj} 
            onChange={props.handleChange}
            required />
        <label htmlFor="inputCNPJ">CNPJ</label>
        </div>

        <div className="form-label-group">
        <input 
            type="text"
            id="inputCep" 
            className="form-control" 
            name="cep" 
            placeholder="0871541541" 
            value={props.cep} 
            onChange={props.handleChange}
            required />
        <label htmlFor="inputCep">Cep</label>
        </div>

        <div className="form-label-group">
        <input 
            type="text"
            id="inputEndereco" 
            className="form-control" 
            name="endereco" 
            placeholder="0871541541" 
            value={props.endereco} 
            onChange={props.handleChange}
            required />
        <label htmlFor="inputEndereco">Logradouro</label>
        </div>
        
        <div className="form-label-group">
        <input 
            type="text"
            id="inputNumero" 
            className="form-control" 
            name="numero_endereco" 
            placeholder="14" 
            value={props.numero_endereco} 
            onChange={props.handleChange}
            required />
        <label htmlFor="inputNumero">Numero</label>
        </div>

        <div className="form-label-group">
        <input 
            type="text"
            id="inputEstado" 
            className="form-control" 
            name="estado" 
            placeholder="sp" 
            // value={props.estado} 
            // onChange={props.handleChange}
            required />
        <label htmlFor="inputEstado">Estado</label>
        </div>

        <div className="form-label-group">
        <input 
            type="text"
            id="inputBairro" 
            className="form-control" 
            name="bairro" 
            placeholder="Bairro" 
            required />
        <label htmlFor="inputBairro">Bairro</label>
        </div>


        <div className="form-label-group">
        <input 
            type="text"
            id="inputCidade" 
            className="form-control" 
            name="cidade" 
            placeholder="Cidade" 
            required />
        <label htmlFor="inputCidade">Cidade</label>
        </div>

        <div className="form-label-group">
        <input 
            type="text"
            id="inputComplemento" 
            className="form-control" 
            name="complemento" 
            placeholder="complemento" 
            // value={props.complemento} 
            // onChange={props.handleChange}
            required />
        <label htmlFor="inputComplemento">Complemento</label>
        </div>
        <button className="btn btn-success btn-block" onClick={() => alertService.success('Cadastrado com sucesso!!', { autoClose, keepAfterRouteChange })}>Cadatrar</button>
        </>
    );
}

function EsqueceuSenha (props){
    if (props.metodo != 'forget') {
        return null
    }
    return (
        <>
        <h5 className="card-title text-center">Recuperar Senha</h5>
        <div className="form-label-group">
        <input 
            type="email"
            id="inputEmail" 
            className="form-control" 
            name="email" 
            placeholder="Email address" 
            value={props.email} 
            onChange={props.handleChange}
            required autoFocus/>
        <label htmlFor="inputEmail">Email</label>
        </div>
        <button className="btn btn-success btn-block">Recuperar Senha</button>
        </>
    );
}
function MensagemEsqueceu (props){
    if (props.metodo != 'mensagemforget') {
        return null
    }
    if (props.existeEmail == true){
        return (
            <>
            <h5 className="card-title text-center">Recuperar Senha</h5>
            <div className="form-label-group">
                <h3>Sua senha foi enviada com sucesso para seu e-mail, tente logar novamente. 
                    Obrigado !  
                </h3>        
            </div>
            <button className="btn btn-lg btn-primary btn-block" onClick={props.setMetodo.bind(this,'login')}>Ok</button>
            </>
        );
    } else {
        return (
            <>
            <h5 className="card-title text-center">Recuperar Senha</h5>
            <div className="form-label-group">
                <h3>
                    Este email não está cadastrado no nosso sistema! 
                </h3>        
            </div>
            <button className="btn btn-lg btn-primary btn-block" onClick={props.setMetodo.bind(this,'login')}>Ok</button>
            </>
        );
    }
}

export default User;
  