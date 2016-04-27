import React from 'react'

class Filter extends React.Component{


    handleChange(e){
        this.props.onUserInput(
            this.refs.filterTextInput.value,
            this.refs.male.checked,
            this.refs.female.checked
        );
    }

    render(){
        return(
            <form>
                <div className="form-group">
                    <input type="text" placeholder="Search..."
                           value={this.props.filterText}
                           ref="filterTextInput"
                           onChange={this.handleChange.bind(this)}
                           className="form-group" />
                    <p>
                        <label for="male">
                            <input type="checkbox" ref="male" onChange={this.handleChange.bind(this)} id="male" checked={this.props.male}  />Male
                        </label>
                        <label for="female">
                            <input type="checkbox" ref="female" onChange={this.handleChange.bind(this)} id="female" checked={this.props.female} />Female
                        </label>
                    </p>
                </div>
            </form>
        )
    }

}

export default Filter