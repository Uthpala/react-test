import React from 'react'
import ReactDOM from 'react-dom'
import Filter from './Filter'
import UserTable from './UserTable'

class FilterableUserTable extends React.Component{

    constructor(){
        super();
        this.state = {
            filterText: '',
            male:true,
            female: true
        }
    }

    handleUserInput(filterText,male,female){
        this.setState({
            filterText: filterText,
            male:male,
            female:female
        });
    }

    render(){
        return (
            <div className="container">
                <br/>
                <Filter
                    filterText={this.state.filterText}
                    male={this.state.male}
                    female={this.state.female}
                    onUserInput={this.handleUserInput.bind(this)}
                />
                <UserTable
                    users={this.props.users}
                    filterText={this.state.filterText}
                    male={this.state.male}
                    female={this.state.female} />
                <p>
                </p>
            </div>
        );
    }
}

var USERS = [
    {id:1, name: 'Alex', gender: 'male'},
    {id:2, name: 'John', gender: 'male'},
    {id:3, name: 'Anna', gender: 'female'},
    {id:4, name: 'Lisa', gender: 'female'}
];

ReactDOM.render(
    <FilterableUserTable users={USERS} />,document.getElementById('app')
);