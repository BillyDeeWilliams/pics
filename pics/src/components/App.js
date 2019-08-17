import React from 'react';
//import axios from 'axios';
import SearchBar from './Searchbar.js'
import unsplash from "../api/unsplash.js"

class App extends React.Component {

    state = {
            images: [],
            currRequestStatus: {}
    };
     onSearchSUbmit = async (sq) => {
        const response = await unsplash.get( '/search/photos' , {
            params: { query: sq},

        });

        this.setState({images: response.data.results});

    }

    render(){
        return(
            <div classNmae="ui continer" style={{marginTop:`10px`}}>
                <SearchBar onSubmit={this.onSearchSUbmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;
