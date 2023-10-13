import { useIdToken } from 'react-firebase-hooks/auth';
import Navbar from '../../components/Navbar';
import AddMemory from './components/AddMemory';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth } from '../../firebase';
import { collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import MemoryCard from './components/MemoryCard';

const Home = () => {
    const [user] = useIdToken(auth);

    const [memories, loading, error] = useCollection(
        query(collection(db, 'memories'), where('uid', '==', user.uid)),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );
    console.log(memories);
    return (
        <div>
            <Navbar />
            <div className="container">
                <AddMemory />
                <div className="list-group">
                    {memories?.size ? (
                        memories?.docs.map((memory) => (
                            <MemoryCard key={memory.id} memory={memory} />
                        ))
                    ) : (
                        <p className="text-center text-muted">
                            There are no memories to show.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
