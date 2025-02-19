import axios from "axios";

const BaseURL = "http://inertia-pos.manirul.xyz/api" 

//show menu on header
export async function postCategories(params) {
    let res = await axios.get(BaseURL+"/post-category-list");
    if(res.status===200){
        return res.data ;
    }else{
        return [];
    }
}



export async function postNewest(params) {
    let res = await axios.get(BaseURL+"/post-newest");
    if(res.status===200){
        return res.data ;
    }else{
        return [];
    }
}


export async function postDetails(id) {
    let res = await axios.get(BaseURL+"/post-details/"+id);
    if(res.status===200){
        return res.data ;
    }else{
        return [];
    }
}

