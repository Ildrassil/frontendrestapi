import {PostType} from "../model/PostType.tsx";
import {PostCard} from "./PostCard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";



export function PostGallery() {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [page, setPage] = useState(1);




    const getData = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`);
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
    }, [page]);

    const loadMorePosts = () => {
        setPage(page + 1);
    }

    const loadPreviousPosts = () => {
        setPage(page - 1);
    }


    return (<div className={"flex flex-col"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4 mx-8 flex-wrap"}>
                {posts && posts.map((post, index) => (
                    <div key={index}
                         className={"bg-offWhite rounded-lg shadow-doubleOut hover:shadow-doubleIn m-4 p-6"}>
                        <PostCard post={post}/>
                    </div>))}

            </div>
            <div className={"flex-row justify-center"}>
                {(page > 1) && <button onClick={loadPreviousPosts}
                                       className={"bg-offWhite p-2 rounded-lg px-2  my-6 shadow-buttonOut hover:shadow-buttonIn active:shadow-buttonIn"}>
                    Prev
                </button>}
                <h3 className={"text-xl font-semibold"}>{page}</h3>
                {!((page+1)===6)&&<button
                    onClick={loadMorePosts}
                    className={"bg-offWhite p-2 rounded-lg px-2  my-6 shadow-buttonOut hover:shadow-buttonIn active:shadow-buttonIn"}>
                    Next
                </button>}

            </div>
        </div>
    )
}