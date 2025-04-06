import { useState } from "react"

import { Badge, Container, Button } from "react-bootstrap"

const initialObject = [
    {
        task: "First task",
        key: crypto.randomUUID()
    },
    {
        task: "Second task",
        key: crypto.randomUUID()
    }
]

export const HomePage = () => {
    const [list, setList] = useState(initialObject)
    const [inputValue, setInputValue] = useState("")

    const removeElements = (key) => {
        setList(
            list.filter((element) => {
                return element.key !== key
            })
        )
    }

    return (
        <Container className="mt-5">
            <Badge className="py-3 px-3 bg-secondary border rounded" style={{
                width: '100%',
            }}>
                <h1 className="mb-3 bg-secondary text-black d-flex align-items-center justify-content-start">To Do List</h1>
                <input
                    type="text"
                    placeholder="Write a new task"
                    value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => {
                        if (e.code === "Enter" && inputValue.trim() !== "") {
                            const newTask =
                            {
                                task: inputValue,
                                key: crypto.randomUUID()
                            };
                            setList([...list, newTask]);
                            setInputValue("");
                        };
                    }}
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        borderRadius: '5px',
                        width: '100%',
                    }}
                />
            </Badge>
            {list.map((element) => {
                return (
                    <Container className="d-flex align-items-center">
                        <Container className="text-black mt-1 py-2 bg-secondary border rounded">{element.task}<Button
                            className="text-danger float-end"
                            variant="secondary"
                            size="sm"
                            onClick={() => removeElements(element.key)}
                        ><strong>X</strong></Button></Container>
                    </Container>
                )
            })}
        </Container>

    );

};