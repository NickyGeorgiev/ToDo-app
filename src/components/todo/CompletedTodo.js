import { SingleTodo } from "./SingleTodo";

export const CompletedTodo = ({ data, dragStart, dragEnter }) => {


    return (
        <div className="section-complete">
            <h2>Complete</h2>
            <div className="complete" draggable="true">
                {data
                    ? 
                    data.map(x => <SingleTodo 
                        key={x.objectId} 
                        info={x} 
                        dragStart={dragStart} 
                        dragEnter={dragEnter}
                    />)
                    : ''}
            </div>
        </div>
    )
}