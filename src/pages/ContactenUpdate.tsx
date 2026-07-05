import { useState, useEffect } from 'react';
// import {Helmet} from "react-helmet-async";
import type { IContactenDetail} from '../services/modelspy.types';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import { useContactenDetailQuery, useContactenUpdateMutation } from '../services/apiSlice';
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from "react-router-dom";
import {FormInputText } from "../form-component/FormInputText";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { Controller } from "react-hook-form";

function ContactenUpdate() {

    const useParam:any = useParams();
    // const href:string = `/beheer/contacten/`;
    const navigate  = useNavigate();
    const [textValue, setTextValue] = useState<string>("");
    const { data, error, isLoading, isError  } = useContactenDetailQuery(useParam.id);
    // const { data, isLoading, isError  } = useContactenUpdateMutation(useParam.id);
    const [updatePost, result] = useContactenUpdateMutation(useParam.id)
    // const [addMyModel, result] = useNewMyModelMutation();
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
        values: data,
        resetOptions: {
            keepDirtyValues: true,
        }
    });
    const onSubmit = async (data: IContactenDetail) => {
        try {
            await updatePost([data, useParam.id]);
            // await updatePost(data).unwrap();
            // result.data && navigate("../beheer/contacten"); 
        } catch (err) {
            console.log('fail', err)
        }
    };
    useEffect(() => {
            result.data && navigate("../beheer/contacten");         
        }, [result.data]);

    
    // // on succes
    // const resultData:void | IContactenDetail = result.data
    //     result.data && navigate("../");    

    // const handleSubmit = async (e: any) => {
    //     e.preventDefault();
    //     const my_result1: MyFilter[] = myFilters.filter(x => (x.my_filter1 !== 1))
    //     setMyResult1(my_result1);
    //     await addMyModel(myModel)
    //     // console.log(result);
    //     setButtonValue("Loading")
    // };
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
    content = <><form>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    
                    <Grid size={10}>                        
                        <Box sx={{ minWidth: 120, padding: 2}}>
                            <FormControl fullWidth>
                                <FormInputText
                                    name="naam"
                                    control={control}
                                    type="string" 
                                    label="Naam: "
                                />
                            </FormControl>
                        </Box>
                    </Grid>                    

                    <Grid size={10}>                        
                        <Box sx={{ minWidth: 120, padding: 2}}>
                            <FormControl fullWidth>
                                <FormInputText
                                    name="straat_nummer"
                                    control={control}
                                    type="string" 
                                    label="Straat nummer: "
                                />
                            </FormControl>
                        </Box>
                    </Grid>

                    <Grid size={5}>                        
                        <Box sx={{ minWidth: 120, padding: 2}}>
                            <FormControl fullWidth>
                                <FormInputText
                                    name="postcode"
                                    control={control}
                                    type="string" 
                                    label="Postcode: "
                                />
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid size={5}>                        
                        <Box sx={{ minWidth: 120, padding: 2}}>
                            <FormControl fullWidth>
                                <FormInputText
                                    name="plaats"
                                    control={control}
                                    type="string" 
                                    label="Plaats: "
                                />
                            </FormControl>
                        </Box>
                    </Grid>

                    <Grid size={5}>                        
                        <Box sx={{ minWidth: 120, padding: 2}}>
                            <FormControl fullWidth>
                                <FormInputText
                                    name="email"
                                    control={control}
                                    type="string" 
                                    label="Email: "
                                />
                            </FormControl>
                        </Box>
                    </Grid>  

                    <Grid size={5}>                        
                        <Box sx={{ minWidth: 120, padding: 2}}>
                            <FormControl fullWidth>
                                <FormInputText
                                    name="telefoon"
                                    control={control}
                                    type="string" 
                                    label="Telefoon: "
                                />
                            </FormControl>
                        </Box>
                    </Grid>

                    <Grid size={10}>                        
                        <Box sx={{ minWidth: 120, padding: 2}}>
                            <FormControl fullWidth>
                                <FormInputText
                                    name="kvk_nummer"
                                    control={control}
                                    type="string" 
                                    label="KVK-nummer: "
                                />
                            </FormControl>
                        </Box>
                    </Grid>  

                    <Grid size={10}>                        
                        <Box sx={{ minWidth: 120, padding: 2}}>
                            <FormControl fullWidth>
                                <FormInputText
                                    name="btw_nummer"
                                    control={control}
                                    type="string" 
                                    label="BTW-nummer: "
                                />
                            </FormControl>
                        </Box>
                    </Grid>   

                    <Grid size={10}>                        
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
        </form></>
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
