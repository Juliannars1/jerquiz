import React, {createContext} from 'react';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
};

const AuthContext = createContext({});
