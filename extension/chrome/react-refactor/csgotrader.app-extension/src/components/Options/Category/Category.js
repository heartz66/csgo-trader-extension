import React, { useEffect } from "react";
import { Table } from 'react-bootstrap';

const Category = (props) => {
    useEffect(() => {
        document.title = `Options - ${props.title}`
    }, [props.title]);

    return (
        <div className="buildingBlock">
            <h2>{props.title}</h2>
            {props.subTitle ? <p>{props.subTitle}</p> : null}
            <Table striped>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {props.children}
                </tbody>
            </Table>
        </div>
    );
};

export default Category;
