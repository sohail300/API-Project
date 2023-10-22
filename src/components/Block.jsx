import { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ReplayIcon from '@mui/icons-material/Replay';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from './Paper.jsx'

import axios from 'axios';

const Block = () => {
    const [value, setValue] = useState(2);
    const [result, setResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const handleTabChanges = (event, newValue) => {
        setValue(newValue);
    };

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    let data = JSON.stringify({
        "keyword": searchValue,
        "limit": "5"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.gyanibooks.com/search_publication/',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };

    function search() {
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response));
                console.log(JSON.stringify(response.data.data));
                setResult(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Card style={{ height: "90vh", width: "34vw", padding: "16px" }}>
            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <SkipNextIcon style={{ color: "#484848" }} />
                <Fab variant="extended" style={{ color: "#fff", backgroundColor: "#14532d", height: "5vh" }}>
                    Originality Score 0%
                    <ReplayIcon />
                </Fab>
            </Box>

            <Box style={{ margin: "16px 0px" }}>
                <Tabs aria-label="basic tabs example" value={value} onChange={handleTabChanges} style={{ backgroundColor: "#efeffd", borderRadius: "4px" }}>
                    <Tab label="Summarize" style={{ color: "#1976d2", borderRadius: "4px" }} />
                    <Tab label="Elaborate" style={{ color: "#1976d2", borderRadius: "4px" }} />
                    <Tab label="Research" style={{ color: "#1976d2", borderRadius: "4px" }} />
                    <Tab label="Chat with PDF" style={{ color: "#1976d2", borderRadius: "4px" }} />
                </Tabs>
            </Box>
            {/* border:"1px solid red" */}
            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "16px 0px", height: "12%" }}>
                <TextField id="outlined-basic" autoComplete="off" label="Search" variant="outlined" value={searchValue} onChange={handleSearch} style={{ width: "84%", height: "80%", backgroundColor: "#eff6ff" }} />
                <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "12px", height: "44%", width: "8%", backgroundColor: "#1976d2", borderRadius: "4px" }}>
                    <SearchIcon onClick={search} style={{ color: "#fff", fontSize: "32px" }} />
                </Box>
            </Box>

            <Box>
                <Box style={{ display: "flex", alignItems: "center", color: "#1976d2" }}>
                    Upgrade
                    <ArrowForwardIcon style={{ fontSize: "medium" }} />
                </Box>
                <LinearProgress variant="determinate" value={100} style={{ margin: "8px 0px" }} />
            </Box>

            <Box style={{overflowY: 'scroll', maxHeight: "56vh"}}>
                
            {result.length>0 ? (
                result.map((item, index) => (
                    <Paper key={index} citationCount={item.citationCount} title={item.title} url={item.url} abstract={item.abstract}/>
                ))
            ) : (
                <p></p>
            )}
            </Box>
        </Card>
    )
}


export default Block