import React, {useState} from 'react';
/*
* To pass props from parent to child:
* - create an Interface in child component
* - set it as generic type in child
* - add these props in parent
* */
interface ItodoFormProps {
    onAddTodo: (val:string) => void
}
export const TodoForm : React.FC<ItodoFormProps> = props => {
const {onAddTodo} = props;
    const [title, setTitle] = useState<string>('')
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }

    const onEnterPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === "Enter") {
            console.log(title)
            onAddTodo(title)
            setTitle("");
        }
    }


    return (
        <div className="input-field mt-2">
            <input onKeyPress={onEnterPressHandler} value={title} onChange={changeHandler} type="text" id="title" placeholder="learn typescript"/>
            <label htmlFor="title" className="active">write a todo</label>
        </div>
    )
}

