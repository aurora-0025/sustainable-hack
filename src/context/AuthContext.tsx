import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, User, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";

interface AuthContextType {
	authUser: User | null;
	signUp: (email: string, password: string) => Promise<UserCredential>
	logIn: (email: string, password: string) => Promise<UserCredential>
	logOut: () => Promise<void>
}

const AuthContext = React.createContext<AuthContextType | {}>({});

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider(props: React.PropsWithChildren) {
    const [authUser, setAuthUser] = useState<User | null>(null);
	const signUp = (email: string, password: string) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const logIn = (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	const logOut = () => {
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currUser) => {
			setAuthUser(currUser);
	  	})
		return () => {
			unsubscribe();
		} 
	}, []);
	

    return (
        <AuthContext.Provider
            value={{ authUser, signUp, logIn, logOut }}
        >
			{props.children}
		</AuthContext.Provider>
    );
}
