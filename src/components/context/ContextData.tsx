import React, { createContext, useContext } from 'react';
import CLPJson from '../../inc/config.json';

const defaultValues = {
  json: CLPJson
};

export type TypeProp = typeof CLPJson;

interface ContextProps {
  json: typeof CLPJson;
}

interface DataProviderProps {
  children: React.ReactNode;
}

const CLPData = createContext<ContextProps>(defaultValues);

export default function ContentProvider({ children }: DataProviderProps) {
  const json = CLPJson;
  return <CLPData.Provider value={{ json }}>{children}</CLPData.Provider>;
}

export const CLPContextData = () => useContext(CLPData);
