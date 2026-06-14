// import { useState, useEffect } from 'react';
// import {Helmet} from "react-helmet-async";
import { useWerkzaamhedenListQuery } from '../services/apiSlice';
// import { useNavigate, useParams } from "react-router-dom";
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


function WerkzaamhedenList() {

    // const useParam:any = useParams();
    // const href:string = `/beheer/projecten/`;
    // const navigate  = useNavigate();
    const { data, error, isLoading, isError  } = useWerkzaamhedenListQuery();

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
        const columns: GridColDef[] = [
            { field: 'id', headerName: 'ID', width: 50 },
            { field: 'project', headerName: 'Project', width: 80 },
            // { field: 'opdrachtnemer', headerName: 'Opdrachtnemer', width: 80 },
            // { field: 'opdrachtgever', headerName: 'Opdrachtgever', width: 100 },
            { field: 'datum_code', headerName: 'Datum', width: 100 },
            { field: 'omschrijving', headerName: 'Omschrijving', width: 400 },
            { field: 'uren', headerName: 'Uren', width: 100 },
            { field: 'aantal', headerName: 'Aantal', width: 100 },   
            { field: 'subtotaal', headerName: 'Subtotaal', width: 100 },     
            { field: 'klaar', headerName: 'Klaar', width: 60, renderCell: (params) => (params.value && params.value ? <CheckIcon/> : <CloseIcon/>)},
            { field: 'edit', headerName: 'Edit', width: 60, renderCell: (params) => (params.value && <Link href={`../beheer/werkzaamheid/${params.value}`}><EditIcon/></Link>)}
            ];
        const rows = data.map((item) => (
            {
                "id": item.id, 
                "project": item.project, 
                // "opdrachtnemer": item.opdrachtnemer, 
                // "opdrachtgever": item.opdrachtgever, 
                "datum_code": item.datum_code, 
                "omschrijving": item.omschrijving.omschrijving,
                "uren": item.uren,
                "aantal": item.aantal,
                "subtotaal": item.subtotaal,
                "klaar": item.klaar,
                "edit": item.id
            }
        ))
        content = <Paper sx={{ width: '100%' }}>
            <Typography>
                Projecten Lijst
            </Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            autosizeOnMount
            // initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            // checkboxSelection
            sx={{ border: 0 }}
          />
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

export default WerkzaamhedenList;
