import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PaperComp = (props) => {
    const url = new URL(props.url);
    let domain = url.hostname;
    let abstract='';
    if(props.abstract === null){
        abstract='Go to site to read more about it.';
    } else {
        abstract=props.abstract.substring(0,200)+'...';
    }

    // function handleExplore(){
    //     window.location.replace(props.url);
    // }

    return (
        <Paper elevation={3} style={{padding:"2px", marginBottom:"8px"}}>
            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin:"8px", marginBottom:"16px"}}>
                <Link href="#" style={{fontWeight:"700", fontSize:'16px'}}>{domain}</Link>
                <Box style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", color:"#1976d2"}}>
                <BookmarkBorderOutlinedIcon />
                Bookmark
                <MoreVertIcon />
                </Box>
            </Box>

            <Box style={{textAlign:"left", margin:"8px"}}>
            <span style={{display:"block", fontWeight:"700", marginBottom:"16px", fontSize:'20px', letterSpacing:"-2%" }}>
            {props.title}
            </span>
            <span style={{fontWeight:"500", fontSize:'16px', marginBottom:"16px", lineHeight:"140%"}}>
            {abstract}
            </span>
            </Box>


            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin:"8px", marginBottom:"16px", marginTop:"16px"}}>
            <Box style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "60%" }} >
                <Link href="#" style={{marginRight:"16px", fontWeight:"700", fontSize:'16px'}}>Cited by {props.citationCount}</Link>
                <Link href="#" style={{fontWeight:"700", fontSize:'16px'}}>View all versions</Link>
            </Box>
            <Box style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "40%" }} >
                <Button variant="outlined" style={{marginRight:"8px", fontWeight:"700", fontSize:'10px', letterSpacing:"3%"}}>Cite</Button>
                <Button variant="contained" style={{fontWeight:"700", fontSize:'10px', letterSpacing:"3%"}}>Explore</Button>
            </Box>
            </Box>
        </Paper>
    )
}

export default PaperComp