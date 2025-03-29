import {OutlinedInput, FormControl, FormHelperText, TextField} from "@mui/material";
import {Dispatch, SetStateAction, useEffect} from "react";

export default function textInputFabric(
    value: string,
    onChange: Dispatch<SetStateAction<string>>,
    type: "email" | "password" | "confirmPassword" | "firstName" | "lastName" | "storyInput",
    error: string
) {
    switch (type) {
        case "email":
            return <AuthTextInputEmail value={value} onChange={onChange} error={error} />;
        case "password":
            return <AuthTextInputPass value={value} onChange={onChange} error={error} />;
        case "confirmPassword":
            return <AuthTextPassConfirm value={value} onChange={onChange} error={error} />;
        case "firstName":
            return <AuthInputFirstName value={value} onChange={onChange} error={error} />;
        case "lastName":
            return <AuthInputFirstName value={value} onChange={onChange} error={error} />;
        case "storyInput":
            return <StoryInput value={value} onChange={onChange} error={error} />;
        default:
            return null;
    }
}

const AuthTextInputEmail = ({
                                value,
                                onChange,
                                error,
                            }: {
    value: string;
    onChange: any;
    error?: string;
}) => {
    return (
        <FormControl error={!!error} variant="outlined" size="small">
            <OutlinedInput
                value={value}
                onChange={(e) => onChange(e.target.value)}
                id="outlined-error-helper-text"
                placeholder="Type your email"
                aria-describedby="component-error-text"
            />
            <FormHelperText sx={{ minHeight: "20px" }} id="component-error-text">
                {error}
            </FormHelperText>
        </FormControl>
    );
};

const AuthInputFirstName = ({
                                value,
                                onChange,
                                error,
                            }: {
    value: string;
    onChange: any;
    error?: string;
}) => {
    return (
        <FormControl error={!!error} variant="outlined" size="small">
            <OutlinedInput
                value={value}
                onChange={(e) => onChange(e.target.value)}
                id="outlined-error-helper-text"
                placeholder="Type your first name"
                aria-describedby="component-error-text"
            />
            <FormHelperText sx={{ minHeight: "20px" }} id="component-error-text">
                {error}
            </FormHelperText>
        </FormControl>
    );
};

const AuthLastName = ({
                                value,
                                onChange,
                                error,
                            }: {
    value: string;
    onChange: any;
    error?: string;
}) => {
    return (
        <FormControl error={!!error} variant="outlined" size="small">
            <OutlinedInput
                value={value}
                onChange={(e) => onChange(e.target.value)}
                id="outlined-error-helper-text"
                placeholder="Type your last name"
                aria-describedby="component-error-text"
            />
            <FormHelperText sx={{ minHeight: "20px" }} id="component-error-text">
                {error}
            </FormHelperText>
        </FormControl>
    );
};

const AuthTextInputPass = ({
                               value,
                               onChange,
                               error,
                           }: {
    value: string;
    onChange: Dispatch<SetStateAction<string>>;
    error?: string;
}) => {
    return (
        <FormControl error={!!error} variant="outlined" size="small">
            <OutlinedInput
                value={value}
                type="password"
                onChange={(e) => onChange(e.target.value)}
                id="outlined-error-helper-text"
                placeholder="Type your password"
                aria-describedby="component-error-text"
            />
            <FormHelperText sx={{ minHeight: "20px" }} id="component-error-text">
                {error}
            </FormHelperText>
        </FormControl>
    );
};

const AuthTextPassConfirm = ({
                                 value,
                                 onChange,
                                 error,
                             }: {
    value: string;
    onChange: Dispatch<SetStateAction<string>>;
    error?: string;
}) => {
    return (
        <FormControl error={!!error} variant="outlined" size="small">
            <OutlinedInput
                value={value}
                type="password"
                onChange={(e) => onChange(e.target.value)}
                id="outlined-error-helper-text"
                placeholder="Confirm your password"
                aria-describedby="component-error-text"
            />
            <FormHelperText sx={{ minHeight: "20px" }} id="component-error-text">
                {error}
            </FormHelperText>
        </FormControl>
    );
};

const StoryInput = ({
                                 value,
                                 onChange,
                                 error,
                             }: {
    value: string;
    onChange: Dispatch<SetStateAction<string>>;
    error?: string;
}) => {
    return (
        <FormControl error={!!error} variant="outlined" size="small" sx={{width:'100%'}}>
            <OutlinedInput
                value={value}
                onChange={(e) => onChange(e.target.value)}
                id="outlined-error-helper-text"
                placeholder="Write any text you want"
                aria-describedby="component-error-text"
                sx={{width:'100%'}}
                multiline
            />
            <FormHelperText sx={{ minHeight: "20px" }} id="component-error-text">
                {error}
            </FormHelperText>
        </FormControl>
    );
};
