import {
  createContext,
  useState,
  useReducer,
  useContext,
  useEffect,
} from "react";
import { cartReducer } from "./ShopReducer";
const AuthContext = createContext({});

export const AuthProvider:React.FC = ({ children }) => {
  const province = [
    { id: 1, name: "Tashkent" },
    { id: 2, name: "Samarkand" },
    { id: 3, name: "Bukhara" },
    { id: 4, name: "Khiva" },
    { id: 6, name: "Andijan" },
    { id: 7, name: "Namangan" },
    { id: 8, name: "Navoiy" },
    { id: 9, name: "Fergana" },
    { id: 10, name: "Karakalpakstan" },
    { id: 11, name: "Samarqand" },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    province: province,
    open: true,
  });
  // console.log(data);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export const provinceState = () => {
  return useContext(AuthContext);
};
