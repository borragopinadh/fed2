
import React,{useEffect,useState} from 'react'
import axios from 'axios'
function DataFetching(){
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            setPosts(res.data);

        })
        .catch(err=>{console.log("error ");})
    },[]);
    return(
    <div>
        <h1>
            Data Fetching
        </h1>
        <ol>
            {
                posts.map((post)=>(
                    <li key={post.id}>
                        {post.id}-{post.title}
                    </li>
                ))
            }
        </ol>
    </div>
    );
}
export default DataFetching;
