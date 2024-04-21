import {PostType} from "../model/PostType.tsx";
import {PostCard} from "./PostCard.tsx";


type PostGalleryProps = {
    Posts: PostType[];
}

export function PostGallery({Posts}: PostGalleryProps) {



    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4 mx-8 flex-wrap"}>
            {Posts &&Posts.map((post, index) => (
                <div key={index} className={"bg-offWhite rounded-lg shadow-doubleOut hover:shadow-doubleIn m-4 p-6"}>
                    <PostCard post={post}/>
                </div>))}
        </div>
    )
}