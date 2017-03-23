import Navbar from './Navbar';

class App extends React.Component{
    render(){
        return(
        <div>
        <Header />
        <Container />
        <Footer />
        </div>
        );
    }
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);