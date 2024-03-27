import useSSE from './useSSEConnection';

const Home = () => {
  const stateStr = useSSE('http://localhost:5555/stream', []);
  let data;

  try {
    const state = JSON.parse(stateStr);
    data = state.data;

  } catch (error) {
    data = null;
  }

  return (
    <div className='container'>
      <div className='contained title'>Data Received from Server: </div>
      <div className='contained'>{data}</div>
    </div>
  );
};

export default Home;
