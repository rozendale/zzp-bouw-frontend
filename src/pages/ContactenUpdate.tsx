import { useState, useEffect } from 'react';
// import {Helmet} from "react-helmet-async";
import type { IContactenDetail} from '../services/modelspy.types';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import { useContactenDetailQuery } from '../services/apiSlice';
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
import {FormInputText } from "../form-component/FormInputText";
import Button from '@mui/material/Button';
// import { Controller } from "react-hook-form";

function ContactenUpdate() {

    const useParam:any = useParams();
    // const href:string = `/beheer/contacten/`;
    // const navigate  = useNavigate();
    const [textValue, setTextValue] = useState<string>("");
    const { data, error, isLoading, isError  } = useContactenDetailQuery(useParam.id);
    const defaultValues = {
        "id": 0,
        "naam": "",
        "straat_nummer": "",
        "postcode": "",
        "plaats": "",
        "email": "",
        "telefoon": "",
        "kvk_nummer": "",
        "btw_nummer": "",
    }
    const {register, handleSubmit, reset, control, setValue } = useForm<IContactenDetail>({
        defaultValues: defaultValues,
    });
    const onSubmit = (data: IContactenDetail) => console.log(data);
    // const { register, handleSubmit, watch, formState: {errors}} = useForm();
    

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
    content = <form>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={8}>                        
                        <Box sx={{ minWidth: 120, padding: 2}}>
                            <FormControl fullWidth>
                                <FormInputText
                                    name="naam"
                                    control={control}
                                    type="string" 
                                    label="Naam: "
                                    // value={data.naam}
                                    // value={textValue}
                                    // onChange={onTextChange}
                                    // onChange={(event) => {
                                    //     setValue(event.target.value)
                                    // }}
                                />
                            </FormControl>
                        </Box>
                    </Grid>                    
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={8}>                        
                        <Box sx={{ minWidth: 120, padding: 2}}>
                            <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
                                Submit
                            </Button>
                            <Button onClick={() => reset()} variant={"outlined"}>
                                Reset
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </form>
    } else {
        console.log("data")
    }
    return (
        <>
            {content}
        </>
    );
}

export default ContactenUpdate;
