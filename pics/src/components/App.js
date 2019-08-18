import React from 'react';
//import axios from 'axios';
import SearchBar from './Searchbar.js'
import unsplash from '../api/unsplash.js'
import Imagelist from './Imagelist.js'
import '../styles/styles.css';
class App extends React.Component {

    state = {
            images: [],
            imageURLS: [],
            currRequestStatus: {}
    };
     onSearchSUbmit = async (sq) => {
        const response = await unsplash.get( '/search/photos' , {
            params: { query: sq},

        });

        this.setState({images: response.data.results});
        console.log(this.state.images)
    }

    render(){
        return(
            <div classNmae="ui continer" style={{marginTop:`10px`}}>
                <SearchBar onSubmit={this.onSearchSUbmit} />
                <Imagelist images={this.state.images} />
            </div>
        );
    }
}

export default App;
