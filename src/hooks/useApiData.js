import { useState, useEffect } from "react";
import axios from 'axios';

const useApiData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://bambudeleste.com.uy/wordpress/wp-json/wp/v2/pages/?slug=${url}`);
        setData(response.data[0]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return {data, isLoading};

}

export default useApiData;