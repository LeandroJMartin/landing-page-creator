import React from 'react';
import { CLPContextData } from '../context/ContextData';
import CLPModelOne from '../interface/footer/ModelOne';

const CLPFooter = () => {
  const { json } = CLPContextData();

  type prop = { [key: string]: JSX.Element };

  const Models: prop = {
    '1': <CLPModelOne dataprop={json} />
  };

  return (
    <footer>
      {Models[json.footer.config.model]}{' '}
      <div className="px-4 py-4 text-center bg-zinc-800 text-sm text-zinc-500">
        Todos os direitos reservados. Desenvolvido por{' '}
        <a href="">Leandro Martin</a>
      </div>
    </footer>
  );
};

export default CLPFooter;
