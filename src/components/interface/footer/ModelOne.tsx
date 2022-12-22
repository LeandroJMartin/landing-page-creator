import Image from 'next/image';
import React from 'react';
import CLPSocial from '../Social';
import { TypeProp } from '../../context/ContextData';

interface prop {
  dataprop: TypeProp;
}

const CLPModelOne = ({ dataprop }: prop) => {
  return (
    <div className="container w-full py-6">
      <div className="flex items-center flex-col">
        <Image
          src={dataprop.header.logo.src}
          alt={dataprop.header.logo.alt}
          width={130}
          height={130}
        />
        <p className="w-3/4 text-center mt-4">{dataprop.footer.about}</p>
        <div className="flex gap-3 mt-6">
          <CLPSocial dataprop={dataprop} />
        </div>
      </div>
    </div>
  );
};

export default CLPModelOne;
