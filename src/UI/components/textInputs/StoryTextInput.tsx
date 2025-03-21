import {TextField} from "@mui/material";

const StoryTextInput = () => {
    return (
        <TextField
            id="outlined-textarea"
            label="Paste the text here. Maximum 1000 characters"
            placeholder="Placeholder"
            sx={{width: '100%'}}
            multiline
        />
    )
}

export default StoryTextInput;
