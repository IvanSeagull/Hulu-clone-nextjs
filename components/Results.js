import Thumbnail from './Thumbnail';

const Results = ({ results }) => {
  //   console.log('🚀 ~ file: Results.js ~ line 4 ~ Results ~ results', results);
  return (
    <div>
      {results.map((res) => (
        <Thumbnail key={res.id} res={res} />
      ))}
    </div>
  );
};

export default Results;
