import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import "./Main.css";
import axios from 'axios';
export class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            searchQuery: ''
        }
    }
    render() {
        return (
            <Box
                sx={{
                    //   width: 800,
                    maxWidth: '100%',
                }}
            >
                <TextField fullWidth label="search text" id="fullWidth" onKeyUp={(e) => this.searchImages(e)} />
            </Box>
        )
    }
    searchImages = (event) => {
        if (event.target.value.length >= 3) {
            axios.get(`https://imsea.herokuapp.com/api/1?q=${event.target.value}`)
                .then(result => {
                    console.log(result);
                })
        }
    }
}
export default Main