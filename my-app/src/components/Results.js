import React from "react"

function Results(props) {
    return (
        <div>
            <hr />
            <h2>Entered information:</h2>
            <p>
                Your name: {props.firstName} {props.lastName}
            </p>
            <p>
                Your age: {props.age}
            </p>
            <p>
                Your gender: {props.gender}
            </p>
            <p>
                Your destination: {props.location}
            </p>
            <p>
                Your items you're bringing?: {props.toothbrush ? "toothbrush, " : ""} {props.soap ? "soap, " : ""} {props.comb ? "comb, " : ""} {props.belt ? "belt" : ""}
            </p>
        </div>
    )
}

export default Results