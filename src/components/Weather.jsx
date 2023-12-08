/* eslint-disable react/prop-types */
import Card from "react-bootstrap/card";



export default function Weather(props) {
   const propsArr = Object.entries(props.src);
    if (propsArr === undefined || null) {
        return (
            <p>undefined</p>
        );
    } else {
        return (
            <div>
                <Card key={1}>
                    <p>{propsArr[1].date}</p>
                    <p>{propsArr[1].description}</p>
                </Card>

            </div>
        )
    }
}