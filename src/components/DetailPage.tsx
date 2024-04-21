import {useEffect, useState} from "react";
import {PostType} from "../model/PostType.tsx";
import {comment} from "../model/CommentType.tsx";
import axios from "axios";
import {useParams} from "react-router-dom";
import CommentCard from "./CommentCard.tsx";


export default function DetailPage() {

    const postId = useParams<{ id: string }>();

    const [post, setPost] = useState<PostType>();
    const [comments, setComments] = useState<comment[]>([]);

    function getPost() {
        axios.get("https://jsonplaceholder.typicode.com/posts/" + postId.id).then(response => {
            setPost(response.data);
        });
    }

    function getComments() {
        axios.get("https://jsonplaceholder.typicode.com/comments?postId=" + postId.id).then(response => {
            setComments([...response.data]);
        });
    }

    useEffect(() => {
        getPost();
        getComments();
    }, []);


    return (
        <div className={"flex justify-center w-screen bg-offWhite"}>
            <div className={"flex-col shadow-doubleOut w-8/12 m-12 p-10 bg-offWhite rounded-xl"}>
                <h1 className={"text-4xl text-textHeader mb-10"}>{post?.title}</h1>
                <p className={"text-lg text-left text-wrap text-textPrime"}>{post?.body}</p>
                <h2 className={"text-2xl text-textHeader text-left m-10"}>Comments:</h2>
                <div className={"flex flex-col"}>
                    {comments && comments.map((comment, index) => (
                        <CommentCard key={index} comment={comment}/>
                    ))}
                </div>
            </div>
        </div>
    );
}