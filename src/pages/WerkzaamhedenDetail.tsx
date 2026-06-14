import { useState, useEffect } from 'react';
// import {Helmet} from "react-helmet-async";
import Paper from '@mui/material/Paper';
import { useWerkzaamhedenDetailQuery, useProjectListQuery } from '../services/apiSlice';
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


function WerkzaamhedenDetail() {

    const useParam:any = useParams();
    // const href:string = `/beheer/project/`;
    // const navigate  = useNavigate();
    const { data, error, isLoading, isError  } = useWerkzaamhedenDetailQuery(useParam.id);
    const { data:data2 } = useProjectListQuery();
    const projectArray:any = data2?.map((item: { naam:string; }) => item.naam);
    const [project, setProject] = useState("");
    // const [factuur, setFactuur] = useState(0);
    // const [datumCode, setDatumCode] = useState(0);
    // const [omschrijving, setOmschrijving] = useState(0);
    // const [opmerking, setOpmerking] = useState(0);
    // const [uren, setURen] = useState(0);
    // const [aantal, setAantal] = useState(0);
    // const [zelfstandigheid, setZelfstandigheid] = useState(0);
    // const [klaar, setKlaar] = useState(false);

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
        <h4>Werkzaamheid Detail</h4>
        <p>{data && data.omschrijving.omschrijving}</p>
        <Grid container>        
            <Grid size={12} height= "100%"> 
                <Typography>Upload to PlantPhotoDatabase</Typography>
            </Grid>
            <Grid size={12} height= "100%">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>       
                        <Autocomplete
                            id="combo-box-2"
                            sx={{ marginBottom: 2 }}
                            options={projectArray}
                            // isOptionEqualToValue={(option, value) => true}
                            getOptionLabel={(option) => option}
                            // isOptionEqualToValue={(option, value) => option.id === value.id}
                            fullWidth
                            value={project}
                            onChange={(newValue: any) => {
                                setProject(newValue)
                                // setDisablePhotoType(false)                    
                            }}
                            renderInput={(params) => <TextField {...params} label="Poject" />}
                        />
                    </FormControl>
                </Box>
            </Grid>
            <Grid size={12} height= "100%">
                {/* <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <TextField  type="number"
                            label="Rate the photo"
                            value={project}
                            onChange={(event) => setProject(+event.target.value)}
                        />
                    </FormControl>
                </Box> */}
            </Grid>
        </Grid>

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

export default WerkzaamhedenDetail;
