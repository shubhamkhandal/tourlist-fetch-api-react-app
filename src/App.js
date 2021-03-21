import React, { useEffect, useState } from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading';
const resUrl = 'https://jsonplaceholder.typicode.com/posts';

const App = () => {
  const [loadData, setloadData] = useState(true);
  const [tours, setTours] = useState([]);

  const removeData = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  const RemoveRefreshData = () => {
    setTours([])
  }

  const userRes = async () => {
    setloadData(true);
    try{

      const res = await fetch(resUrl);
      const resApi = await res.json();
      setloadData(false);
      setTours(resApi);

    } catch(error){

      setloadData(false);
    }
  };


  useEffect(() => {
    userRes()
    
  }, [])

  if(loadData){
    return (
      <main>
        <Loading />
      </main>
    )
  };

  if (tours.length === 0) {
    return (
      <>
        <p>No left data!!!</p>
        <button onClick={userRes}>refresh</button>
      </>
    );
  }
  
  return (
    <>
      <Tours tours={tours} removeData={removeData} RemoveRefreshData={RemoveRefreshData} />
    </>
  )
}
export default App;