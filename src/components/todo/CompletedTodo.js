import { SingleTodo } from "./SingleTodo";

export const CompletedTodo = ({ data }) => {

    return (
        <div className="complete">
            <h2>Complete</h2>
            <div className="section-complete">
                {data
                    ? data.map(x => <SingleTodo key={x.objectId} info={x} />)
                    : ''}
            </div>
        </div>
    )
}