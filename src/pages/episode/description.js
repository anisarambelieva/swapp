import LabelValuePair from '../../components/labelValuePair.js';

const Description = ({ openingCrawl, director, releaseDate }) => (
  <div
    style={{
      padding: '10px',
      backgroundColor: 'white',
      color: '#4e5b6e',
      borderRadius: '5px',
    }}
  >
    <p>{openingCrawl}</p>
    <LabelValuePair label="Director" value={director} />
    <LabelValuePair label="Release Date" value={releaseDate} />
  </div>
);

export default Description;
