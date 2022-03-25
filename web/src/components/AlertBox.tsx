import React from 'react';
import { Alert } from 'react-bootstrap';


export interface AlertBoxProps {
    show: boolean
    text: string
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string;
}

export const AlertBox = (props: AlertBoxProps) => {
    if (props.show) {
        return (<Alert variant={props.variant ?? "primary"} style={{ textAlign: "center" }}>{props.text}</Alert>)
    }
    else {
        return null
    }
}