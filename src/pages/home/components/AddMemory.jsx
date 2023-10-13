import { useForm } from 'react-hook-form';
import { useIdToken } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useRef } from 'react';
import { v4 } from 'uuid';

const AddMemory = () => {
    const { register, handleSubmit } = useForm();
    const closeRef = useRef();

    const [user, loading, error] = useIdToken(auth);
    if (error) console.log(error);

    const addMemory = async ({ title }) => {
        const payload = {
            id: v4(),
            isDone: false,
            uid: user.uid,
            title,
        };
        try {
            await addDoc(collection(db, 'memories'), payload);
            closeRef.current.click();
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };
    return (
        <>
            <div className="w-100 d-flex my-3 flex-row-reverse">
                <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add-memory"
                >
                    Add a Memory
                </button>
            </div>
            <div
                className="modal fade"
                id="add-memory"
                tabIndex="-1"
                aria-labelledby="add memory"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                            >
                                Add Memory
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                ref={closeRef}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(addMemory)}>
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="floatingInput"
                                    placeholder="memory"
                                    required
                                    {...register('title')}
                                />
                                <button
                                    type="submit"
                                    className=" btn btn-primary w-100"
                                    disabled={loading}
                                >
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddMemory;
