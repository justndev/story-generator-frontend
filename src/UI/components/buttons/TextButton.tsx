import {Button} from "@mui/material";
import {useState} from "react";

interface TextButtonProps {
    label?: string;
    onClick?: () => void;
    selected?: boolean;
    styles?: string;
    color?: string;
}

export default function TextButton({
                                       label = "BUTTON",
                                       onClick = () => {},
                                       selected = false,
                                       color = 'black',
                                       styles = '',
                                   }: TextButtonProps) {

    return (
        <div className={`text-button-container-${color}`} onClick={onClick}>
            <a className={`text-button-${selected ? 'selected' : 'label'}-${color}`} onClick={onClick}>
                {label}
            </a>
        </div>

    );
}
