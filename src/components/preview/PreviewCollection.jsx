import React from 'react';
import CollectionItem from '../collectionItem/CollectionItem';
import './preview-collection-style.scss';

const PreviewCollection = ({title, items}) => {
    console.log(title)
    {console.log("Hello")}
    return (
        
        <div className='collection-preview'>
            <h1 className='title'>{`${title.toUpperCase()} collection`}</h1>
            <div className='preview'>
                {
                items
                .filter((item, index)=> index < 4)
                .map(({id, ...otherItemValues}) => (
                    <CollectionItem key={id} {...otherItemValues}/>
                )
                )}
            </div>
        </div>
    );
};

export default PreviewCollection;