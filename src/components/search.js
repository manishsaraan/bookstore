import React, { PureComponent } from 'react';

class Search extends PureComponent {
    state = {
        search: '',
    };

    handleChange =  (e) => {
       this.setState({search: e.target.value});
    }
    render(){
        const {
          handleSubmit,
          isLoading
        } = this.props;
        console.log(isLoading)
        return (
            <form className="form-wrapper" onSubmit={ (e) => handleSubmit(e, this.state) }>
                <input onChange={this.handleChange} type="text" id="search" placeholder="Search for..." required value={this.state.search} />
                <button type="submit" disabled={ isLoading }>{isLoading ? 'Searching': 'Search'}</button>
            </form>
        );
    }
}

export default Search;