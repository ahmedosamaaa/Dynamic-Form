import Input from "./components/Input";
import useFormSubmit from "./hooks/useFormOperations";

// import "./App.css";

function App() {
    const {
        submitForm,
        handlAddInput,
        handleDeleteInput,
        handleChange,
        inputsList,
    } = useFormSubmit("formInputs");

    console.log(inputsList);

    function handleSubmit(e) {
        submitForm(e, inputsList);
        // setInputs([{ value: "" }]);
    }

    return (
        <>
            <>
                <form onSubmit={handleSubmit}>
                    {inputsList.map((input, i) => {
                        return (
                            <>
                                <Input
                                    key={i}
                                    value={input.value}
                                    handleDelete={() =>
                                        handleDeleteInput(input.id)
                                    }
                                    onChange={(e) =>
                                        handleChange(input.id, e.target.value)
                                    }
                                />
                                <br />
                            </>
                        );
                    })}
                    <button type="submit">Submit</button>
                </form>
            </>
            <button type="button" onClick={handlAddInput}>
                Add Input
            </button>
        </>
    );
}

export default App;
