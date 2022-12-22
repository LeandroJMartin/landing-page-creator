import Image from 'next/image';
import React from 'react';
import CLPSocial from '../Social';
import { TypeProp } from '../../context/ContextData';
import Link from 'next/link';

interface prop {
  dataprop: TypeProp;
}

const CLPModelOne = ({ dataprop }: prop) => {
  return (
    <div className="container flex items-center justify-between w-full py-6">
      <div className="w-[150px]">
        <Image
          src={dataprop.header.logo.src}
          alt={dataprop.header.logo.alt}
          width={150}
          height={150}
        />
      </div>
      <div className="flex items-center">
        <nav className="flex gap-4">
          {dataprop.header.nav.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="px-3 text-base hover:text-third"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="px-6">
          <span className="border-l-[1px] border-base/20"></span>
        </p>
        <div className="flex gap-3 justify-end">
          <CLPSocial dataprop={dataprop} />
        </div>
      </div>
    </div>
  );
};

export default CLPModelOne;
