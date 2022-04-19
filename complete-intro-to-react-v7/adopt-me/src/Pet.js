import { Link } from 'react-router-dom';

const Pet = ({ name, animal, breed, images, location, id }) => {

  let hero = 'http://pet-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    hero = images[0];
  }


  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{animal} - {breed} - {location}</h2>
      </div>
    </Link>
  )
}

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };

export default Pet;