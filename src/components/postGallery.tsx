import {PostType} from "../model/PostType.tsx";
import {PostCard} from "./PostCard.tsx";
import {useState} from "react";


type PostGalleryProps = {
    Posts: PostType[];
}

export function PostGallery({Posts}: PostGalleryProps) {

    const [page, setPage] = useState(1);
    const [displayPosts, setDisplayPosts] = useState<PostType[]>(Posts.slice(0, 20));


    const loadMorePosts = () => {
        if((page +1)*20 > Posts.length){
            return;
        }
        setPage(page + 1);
        setDisplayPosts([...Posts.slice(page * 20, (page + 1) * 20)]);
    }

    const loadPreviousPosts = () => {
        if (page === 2) {
            setDisplayPosts([...Posts.slice(0, 20)]);
        } else {
            setDisplayPosts([...Posts.slice((page - 1) * 20, page * 20)]);
        }
        setPage(page - 1);
    }


    return (<div className={"flex flex-col"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4 mx-8 flex-wrap"}>
                {displayPosts && displayPosts.map((post, index) => (
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
                {((page+1)*20< Posts.length)&&<button
                    onClick={loadMorePosts}
                    className={"bg-offWhite p-2 rounded-lg px-2  my-6 shadow-buttonOut hover:shadow-buttonIn active:shadow-buttonIn"}>
                    Next
                </button>}

            </div>
        </div>
    )
}