import {useEffect, useState} from "react";
import axios from "axios";
import {PostType} from "./model/PostType.tsx";
import "./App.css";
import {PostGallery} from "./components/postGallery.tsx";
import {Link, Route, Routes} from "react-router-dom";
import DetailPage from "./components/DetailPage.tsx";


function App() {


    return (<div className={"flex flex-wrap items-center"}>
        <div className={"justify-center text-center flex flex-col"}>
            <Link to={"/"}>
                <h1
                className={"justify-center sticky align-middle my-12 text-4xl text-center font-semibold fontfamily-roboto font-sans text-textHeader"}>
                RestApi – JSON Placeholder
               </h1>
            </Link>
            <Routes>
                <Route path={"/"} element={<PostGallery/>}/>
                <Route path={"/post/:id"} element={<DetailPage/>}/>
            </Routes>


        </div>
    </div>);
}

export default App
