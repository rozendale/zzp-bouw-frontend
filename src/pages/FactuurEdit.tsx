import { useState, useEffect } from 'react';
// import {Helmet} from "react-helmet-async";
import { useFactuurDetailQuery, useContactenListQuery } from '../services/apiSlice';
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
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


function FactuurEdit() {

    const useParam:any = useParams();
    const example = {
        "id": 45,
        "factuur_nr": 26007,
        "opdrachtgever": {
            "id": 13,
            "naam": "Metselbedrijf Duan",
            "straat_nummer": "Oer de Feart 58",
            "postcode": "8502 CN",
            "plaats": "Joure",
            "email": "info@metselbedrijfduan.nl",
            "telefoon": null,
            "kvk_nummer": "0651038676",
            "btw_nummer": "85123302",
            "slug": "metselbedrijf-duan"
        },
        "status": "factuur",
        "betreft": "Opperwerk bij Dijkstra week 15",
        "factuur_datum": 20260408,
        "herinnering_datum1": null,
        "herinnering_datum2": null,
        "aanmaningsdatum": null,
        "btw_tarief": 0,
        "werkzaamheden_factuur": [
            {
                "id": 575,
                "project": {
                    "id": 33,
                    "naam": "Reduzum Loods",
                    "hoofd_aannemer": {
                        "id": 22,
                        "naam": "Dijkstra Bouw",
                        "slug": "dijkstra-bouw"
                    },
                    "plaats": "Grou",
                    "startdatum": 20260331,
                    "einddatum": 20260417,
                    "klaar": true,
                    "aantekeningen": "Deze loods was vroeger te koop voor 30k"
                },
                "opdrachtnemer": {
                    "id": 1,
                    "naam": "ML Rozendale",
                    "slug": "ml-rozendale"
                },
                "opdrachtgever": {
                    "id": 2,
                    "naam": "Oegema Metselwerken",
                    "slug": "oegema-metselwerken"
                },
                "datum_code": 20260331,
                "omschrijving": {
                    "id": 33,
                    "omschrijving": "opperwerk per uur",
                    "eenheid": "uur",
                    "prijs": "40.00"
                },
                "opmerking": "start met loods",
                "uren": "8.00",
                "aantal": "8.00",
                "eenheid": "uur",
                "zelfstandigheid": 100,
                "klaar": true,
                "subtotaal": "320.00"
            },
            {
                "id": 576,
                "project": {
                    "id": 34,
                    "naam": "Grou rijtjeswoning aanbouw",
                    "hoofd_aannemer": {
                        "id": 10,
                        "naam": "Dijkstra Draaisma",
                        "slug": "dijkstra-draaisma"
                    },
                    "plaats": "Grou",
                    "startdatum": 20260401,
                    "einddatum": 20260401,
                    "klaar": true,
                    "aantekeningen": null
                },
                "opdrachtnemer": {
                    "id": 1,
                    "naam": "ML Rozendale",
                    "slug": "ml-rozendale"
                },
                "opdrachtgever": {
                    "id": 2,
                    "naam": "Oegema Metselwerken",
                    "slug": "oegema-metselwerken"
                },
                "datum_code": 20260401,
                "omschrijving": {
                    "id": 33,
                    "omschrijving": "opperwerk per uur",
                    "eenheid": "uur",
                    "prijs": "40.00"
                },
                "opmerking": "Met Sytse en Sytse",
                "uren": "4.00",
                "aantal": "4.00",
                "eenheid": "uur",
                "zelfstandigheid": 100,
                "klaar": true,
                "subtotaal": "160.00"
            },
            {
                "id": 577,
                "project": {
                    "id": 33,
                    "naam": "Reduzum Loods",
                    "hoofd_aannemer": {
                        "id": 22,
                        "naam": "Dijkstra Bouw",
                        "slug": "dijkstra-bouw"
                    },
                    "plaats": "Grou",
                    "startdatum": 20260331,
                    "einddatum": 20260417,
                    "klaar": true,
                    "aantekeningen": "Deze loods was vroeger te koop voor 30k"
                },
                "opdrachtnemer": {
                    "id": 22,
                    "naam": "Dijkstra Bouw",
                    "slug": "dijkstra-bouw"
                },
                "opdrachtgever": {
                    "id": 13,
                    "naam": "Metselbedrijf Duan",
                    "slug": "metselbedrijf-duan"
                },
                "datum_code": 20260401,
                "omschrijving": {
                    "id": 33,
                    "omschrijving": "opperwerk per uur",
                    "eenheid": "uur",
                    "prijs": "40.00"
                },
                "opmerking": null,
                "uren": "4.00",
                "aantal": "4.00",
                "eenheid": "uur",
                "zelfstandigheid": 100,
                "klaar": true,
                "subtotaal": "160.00"
            },
            {
                "id": 578,
                "project": {
                    "id": 33,
                    "naam": "Reduzum Loods",
                    "hoofd_aannemer": {
                        "id": 22,
                        "naam": "Dijkstra Bouw",
                        "slug": "dijkstra-bouw"
                    },
                    "plaats": "Grou",
                    "startdatum": 20260331,
                    "einddatum": 20260417,
                    "klaar": true,
                    "aantekeningen": "Deze loods was vroeger te koop voor 30k"
                },
                "opdrachtnemer": {
                    "id": 1,
                    "naam": "ML Rozendale",
                    "slug": "ml-rozendale"
                },
                "opdrachtgever": {
                    "id": 13,
                    "naam": "Metselbedrijf Duan",
                    "slug": "metselbedrijf-duan"
                },
                "datum_code": 20260402,
                "omschrijving": {
                    "id": 33,
                    "omschrijving": "opperwerk per uur",
                    "eenheid": "uur",
                    "prijs": "40.00"
                },
                "opmerking": null,
                "uren": "8.00",
                "aantal": "8.00",
                "eenheid": "uur",
                "zelfstandigheid": 100,
                "klaar": true,
                "subtotaal": "320.00"
            }
        ],
        "extra_text": null,
        "uren": 24,
        "bedrag_ex_btw": "960.00",
        "bedrag_totaal": "960.00"
    }
    const navigate  = useNavigate();
    const dispatch = useAppDispatch();
    // const href:string = `/beheer/project/`;
    const { data, error, isLoading, isError  } = useFactuurDetailQuery(useParam.id);
    const { data:data2 } = useContactenListQuery();
    const contactenArray:any = data2?.map((item: { naam:string; }) => item.naam);
    // const [imgHeight, setImgHeight] = useState("384");
    // const { data:data1, error:error1, isLoading:isLoading1, isError:isError1  } = useWerkzaamhedenDetailQuery(1);
    const [factuurnummer, setFactuurnummer] = useState(0);
    const [opdrachtgever, setOpdrachtgever] = useState("");
    useEffect(() => {
        data && setFactuurnummer(data?.factuur_nr)
        // eindelijk werkt bestaande data in edit form (hiermee)

        // Deze github deudt niet. ZET DIT IN EEN ANDER BESTAAND PROJECT WAAR WEL GITHUB IS


        data && setOpdrachtgever(data?.opdrachtgever.naam)
    }, [data]);

    function handleWerkzaamheid(e: any, id:number|undefined) {
        e.preventDefault();
		e.stopPropagation();
        dispatch(setHistoryPathAPI(`/beheer/facturen/edit/${id}`))
        navigate(`/beheer/facturen/edit/${id}`)
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
                            Oranjepad 2<br/>
                            8606 XX  Sneek<br/>
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
                        <FormControl fullWidth>
                            <Autocomplete
                                sx={{ marginBottom: 2 }}
                                id="select-opdrachtgever-naam"
                                value={opdrachtgever}
                                options={contactenArray}
                                isOptionEqualToValue={(option, value) => true}
                                getOptionLabel={(option) => option || ""}
                                onChange={(event: React.SyntheticEvent, newValue: any) => {
                                    setOpdrachtgever(newValue)                    
                            }}
                                renderInput={(params) => <TextField {...params} label="Opdrachtgever" />}
                            >
                                
                            </Autocomplete>
                            
                        </FormControl>
                        {/* <Typography align="left">
                            {data.opdrachtgever.naam}<br/>
                            {data.opdrachtgever.straat_nummer}<br/>
                            {data.opdrachtgever.postcode} {data.opdrachtgever.plaats}<br/>
                        </Typography> */}
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
                <Grid size={12}>
                    <Paper sx={{padding:"12px", textAlign:"left"}}>
                        <pre>
                            {JSON.stringify(example, null, 2)}
                        </pre>
                    </Paper>
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

export default FactuurEdit;
