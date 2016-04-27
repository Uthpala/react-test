import React from 'react'
import UserRow from './UserRow'

class UserTable extends React.Component{

    render(){
        var rows = [];
        this.props.users.forEach((user) => {
            if ( user.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1 ||
                    ( user.gender === 'male' && !this.props.male ) ||
                    ( user.gender === 'female' && !this.props.female ) ||
                    ( !this.props.male && !this.props.female )
                ){
                return;
            }
            rows.push(<UserRow key={user.id} name={user.name} gender={user.gender} />)
        });

        return (
            <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Gender</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default UserTable