import React, { useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar';


function Layout(props) {

  useEffect(() => {
    document.title = "Sant | Front-end & Blockchain Developer";
  });

  return (
    <section>
      <Navbar
        linkedin={props.linkedin}
        angellist={props.angellist}
        mail={props.mail}
      />
    </section>
  );
}

export default Layout;
