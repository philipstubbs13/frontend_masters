import React from 'react';
import Character from './Character';
import map from 'lodash/map';
import './Characters.css';

const Characters = ({ characters }) => (
  <section className="Characters">
    {
      map(characters, (char, key) => (
        <Character key={key} {...char} />
      ))
    }
  </section>
);

export default Characters;
