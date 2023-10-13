import { updateDoc, deleteDoc } from 'firebase/firestore';

const MemoryCard = ({ memory }) => {
    const { uid, isDone, title } = memory.data();
    const changeTheState = async () =>
        await updateDoc(memory.ref, {
            isDone: !isDone,
        });
    const deleteMemory = async () => {
        await deleteDoc(memory.ref);
    };
    return (
        <div className="list-group-item d-flex align-items-center gap-2">
            <input
                type="checkbox"
                onClick={changeTheState}
                name="checked"
                value={isDone}
            />
            <p
                className={`my-auto flex-grow-1 ${
                    isDone && 'text-decoration-line-through '
                }`}
            >
                {title}
            </p>
            <button
                onClick={deleteMemory}
                className="btn btn-sm  btn-danger"
                type="button"
            >
                Delete
            </button>
        </div>
    );
};

export default MemoryCard;
