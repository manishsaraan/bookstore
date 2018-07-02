import React, { PureComponent } from 'react';

class Search extends PureComponent {
    state = {
        search: '',
    };

    handleChange =  (e) => {
       this.setState({search: e.target.value});
    }
    render(){
        const { handleSubmit } = this.props;
        console.log(handleSubmit)
        return (
            <form className="form-wrapper" onSubmit={ (e) => handleSubmit(e, this.state) }>
                <input onChange={this.handleChange} type="text" id="search" placeholder="Search for..." required value={this.state.search} />
                <input type="submit" value="go" id="submit" />
            </form>
        );
    }
}

export default Search;