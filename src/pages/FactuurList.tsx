// import { useState, useEffect } from 'react';
// import {Helmet} from "react-helmet-async";
import { useFactuurListQuery } from '../services/apiSlice';
import { useNavigate } from "react-router-dom";
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import EditIcon from '@mui/icons-material/Edit';
import type {IFactuurDetail} from '../services/modelspy.types';


function FactuurList() {

    // const useParam:any = useParams();
    // const href:string = `/beheer/projecten/`;
    const navigate  = useNavigate();
    const { data, error, isLoading, isError  } = useFactuurListQuery();

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
            { field: 'status', headerName: 'Status', width: 90 },
            { field: 'factuur_nr', headerName: 'Factuur', width: 75, align: "right", renderCell: (params) => (params.id && <Link href={`../../beheer/factuur/${params.id}`}>{params.value}</Link>)},
            { field: 'opdrachtgever', headerName: 'Opdrachtgever', width: 180 },
            { field: 'betreft', headerName: 'Betreft', width: 300 },
            { field: 'factuur_datum', headerName: 'Factuur_datum', width: 100 },      
            // { field: 'klaar', headerName: 'Klaar', width: 60, renderCell: (params) => (params.value && params.value ? <CheckIcon/> : <CloseIcon/>)},
            { field: 'edit', headerName: 'Edit', width: 60, renderCell: (params) => (params.value && <Link href={`../../beheer/facturen/edit/${params.id}`}><EditIcon/></Link>)}
            ];
        const rows = data.map((item) => (
            {
                "id": item.id,
                "factuur_nr": item.factuur_nr,
                "opdrachtgever": item.opdrachtgever.naam, 
                "status": item.status,
                "betreft": item.betreft,
                "factuur_datum": item.factuur_datum,
                // "klaar": item.uren,
                "edit": item.id,
            }
        ))
        content = <Paper sx={{ width: '100%' }}>
            <Typography>
                Facturen Lijst
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

export default FactuurList;
