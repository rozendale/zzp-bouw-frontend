// import { useState, useEffect } from 'react';
// import {Helmet} from "react-helmet-async";
import { useWerkOmschrijvingenListQuery } from '../services/apiSlice';
// import { useNavigate, useParams } from "react-router-dom";
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import EditIcon from '@mui/icons-material/Edit';

function WerkOmschrijvingenList() {

    // const useParam:any = useParams();
    // const href:string = `/beheer/projecten/`;
    // const navigate  = useNavigate();
    const { data, error, isLoading, isError  } = useWerkOmschrijvingenListQuery();

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
            { field: 'omschrijving', headerName: 'Omschrijving', width: 300 },
            { field: 'prijs', headerName: 'Prijs', width: 200, align: 'right'},
            { field: 'eenheid', headerName: 'Eenheid', width: 120 },
            { field: 'edit', headerName: 'Edit', width: 60, renderCell: (params) => (params.value && <Link href={`../beheer/werkomschrijving/${params.value}`}><EditIcon/></Link>)}
            ];
        const rows = data.map((item) => (
            {"id": item.id, "omschrijving": item.omschrijving, "prijs": item.prijs, "eenheid": item.eenheid, "edit": item.id}
        ))
        content = <Paper sx={{ height: 1200, width: '100%' }}>
            <Typography>
                Werk Omschrijvingen Lijst
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

export default WerkOmschrijvingenList;
