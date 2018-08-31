import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'; 
import Scroll from '../components/Scroll';
import './App.css';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({robots: users})
        });
    }

    onSearch = (event) => {  
        this.setState({
            searchfield: event.target.value,
        })
    }

    render(){
        const filter = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })   
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearch} />
                <Scroll>
                    <CardList robots={filter}/>
                </Scroll>
            </div>
        );
    }
}

export default App;