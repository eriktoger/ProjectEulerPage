import React from 'react';

const ProblemName = (props:any) => {
    return (
        <div>
            <h2> {props.name}</h2>
            <h3> Problem {props.number}</h3>
        </div>
    );
};

export default ProblemName;
