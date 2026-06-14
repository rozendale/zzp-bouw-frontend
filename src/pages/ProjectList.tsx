// import { useState, useEffect } from 'react';
// import {Helmet} from "react-helmet-async";
import { useProjectListQuery } from '../services/apiSlice';
// import { useNavigate, useParams } from "react-router-dom";
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


function ProjectList() {

    // const useParam:any = useParams();
    // const href:string = `/beheer/projecten/`;
    // const navigate  = useNavigate();
    const { data, error, isLoading, isError  } = useProjectListQuery();

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
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'naam', headerName: 'Naam', width: 200 },
        { field: 'hoofd_aannemer', headerName: 'Aannemer', width: 80 },
        { field: 'plaats', headerName: 'Plaats', width: 100 },
        { field: 'startdatum', headerName: 'Start', width: 100 },
        { field: 'einddatum', headerName: 'Eind', width: 100 },
        { field: 'klaar', headerName: 'Klaar', width: 60, renderCell: (params) => (params.value && params.value ? <CheckIcon/> : <CloseIcon/>)},
        { field: 'edit', headerName: 'Edit', width: 60, renderCell: (params) => (params.value && <Link href={`../beheer/contact/${params.value}`}><EditIcon/></Link>)}
        ];
    const rows = data.map((item) => (
        {"id": item.id, "naam": item.naam, "hoofd_aannemer": item.hoofd_aannemer, "plaats": item.plaats, "startdatum": item.startdatum, "einddatum": item.einddatum, "klaar": item.klaar, "edit": item.id}
    ))
    content = <Paper sx={{ height: 1200, width: '100%' }}>
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

export default ProjectList;
