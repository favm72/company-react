import { createContext } from "react";
import MyRepo from "../store/MyRepo";

export const MyContext = createContext()

export const MyProvider = ({ children }) => {	
	
	const myRepo = new MyRepo()
	
	return (
		<MyContext.Provider value={{ myRepo }}>
			{ children }
		</MyContext.Provider>
	)
}
