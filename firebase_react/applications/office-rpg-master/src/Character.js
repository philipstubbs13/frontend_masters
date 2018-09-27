import React, { PropTypes } from 'react';
import './Character.css';

const Character = ({
  company,
  constitution,
  department,
  dexterity,
  email,
  firstName,
  hp,
  intelligence,
  lastName,
  number,
  strength
}) => (
  <article className="Character">
    <h3>{firstName} {lastName}</h3>
    <h4>Details</h4>
    <table className="Character--bio">
      <tbody>
        <tr>
          <th>Company</th>
          <td>{company}</td>
        </tr>
        <tr>
          <th>Department</th>
          <td>{department}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{email}</td>
        </tr>
      </tbody>
    </table>
    <h4>Statistics</h4>
    <table className="Character--stats">
      <tbody>
        <tr>
          <th>HP</th>
          <td>{hp}</td>
        </tr>
        <tr>
          <th>Strength</th>
          <td>{strength}</td>
        </tr>
        <tr>
          <th>Intelligence</th>
          <td>{intelligence}</td>
        </tr>
        <tr>
          <th>Dexterity</th>
          <td>{dexterity}</td>
        </tr>
        <tr>
          <th>Constitution</th>
          <td>{constitution}</td>
        </tr>
      </tbody>
    </table>
    <p>#{number}</p>
  </article>
);

Character.propTypes = {
  company: PropTypes.string,
  constitution: PropTypes.number,
  dateCreated: PropTypes.string,
  department: PropTypes.string,
  dexterity: PropTypes.number,
  email: PropTypes.string,
  firstName: PropTypes.string,
  hp: PropTypes.number,
  intelligence: PropTypes.number,
  lastName: PropTypes.string,
  number: PropTypes.number,
  strength: PropTypes.number
};

export default Character;
