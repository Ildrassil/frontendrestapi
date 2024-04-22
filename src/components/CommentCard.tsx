import {comment} from "../model/CommentType";


type CommentCardProps = {
    comment: comment;
}
export default function CommentCard({comment}: CommentCardProps) {

    return (
        <div className={"bg-transparent rounded-lg px-4  my-2"}>
            <div className={"w-full shadow-lineShadow h-1 text-transparent mb-3 rounded-3xl"}>
                <p>----------</p>
            </div>
            <h3 className={"text-lg text-left ml-2 text-textHeader px-6 shadow-buttonOut rounded-2xl w-fit"}>{comment.email}</h3>
            <div className={"flex flex-col mt-4 text-wrap rounded-xl shadow-buttonIn hover:shadow-buttonOut"}>
                <p className={"text-textPrime mt-4 mx-4 text-left font-semibold"}>{comment.name}</p>
                <p className={"text-textPrime mb-2 px-4 text-left"}>{comment.body}</p>
            </div>
        </div>
    )
}