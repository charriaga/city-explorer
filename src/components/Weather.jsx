/* eslint-disable react/prop-types */
import Card from "react-bootstrap/card";



export default function Weather(props) {
    console.log(props.src)
    if (props.src.data !== undefined || null) {
        return (
            <div>
                {
                    props.src.data.map((val => {
                        return(
                        <Card key={1}>
                            <p>{val.date}</p>
                            <p>{val.description}</p>
                        </Card>
                        )
                    }))}
            </div>
        );
    } else {
        return (
            <p></p>
        )
    }
}