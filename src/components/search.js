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
          <div className="search_wrapper">
            <form className="form-wrapper" onSubmit={ (e) => handleSubmit(e, this.state) }>
                <input onChange={this.handleChange} type="text" id="search" placeholder="Search for..." required value={this.state.search} />
                    <button type="submit" id="submit" disabled={ isLoading }>{isLoading ? 'Searching': 'Search'}</button>
            </form>
        </div>
        );
    }
}

export default Search;