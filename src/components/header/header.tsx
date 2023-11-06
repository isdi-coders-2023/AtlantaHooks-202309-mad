import { useContext } from 'react';
import './header.scss';
import { Context } from '../../context/context'

type Props = {
  title: string;
  children: JSX.Element;
};
export function Header({ title, children }: Props) {

  return (
    <header>
      <h1>
        {title}
      </h1>
      {children}
    </header>
  );
}
