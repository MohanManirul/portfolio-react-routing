import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = (props) => {

    const BaseURL = import.meta.env.VITE_IMG_URL


    return (
        <div>
            {
                props.list.map((item, index)=>{
                    return(
                        <div key={index}>
                            <Link key={index} to={"/details/"+item['id']}>
                                <figure>
                                    <img src={BaseURL+item.image} alt="Image" />
                                </figure>

                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.descriptions}</p>
                                </div>
                            
                            </Link>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default BlogList;