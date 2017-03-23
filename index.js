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

class Header extends React.Component{
    render(){
        return(
        <div id="nav">
            <h1>Nav</h1>
        </div>
        );
    }
}

class Container extends React.Component{
    render(){
        return(
        <div id="container">
            <h1>Container</h1>
        </div>
        );
    }
}

class Footer extends React.Component{
    render(){
        return(
        <div id="footer">
            <h1>Footer</h1>
        </div>
        );
    }
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);