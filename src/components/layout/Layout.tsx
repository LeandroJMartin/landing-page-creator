import React, { ReactNode } from 'react';
import ButtonWhatsApp from '../interface/ButtonWhatsApp';
import CLPFooter from './Footer';
import CLPHead from './Head';
import CLPHeader from './Header';

interface prop {
  children: ReactNode;
}

const CLPLayout = ({ children }: prop) => {
  return (
    <>
      <CLPHead />
      <CLPHeader />

      <main>{children}</main>

      <ButtonWhatsApp />
      <CLPFooter />
    </>
  );
};

export default CLPLayout;
