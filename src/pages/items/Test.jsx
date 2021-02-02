import React from 'react';

const Test = (props) => {
    return (
        <div>
            Hello this is my new route
            <button onClick={()=>props.history.push('/')}>Click for homepage</button>
        </div>
    );
};

export default Test;