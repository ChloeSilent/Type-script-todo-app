import React from 'react';
import styled from "styled-components";
import ITodo from '../interface'
interface ItodoListProps {
    todos: ITodo[];
}

export const TodoList: React.FC<ItodoListProps> = props => {
    const {todos} = props;
    return (
        <Todo>
            {todos.map((todo: ITodo) => {
                return (
                    <ListItem key={todo.id}>
                        <Label>
                            <input type="checkbox"/>
                        </Label>
                        <Title toggle={todo.completed}>{todo.title}</Title>
                        <Icon className="material-icons red-text">delete</Icon>
                    </ListItem>
                )
            })}

        </Todo>
    )
}


const Label = styled.label`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem;
background: #f3f3f3
`

const Todo = styled.ul`
margin-bottom: 1rem;
`

const ListItem = styled.div`
display: flex;
`

const Icon = styled.i`
z-index: 2;
`
const Title = styled.span`
  ${props => {
    if (props.toggle) {
        return `
       text-decoration: line-through;
      `;
    } else {
        return `
 text-decoration: false;
      `;
    }
}}
`;
