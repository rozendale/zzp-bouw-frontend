import { useState, useEffect, type JSXElementConstructor, type ReactElement, type ReactNode, type ReactPortal, type SetStateAction } from 'react';
// import {Helmet} from "react-helmet-async";
import { useDesignerListQuery } from '../../services/apiSlice';
import Paper from '@mui/material/Paper';
import type { IDesignerList } from '../../services/modelspy.types';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';


function DesignerList() {
    const { data, error, isLoading, isError, isSuccess  } = useDesignerListQuery();
    const preData = [{"id":1,"xas":0,"yas":0,"colour":"white","lifespan_type":1, "hide":false},{"id":2,"xas":60,"yas":0,"colour":"white","lifespan_type":1, "hide":false}]
    const defaultRows = [
        {"id": 1, "species": "", "colour": "#374fef", "hide": false  },
        {"id": 2, "species": "", "colour": "blue", "hide": true},
        {"id": 3, "species": "", "colour": "#27A3F5", "hide": true},
        {"id": 4, "species": "", "colour": "red", "hide": false},
        {"id": 5, "species": "", "colour": "orange", "hide": true},
        {"id": 6, "species": "", "colour": "#F54927", "hide": true},
        {"id": 7, "species": "", "colour": "green", "hide": false},
    ]
    const [listRondjes, setListRondjes] = useState(preData);
    const [currentColour, setCurrentColour] = useState("blue");
    const [rows, setRows]:any = useState(defaultRows);
    
    function handleClick(circle: IDesignerList) {
        const newRondjes = listRondjes.map((item) => {
            if (item.id === circle.id) {
                const updatedItem = {...item, colour:currentColour,};
                return updatedItem;
              }
              return item;
            });
        setListRondjes(newRondjes)
    }
    function handleHide(row:any) {
        const newList = rows.map((item:any) => {
            if (item.id === row.id) {
                const updatedItem = {...item, hide: row.hide ? false : true,};
                return updatedItem;
            }
            return item;
          });
        setRows(newList);
    }
    useEffect(() => {
        rows.map((row: { hide: any; colour: string; }) => {
            if (row.hide) {
                const newListRondjes = listRondjes.map((circle) => {
                    if (row.colour === circle.colour) {
                        const updateCircle = {...circle, hide:true};
                        return updateCircle;} else {
                    const updateCircle2 = {...circle, hide:false};
                    return updateCircle2;}
                          
            });
            setListRondjes(newListRondjes);
            console.log(newListRondjes);
        }});
	}, [rows]);

    useEffect(() => {
        data && setListRondjes(data)
	}, [isSuccess]);

    let content:any
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (error) {
        const newError:any = error && error;
        console.log(error)
        isError && newError && <p>Error!</p>;
        content = <p>New Eroor!</p>
    } else if (data) {
    content = <Paper sx={{ height: 800, width: '100%' }}>
        <svg 
            height="550"
            width="1200"
            viewBox="-30 -30 1280 600"
            display= "block"
            xmlns="http://www.w3.org/2000/svg"
        >
        {listRondjes.map(x => (
            x.hide ? <></> :
            <>
            <circle 
                key={`c${x.id}`} 
                cx={x.xas} 
                cy={x.yas} 
                r="20px"
                fill={x.colour}
                stroke="black"
                strokeWidth="1"
                onClick={(() => handleClick(x))}
            />
            {/* <text key={`t${x.id}`} x={x.xas} y={x.yas} fill="black" fontSize="9">{ x.id}</text> */}
            </>
            ))}
        </svg>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell align="left">ID</TableCell>
                    <TableCell align="left">Species</TableCell>
                    <TableCell align="left">Hide</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row:any) => (
                <TableRow
                    key={`r${row.id}`}
                    onClick={() => (setCurrentColour(row.colour))}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 },
                        "background": (row.colour === currentColour) ? currentColour : "none"}}
                >
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        <TextField  type="number" 
                            // disabled={row.hide}                    
                            // label="Species"
                            fullWidth
                            defaultValue={row.species}
                            value={row.species}
                            onChange={(event) => {
                                const newList = rows.map((item: { id: any; }) => {
                                    if (item.id === row.id) {
                                        const updatedItem = {...item, species: event.target.value};
                                        return updatedItem;
                                    }
                                    return item;
                                  });
                                setRows(newList);
                            }}
                        />
                    </TableCell>
                    <TableCell align="left">
                        <Button 
                            onClick={(() => handleHide(row))} 
                            sx={{background: row.hide ? "grey" : "black"}}
                        >
                            {row.hide ? "show" : "hide"}
                        </Button>
                        {row.hide}
                    </TableCell>
                </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
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

export default DesignerList;
