import React, { Component } from 'react';
import './App.css'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = [
        'Olhe para cima, que é de lá que vem tua força!',
        'Você nunca será velho demais para sonhar um novo sonho.',
        'Siga os bons e aprenda com eles.',
        'Pensando em desistir? Firme-se nos motivos que te fizeram começar.',
        'Por mais difícil que algo possa parecer, jamais desista antes de tentar!',
        'O bom-senso vale mais do que muito conhecimento.', 
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.',
        'Agora é a hora de começar a surpreender aqueles que duvidaram de você!',
        'Valorize as pequenas conquistas.',
        'Adversidade não é sinônimo de derrota. Vencer os obstáculos é o que nos leva adiante!',
        'Para certas coisas não basta querer, é preciso batalhar!'

      ];

    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
        this.setState(state);

    }

    render(){
        return(
            <div className="container">
                <img src={require('./assets/biscoito.png')} className="img" alt='biscoito'/>
                <Botao nome="Abrir biscoito da sorte" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>         
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn} className='btn'>{this.props.nome}</button>
            </div>
        );
    }
}




export default App;