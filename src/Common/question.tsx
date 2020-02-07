import React from 'react';


const Question = (props:any) => {
    return (
        <div>
            <h2 style={ {whiteSpace: 'pre-line'}}> {props.question}</h2>
        </div>
    );
};

export default Question;
