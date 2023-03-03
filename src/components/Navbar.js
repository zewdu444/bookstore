import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';

import { Button } from 'primereact/button';

function Navbar() {
  const navigator = useNavigate();
  const items = [

    {
      label: 'BOOKS',
      command: () => {
        navigator('/');
      },
      className: 'text-1xl',
    },
    {
      label: 'CATEGORIES',
      command: () => {
        navigator('/catagories');
      },
      className: 'text-1xl ',
    },

  ];
  const end = (
    <div>
      <NavLink
        to="/"
        className="text-3xl  xl:hidden md:hidden lg:hidden sm:inline text-blue-500 mr-7"
        style={{
          textDecoration: 'none',
        }}
      >
        Bookstore CMS
      </NavLink>
      <Button
        icon="pi pi-user"
        rounded
        outlined
        severity="info"
        aria-label="User"
      />

    </div>
  );
  const start = (
    <NavLink
      to="/"
      className="text-3xl hidden text-blue-500 xl:block md:hidden pr-4 sm:justify-content-center"
      style={{
        textDecoration: 'none',
      }}
    >
      Bookstore CMS
    </NavLink>
  );
  return (
    <div className="card surface-0">
      <Menubar
        className="card surface-0 xl:pt-4 xl:pb-4 xl:pr-8 xl:pl-8"
        model={items}
        start={start}
        end={end}
        breakpoint="768"
      />
    </div>
  );
}

export default Navbar;
