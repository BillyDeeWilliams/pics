import React from 'react';

const Imagelist = (props) => {

        let images = props.images.map(({id, description, urls}) => {
            let ilStyles = {
                background : 'url(' + urls.regular + ')',
                backgroundSize : 'cover' 
            }
                return <li key={id} ><a href={urls.regular} alt={description} rel="noopener noreferrer" target="_blank"><div style={ilStyles} ></div></a></li>
            });


        return (
            <div className="ui segment">
                <h2>Found {props.images.length} Images</h2>
                <ul classNmae="ui gallery">
                    {images}
                </ul>
            </div>
        )
    };


export default Imagelist;
