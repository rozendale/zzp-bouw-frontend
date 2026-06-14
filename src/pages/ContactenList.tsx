// import { useState, useEffect } from 'react';
// import {Helmet} from "react-helmet-async";
import { useContactenListQuery } from '../services/apiSlice';
// import { useNavigate, useParams } from "react-router-dom";
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import EditIcon from '@mui/icons-material/Edit';


function ContactenList() {

    // const useParam:any = useParams();
    // const href:string = `/beheer/contacten/`;
    // const navigate  = useNavigate();
    const { data, error, isLoading, isError  } = useContactenListQuery();

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
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'naam', headerName: 'Naam', width: 250 },
        // { field: 'view', headerName: 'Navigeer', width: 150 },
        { field: 'edit', headerName: 'Edit', width: 70, renderCell: (params) => (<Link href={`../beheer/contact/${params.id}`}><EditIcon/></Link>)}
        ];
    const rows = data.map((item) => (
        {"id": item.id, "naam": item.naam, "edit": item.slug}
    ))
    content = <Paper sx={{ height: 800, width: '100%' }}>
        <Typography>
            Contacten Lijst
        </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        // initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
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

export default ContactenList;
