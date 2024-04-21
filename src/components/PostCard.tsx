import {useNavigate} from "react-router-dom";
import {PostType} from "../model/PostType.tsx";


type PostCardProps = {
    post: PostType;
}
export function PostCard({ post }:PostCardProps) {
    const navigate = useNavigate();
    function toDetails() {
        navigate("/post/" + post.id);
    }
    return (
        <div className={"p-2"}>
            <h2 className={"text-xl font-semibold truncate"}>{post.title}</h2>
            <p className={"mt-5 p-4 rounded-xl text-left text-m shadow-buttonIn text-pretty text-clip overflow-hidden"}>{post.body}</p>
            <button
                onClick={toDetails}
                className={"bg-offWhite p-2 rounded-lg px-4  my-6 shadow-hashtagbuttonOut hover:shadow-buttonIn active:shadow-buttonIn"}>
                View Comments
            </button>
        </div>)
}