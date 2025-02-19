import React from 'react';

const BlogDetails = (props) => {

    const BaseURL = import.meta.env.VITE_IMG_URL

    return (
        <div>
            <figure>
                <img src={BaseURL+props.list.image} alt="Image" />

            </figure>
            <h2>{props.list.title}</h2>
            <p>{props.list.descriptions}</p>
        </div>
    );
};

export default BlogDetails;