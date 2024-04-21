import {comment} from "../model/CommentType";


type CommentCardProps = {
    comment: comment;
    id: number;
}
export default function CommentCard({comment, id}: CommentCardProps) {

    return (
        <div className={"bg-white rounded-lg shadow-doubleOut hover:shadow-doubleIn m-4 p-4"}>
            <div className={"flex flex-col"}>
                <h3 className={"text-left text-xl text-textPrime px-3.5 w-fit h-fit rounded-full shadow-doubleOut p-2"}>
                    #{id+1}
                </h3>
            </div>
            <div className={"flex flex-row my-4 py-3 px-4 shadow-buttonIn rounded-xl w-fit"}>
                <label className={"text-textPrime mt-6" +
                    "mb-4 mr-10"}>Name:</label>
                <h3 className={"text-lg text-textHeader"}>{comment.name}</h3>
            </div>
            <div className={"flex flex-row my-4 py-3 px-4 shadow-buttonIn rounded-xl w-fit"}>
                <label className={"text-textPrime mt-6justify-start mr-10"}>Email:</label>
                <h5 className={"text-lg text-textHeader"}>{comment.email}</h5>
            </div>
            <div className={"flex flex-col mt-4 p-5 text-wrap rounded-xl shadow-buttonIn hover:shadow-buttonOut"}>
                <p className={"text-textPrime m-4 text-left"}>{comment.body}</p>
            </div>
        </div>
    )
}