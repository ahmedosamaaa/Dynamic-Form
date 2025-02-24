function Input({ value, onChange, handleDelete }) {
    return (
        <>
            <input type="text" value={value} onChange={onChange} />
            <button onClick={handleDelete}>Delete</button>
        </>
    );
}

export default Input;
