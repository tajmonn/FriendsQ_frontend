import React, { useEffect, useState } from 'react';
import { db, auth } from '../../../frontend/src/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function DailyQuestion() {
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        const fetchQuestion = async () => {
        const today = new Date().toISOString().split('T')[0];
        const docRef = doc(db, 'questions', today);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
            setQuestion(snap.data().text);
        }
        };
        fetchQuestion();
    }, []);

    const submitVote = async (targetUserId) => {
        const token = await auth.currentUser.getIdToken();
        await fetch('https://your-backend-url/vote', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date: new Date().toISOString().split('T')[0], votedFor: targetUserId })
        });
    };

    return question ? (
        <div>
            <h2>{question}</h2>
            <button onClick={() => submitVote('user1')}>Vote User 1</button>
            <button onClick={() => submitVote('user2')}>Vote User 2</button>
        </div>
    ) : <p>Loading...</p>;
}
