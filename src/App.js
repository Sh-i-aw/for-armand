import logo from './logo.svg';
import './App.css';
import chien from './chien.png'

function MsgPerPerson (props) {
    const{name, joke} = props;
    return (
        <div className="card">
            <h2>{name}</h2>
            <h3>My fav joke from you is: </h3>
            <p>{joke}</p>
        </div>
    )
}

function App() {
  return (
    <div className="App intro">
        <header className="App-header">
            <div className="">
                <img src={chien} className="App-logo" alt="logo"/>
            </div>

            <h1>🎉 Happy Vehikalian Birthday, Armand ! 🎉</h1>
            <div className="cardContainer">
                <marquee direction="left" direction="down" behavior="alternate">
                    <marquee behavior="scroll">
                        <MsgPerPerson name="Jason" joke="iframe paint.js, ship it!"></MsgPerPerson>
                    </marquee>
                </marquee>

                <marquee direction="down" behavior="alternate">
                    <marquee direction="right" behavior="scroll">
                        <MsgPerPerson name="Xiao" joke="new Client();"></MsgPerPerson>
                    </marquee>
                </marquee>
            </div>


        </header>
    </div>
  );
}

export default App;
