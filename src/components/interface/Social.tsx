import React from 'react';
import { TypeProp } from '../context/ContextData';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

interface prop {
  dataprop: TypeProp;
}

type propIcon = { [key: string]: JSX.Element };

const CLPSocial = ({ dataprop }: prop) => {
  const Icons: propIcon = {
    BsFacebook: <BsFacebook className="text-xl" />,
    BsInstagram: <BsInstagram className="text-xl" />
  };

  return (
    <>
      {dataprop.header.social.map((item, index) => (
        <a key={index} href={item.url} className="">
          {Icons[item.icon]}
        </a>
      ))}
    </>
  );
};

export default CLPSocial;
