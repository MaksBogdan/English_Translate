import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      id: 0,
      word: '',
      translate: '',
      cards: [],
    }
  }
  updateInput(key, value){
    this.setState({
      [key] : value
    })
  };

 addCard () {
   const newCard = {
     id: 1 + this.state.id, 
     value : {
        word: this.state.word.slice(),
        translate: this.state.translate.slice(),
     }
   };
   this.setState ({
    id: newCard.id,
    word: '',
    translate: '',
    cards: [...this.state.cards,newCard]
  })
};

  render (){
    return (
      <div className="App">
        <h1 className = 'appTitle'>Карточки английских слов</h1>
        <div className = 'container' >
          Добавить карточку...<br/>
          <input 
          type = 'text' 
          placeholder = 'Введите слово'
          value = {this.state.word}
          onChange = {(e) => this.updateInput('word', e.target.value)}
          />
          <input 
          type = 'text' 
          placeholder = 'Введите слово'
          value = {this.state.translate}
          onChange = {(e) => this.updateInput('translate', e.target.value)}
          />
          <button 
          className = 'addWord'
          onClick = {() => this.addCard()} 
          >
            Добавить
          </button>
          <div>
            {this.state.cards.map(card => {
              return(
                <div 
                key = {card.id}
                className = 'card'
                >
                  {card.value.word}
                </div>
              )
            })}
          </div>
        </div>
      </div>
   
    );
  }
  
}

export default App;
