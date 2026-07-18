import { useState, useEffect } from 'react';
import { useTransactieListQuery } from '../services/apiSlice';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useForm } from "react-hook-form";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import EditIcon from '@mui/icons-material/Edit';
import type {ITransactieList} from '../services/modelspy.types'
import Table from '@mui/material/Table';
import FormControl from '@mui/material/FormControl';
import { FormInputText } from '../form-component/FormInputText';
import TransactieListNewRecords from './TransactieListNewRecords.comp.';

function TransactieList() {

    const { data, error, isLoading, isError  } = useTransactieListQuery();
    // const [rows, setRows] = useState(["", ""]);

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
            { field: 'invuldatum', headerName: 'InvulD', width: 90 },
            { field: 'datum', headerName: 'Datum', width: 75, align: "right", renderCell: (params) => (params.id && <Link href={`../../beheer/factuur/${params.id}`}>{params.value}</Link>)},
            { field: 'jaar', headerName: 'Jaar', width: 180 },
            { field: 'kwartaal', headerName: 'Kwar', width: 300 },
            { field: 'week', headerName: 'Week', width: 100 },      
            { field: 'maand', headerName: 'Maand', width: 60, },
            { field: 'bedrag', headerName: 'Bedrag', width: 60, },
            { field: 'bankrekening', headerName: 'IBAN', width: 60, },
            { field: 'grootboeknummer', headerName: 'Grootboeknummer', width: 60, },
            { field: 'btw', headerName: 'BTW', width: 60, },
            { field: 'btw_bedrag', headerName: 'BTW Bedrag', width: 60, },
            { field: 'zakelijk_ex_btw', headerName: 'Zakelijk Bedrag', width: 60, },
            ];
        const rows = data.map((item) => (
            {
                "id": item.id,
                "invuldatum": item.invuldatum,
                "datum": item.datum,
                "jaar": item.jaar,
                "kwartaal": item.kwartaal,
                "week": item.week,
                "maand": item.maand,
                "bedrag": item.bedrag,
                "bankrekening": item.bankrekening,
                "grootboekrekening": item.grootboekrekening,
                "btw": item.btw,
                "btw_bedrag": item.btw_bedrag,
                "zakelijk_ex_btw": item.zakelijk_ex_btw,
            }
        ))
       
        
        content = <Paper sx={{ width: '100%' }}>
            <Typography>
                Transactie Tabel
            </Typography>
        <DataGrid
            rows={rows}
            columns={columns}
            autosizeOnMount
            // onRowClick={handleRowClick}
            editMode="row"
            // initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 20]}
            disableRowSelectionOnClick
            sx={{ border: 1, layoutMode: "grid"}}
        />
        <TransactieListNewRecords />
        
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

export default TransactieList;
