import { useParams } from 'react-router-dom';

const Starship = () => {
  const { id } = useParams();

  return (
    <div className="Starship">
      <p>Starship with id {id}</p>
    </div>
  );
};

export default Starship;
