// import { useState, useEffect } from 'react';
// import {Helmet} from "react-helmet-async";
import Grid from '@mui/material/Grid';
import { useNumberListQuery } from '../../services/apiSlice';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



function NumberList() {

    // const useParam:any = useParams();
    // const href:string = `/beheer/projecten/`;
    // const navigate  = useNavigate();
    const { data, error, isLoading, isError  } = useNumberListQuery();

    let content:any
    if (isLoading) {
        // NotificationManager.warning("Loading your models")
        content = <p>Loading...</p>
    } else if (error) {
        const newError:any = error && error;
        console.log(error)
        isError && newError && <p>Error!</p>;
        content = <p>New Eroor!</p>
    } else if (data) {
        // let datetaken = moment(data.date_taken).format('YYYY/MM/DD HH:mm')
        const points:string[] = [
            "-27,-26", "-3,-26", "3,-26", "27,-26",
            "0,-21",
            "-30,-10", "-17, -10", "-6,-10", "6,-10", "17,-10", "30,-10",
            "-11,0", "11,0",
            "-30,10", "-17, 10", "-6,10", "6,10", "17,10", "30,10",
            "0,21",
            "-27,26", "-3,26", "3,26", "27,26",
        ]
    content = <Paper sx={{ height: 4000, width: '100%' }}>
        <p>test {`"${points[18]} ${points[20]}"`}</p>
        <svg 
            width="3000" 
            height="5000" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="-1500 -800 4000 4000"
            role="img"
            aria-labelledby="title desc"
        >
            <title id="title">Orange triangle</title>
            <desc id="desc">An orange triangle.</desc>

            {/* <polyline points={`"${points[0]} ${points[11]}"`} fill="none" stroke="red" strokeWidth="1" /> */}
            {/* <polyline points={`"${points[21]} ${points[22]}"`} fill="none" stroke="black" strokeWidth="1" /> */}
            {/* <polyline points="77,24 47,76" fill="none" stroke="red" strokeWidth="1" />
            <polyline points="30,10 -27,26" fill="none" stroke="green" strokeWidth="1" /> */}
            
            {data.map(x => (
                <>
                
                <polyline points={x.lin1} fill="none" stroke="blue" strokeWidth="9" />
                <polyline points={x.lin2} fill="none" stroke="red" strokeWidth="12"/>
                <polyline points={x.lin3} fill="none" stroke="red" strokeWidth="3" />
                <polyline points={x.lin4} fill="none" stroke="red" strokeWidth="3" />
                <text x={x.xas} y={x.yas} fill={x.prime ? "red" : "black"}>{ x.number}</text>
                </>
            ))}
            {/* <polyline points="20,40.7 80,40.7 " fill="none" stroke="red" strokeWidth="1" />
            <polyline points="20,59.5 80,59.5 " fill="none" stroke="red" strokeWidth="1" />
            <polyline points="23,24 53,76 " fill="none" stroke="red" strokeWidth="1" />
            <polyline points="47,24 77,76 " fill="none" stroke="red" strokeWidth="1" />
            <polyline points="53,24 23,76 " fill="none" stroke="red" strokeWidth="1" />
            <polyline points="77,24 47,76 " fill="none" stroke="red" strokeWidth="1" /> */}
            
            {/* <polygon points="50,150 150,150 100,50" fill="orange" stroke="black" strokeWidth="2" /> */}
            
        </svg>
    </Paper>
    } else {
        console.log("data")
    }
    return (
        <>
            {content}
        </>
    );
}

export default NumberList;
