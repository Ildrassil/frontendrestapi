import {comment} from "../model/CommentType";


type CommentCardProps = {
    comment: comment;
}
export default function CommentCard({comment}: CommentCardProps) {

    return (
        <div className={"bg-white rounded-lg shadow-doubleOut hover:shadow-doubleIn m-4 p-4"}>
            <div className={"flex flex-row w-fit align-middle"}>
                <h3 className={"text-lg align-middle ml-2 text-textHeader " +
                    "px-6 shadow-buttonOut rounded-2xl"}>{comment.name}</h3>
            </div>

            <div className={"flex flex-col mt-4 text-wrap rounded-xl shadow-buttonIn hover:shadow-buttonOut"}>
                <p className={"text-textPrime m-4 text-left"}>{comment.body}</p>
            </div>
        </div>
    )
}