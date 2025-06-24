import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import DailyQuestion from "./components/DailyQuestion";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  return (
    <div>
      <p>Logged in as: {user.email}</p>
      <DailyQuestion />
    </div>
  );
}
