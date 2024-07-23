import { fetchData } from './../utils/dataFetching';
import CardComponent from '../Components/cardComponent';
import { useEffect, useState } from 'react';

function AirplanesPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
      console.log(result);
    }
    getData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id}>
            <CardComponent item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AirplanesPage;