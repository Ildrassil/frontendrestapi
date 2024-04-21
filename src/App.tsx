import {useEffect, useState} from "react";
import axios from "axios";
import {PostType} from "./model/PostType.tsx";
import "./App.css";
import {PostGallery} from "./components/postGallery.tsx";
import {Link, Route, Routes} from "react-router-dom";
import DetailPage from "./components/DetailPage.tsx";


function App() {
    const [posts, setPosts] = useState<PostType[]>([]);

    const getData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            if (response) {
                setPosts([...response.data]);
            } else {
                console.log("Error fetching data");
            }
        } catch (error) {
            console.log("Error fetching data");
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (<div className={"flex flex-wrap items-center"}>
        <div className={"justify-center text-center flex flex-col"}>
            <Link to={"/"}>
                <h1
                className={"justify-center sticky align-middle my-12 text-4xl text-center font-semibold fontfamily-roboto font-sans text-textHeader"}>
                RestApi – JSON Placeholder
               </h1>
            </Link>
            <Routes>
                <Route path={"/"} element={(posts.length>0)&&<PostGallery Posts={posts}/>}/>
                <Route path={"/post/:id"} element={<DetailPage/>}/>
            </Routes>


        </div>
    </div>);
}

export default App
