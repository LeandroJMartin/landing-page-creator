import React from 'react';
import { CLPContextData } from '../context/ContextData';
import CLPModelOne from '../interface/headers/ModelOne';

const CLPHeader = () => {
  const { json } = CLPContextData();

  type prop = { [key: string]: JSX.Element };

  const Models: prop = {
    '1': <CLPModelOne dataprop={json} />
  };

  return <header>{Models[json.header.config.model]}</header>;
};

export default CLPHeader;
