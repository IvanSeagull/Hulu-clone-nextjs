import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

const Results = ({ results }) => {
  //   console.log('🚀 ~ file: Results.js ~ line 4 ~ Results ~ results', results);
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center">
      {results.map((res) => (
        <Thumbnail key={res.id} res={res} />
      ))}
    </FlipMove>
  );
};

export default Results;
