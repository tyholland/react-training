import React from 'react';

const Results = (props) => (
        <div>
            <hr />
            <h2>Entered information:</h2>
            <p>
                Your name: {props.attr.firstName} {props.attr.lastName}
            </p>
            <p>
                Your age: {props.attr.age}
            </p>
            <p>
                Your gender: {props.attr.gender}
            </p>
            <p>
                Your destination: {props.attr.location}
            </p>
            <p>
                Your items you're bringing?: {props.attr.toothbrush ? "toothbrush, " : ""} {props.attr.soap ? "soap, " : ""} {props.attr.comb ? "comb, " : ""} {props.attr.belt ? "belt" : ""}
            </p>
        </div>
    )

export default Results