import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

import BlogDetails from './BlogDetails';
import { postDetails } from '../ApiCalling/ApiRequest';

const DetailsPage = () => {

    let {id} = useParams();

    const [list , setList] = useState(null);

        useEffect(()=>{
            ((async()=>{
                let res = await postDetails(id);
                setList(res.data)
            }))()
        },[])


    
    return (
        <div>
            <p>post details page</p>
            {
                list===null?<Loader/> : <BlogDetails list={list}/>
            }
        </div>
    );
};

export default DetailsPage;