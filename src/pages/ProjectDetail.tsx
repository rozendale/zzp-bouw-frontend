// import { useState, useEffect } from 'react';
// import {Helmet} from "react-helmet-async";
import { useProjectDetailQuery } from '../services/apiSlice';
import { useParams } from "react-router-dom";


function ProjectDetail() {

    const useParam:any = useParams();
    // const href:string = `/beheer/project/`;
    // const navigate  = useNavigate();
    const { data, error, isLoading, isError  } = useProjectDetailQuery(useParam.id);

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
        <h4>Project Detail</h4>
        <p>{data && data.naam}</p>
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

export default ProjectDetail;
