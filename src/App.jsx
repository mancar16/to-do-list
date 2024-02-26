import React, { useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import styled from "styled-components";

const StyledListGroupItem = styled(ListGroup.Item)`
  cursor: pointer;
`;

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    alert("Hedef Başarıyla Tamamlandı.")
  };

  return (
    <div className="App">
      <Form>
        <Form.Group controlId="formTodo">
          <Form.Label>Hedef</Form.Label>
          <Form.Control
            type="text"
            placeholder="Hedef girin"
            value={todoInput}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={addTodo}>
          Ekle
        </Button>
      </Form>
      <br />
      <ListGroup>
        {todos.map((todo, index) => (
          <StyledListGroupItem key={index} onClick={() => removeTodo(index)}>
            {todo}
          </StyledListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default App;
