import { useState } from 'react';
import myStyles from './Box.module.css'

function Box({ customCSS, y }) {
  let [show, setShow] = useState(true)

  return (
    <div className={customCSS + ' ' + (show ? '' : 'd-none')}>
      <h2 className={myStyles.title}>Heading {y}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis, distinctio quam nisi quibusdam, non recusandae possimus velit consequuntur harum laudantium delectus aut inventore ut consequatur officiis magni eveniet nostrum?</p>
      <button className='btn btn-primary' onClick={() => setShow(!show)}>Hide</button>
    </div>
  );
}

export default Box;