// import { useState, useEffect } from 'react';
// import {Helmet} from "react-helmet-async";
import { useFactuurDetailQuery } from '../services/apiSlice';
// import { useWerkzaamhedenDetailQuery } from '../services/apiSlice';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { setHistoryPathAPI } from '../services/urlHistorySlice';
import { useAppDispatch } from '../services/hooks';
import rozendaleLogo from '../../src/assets/rozendale-logo.jpg'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function FactuurNew() {

    const useParam:any = useParams();
    const navigate  = useNavigate();
    const dispatch = useAppDispatch();
    // const href:string = `/beheer/project/`;
    // const navigate  = useNavigate();
    const { data, error, isLoading, isError  } = useFactuurDetailQuery(useParam.id);
    // const [imgHeight, setImgHeight] = useState("384");
    // const { data:data1, error:error1, isLoading:isLoading1, isError:isError1  } = useWerkzaamhedenDetailQuery(1);
    
    function handleWerkzaamheid(e: any, id:number|undefined) {
        e.preventDefault();
		e.stopPropagation();
        dispatch(setHistoryPathAPI(`/beheer/werkzaamheid/${id}`))
        navigate(`/beheer/werkzaamheid/${id}`)
        console.log(id)
    }

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
    content = <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={8}>
                    <Paper sx={{height: 220}}>
                        <img src={rozendaleLogo} className="logo rozendale" alt="React logo" />
                    </Paper>
                </Grid>
                <Grid size={4}>
                    <Paper sx={{height: 220}}>
                        <Typography align="right">
                            ML Rozendale <br/>
                            Johan Willem Frisostraat 19<br/>
                            8606 CR  Sneek<br/>
                            0615340316<br/>
                            m@rozendale.com<br/>
                            <br/>
                            Bank nr.: NL77 ABNA 0813 1466 82<br/>
                            BTW nr.: NL001131553B29<br/>
                            KvK nr.: 70874026<br/>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid size={1}></Grid>
                <Grid size={4}>
                    <Paper sx={{height: 100}}>
                        <Typography align="left">
                            {data.opdrachtgever.naam}<br/>
                            {data.opdrachtgever.straat_nummer}<br/>
                            {data.opdrachtgever.postcode} {data.opdrachtgever.plaats}<br/>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid size={7}></Grid>

                <Grid size={12}>
                    <Paper sx={{padding:"12px", height: 180}}>
                        <Typography align="left">
                            BTW_nr klant: {data.opdrachtgever.btw_nummer ? data.opdrachtgever.btw_nummer : ""}<br />
                            Betreft: {data.status} {data.factuur_nr} - {data.betreft}<br />
                            Factuur Datum: {data.factuur_datum}<br />
                            {data.herinnering_datum1 ? `Herinneringsdatum: ${data.herinnering_datum1}` : ""}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid size={12}>
                    <TableContainer component={Paper}>
                    <Table sx={{ maxWidth: 1200 }} size="medium" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="left">Datum</TableCell>
                            <TableCell align="left">Project</TableCell>
                            <TableCell align="left">Werk Omschrijving</TableCell>
                            <TableCell align="right">Aantal</TableCell>
                            <TableCell align="right">Uren</TableCell>
                            <TableCell align="right">Prijs</TableCell>
                            <TableCell align="right">Subtotaal</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {data && data.werkzaamheden_factuur.map((row) => (
                            <TableRow
                            key={`${row.datum_code}-${row.id}`}
                            sx={row.datum_code % 2 === 0 ? {background:"#f5f4fc"} : {background:"#eaf4fc"}}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.datum_code}</TableCell>
                                <TableCell align="left">{row.project.naam}</TableCell>
                                <TableCell align="left"> 
                                    <Typography onClick={(e) => handleWerkzaamheid(e, row.id)}>
                                        {row.omschrijving.omschrijving}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">{row.aantal} {row.omschrijving.eenheid}</TableCell>
                                <TableCell align="right">{row.uren}</TableCell>
                                <TableCell align="right">€ {row.omschrijving.prijs}</TableCell>
                                <TableCell align="right">€ {row.subtotaal}</TableCell>
                            </TableRow>
                        ))}
                            <TableRow key="subtotaal">
                                <TableCell align="left" colSpan={6}>Totaal Bedrag:</TableCell>
                                <TableCell align="right">€ {data.bedrag_totaal}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Box>



    </>
    } else {
        console.log("data")
    }
    return (
        <>
            {content}
        </>
    );
}

export default FactuurNew;
