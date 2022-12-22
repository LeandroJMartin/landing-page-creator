import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';
import { CLPContextData } from '../context/ContextData';

const ButtonWhatsApp = () => {
  const { json } = CLPContextData();
  const data = json.whatsapp;
  const apiWhats =
    'https://api.whatsapp.com/send?phone=55' +
    data.number +
    '&text=' +
    data.text;

  return (
    <>
      {data.number ? (
        <div className="fixed right-10 bottom-10 z-50">
          <a href={apiWhats} target="_blank" rel="noreferrer">
            <RiWhatsappFill className="w-10 h-10 text-[#229D10] drop-shadow-lg" />
          </a>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ButtonWhatsApp;
