import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Box } from '@mui/material';

interface RowData {
    tempid: number;
    invul: undefined|number;
    datum: undefined|number;
    bedrag: undefined|string;
    iban: undefined|string;
    gbr: undefined|string;
    btw?: undefined|number;
}
interface FormValues {
    items:RowData[]
}
const initialData: RowData[] = [
    { tempid: 1, invul: 20260718, datum: 20260712, bedrag: "0.00", iban: "NL77ABNA0813146682", gbr: "tanken", btw: 21},
    { tempid: 2, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 3, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 4, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 5, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 6, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 7, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 8, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 9, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 10, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 11, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 12, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 13, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 14, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 15, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 16, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 17, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 18, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 19, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
    { tempid: 20, invul: undefined, datum: undefined, bedrag: undefined, iban: "NL77ABNA0813146682", gbr: undefined, btw: undefined},
]

function TransactieListNewRecords() {
    const {control, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            items: initialData
        },
    });
    
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log('Submitted Data:', data);
    };

    return (
        <Box sx={{ p: 3, maxWidth: 1500, mx: 'auto' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TableContainer component={Paper} variant="outlined">
                    <Table aria-label="editable form table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', width: "4%" }}>ID</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', width: "13%" }}>Invul</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', width: "13%"  }}>Datum</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Bedrag</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', width: "19%" }}>IBAN</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', width: "25%"  }}>GBR</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>BTW</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {initialData.map((row, index) => (
                                <TableRow key={row.tempid} sx={{'& .MuiTableCell-root': {padding:'2px 4px'}}}>
                                    <TableCell align="right">{row.tempid}</TableCell>
                                    {/* <TableCell>
                                        <Controller
                                            name={`items.${index}.invul`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField {...field} size="small" fullWidth variant="outlined" />
                                            )}
                                        />
                                    </TableCell> */}
                                    <TableCell>
                                        <Controller
                                            name={`items.${index}.invul`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    sx={{input: {textAlign: 'center'}}}
                                                    {...field}
                                                    type="number"
                                                    size="small"                                           
                                                    variant="outlined" 
                                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Controller
                                            name={`items.${index}.datum`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField 
                                                    sx={{input: {textAlign: 'center'}}}
                                                    {...field}
                                                    type="number"
                                                    size="small" 
                                                    variant="outlined" 
                                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Controller
                                            name={`items.${index}.bedrag`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField 
                                                    sx={{input: {textAlign: 'right'}}}
                                                    {...field}
                                                    type="decimal"
                                                    size="small" 
                                                    fullWidth 
                                                    variant="outlined" 
                                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Controller
                                            name={`items.${index}.iban`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    sx={{input: {textAlign: 'center'}}}
                                                    {...field}
                                                    type="string"
                                                    size="small" 
                                                    fullWidth 
                                                    variant="outlined" 
                                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Controller
                                            name={`items.${index}.gbr`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    sx={{input: {textAlign: 'left'}}}
                                                    {...field}
                                                    type="string"
                                                    size="small" 
                                                    fullWidth 
                                                    variant="outlined" 
                                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Controller
                                            name={`items.${index}.btw`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    sx={{input: {textAlign: 'center'}}}
                                                    {...field}
                                                    type="number"
                                                    size="small" 
                                                    fullWidth 
                                                    variant="outlined" 
                                                    onChange={(e) => {
                                                        if (e === undefined) {
                                                            field.onChange(undefined)
                                                        } else {
                                                        field.onChange(Number(e.target.value))
                                                        }
                                                    }}
                                                    value = {undefined}

                                                    // onChange={(e) => field.onChange(Number(e.target.value))}
                                                />
                                            )}
                                            
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    Save Table Changes
                </Box>
            </form>
        </Box>
    );
}

export default TransactieListNewRecords;
