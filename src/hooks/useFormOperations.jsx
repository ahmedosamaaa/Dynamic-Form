import { useState } from "react";

function useFormOperation(storageKey) {
    const [inputsList, setInputs] = useState([{ id: Date.now(), value: "" }]);

    function submitForm(e, inputsList) {
        e.preventDefault();

        localStorage.setItem(storageKey, JSON.stringify({ inputsList }));
    }

    function handlAddInput() {
        setInputs([...inputsList, { id: Date.now(), value: "" }]);
    }

    function handleDeleteInput(id) {
        const newArr = inputsList.filter((input) => input.id !== id);
        setInputs([...newArr]);
    }

    function handleChange(id, newValue) {
        const updatedInputs = inputsList.map((input) =>
            input.id === id ? { ...input, value: newValue } : input
        );
        setInputs(updatedInputs);
    }

    return {
        submitForm,
        handlAddInput,
        handleDeleteInput,
        handleChange,
        inputsList,
    };
}

export default useFormOperation;
