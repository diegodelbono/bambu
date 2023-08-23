import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useApiData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(url);
        if (cachedData) {
          setData(JSON.parse(cachedData));
          setIsLoading(false);
        } else {
          setIsLoading(true);
          const response = await axios.get(
            `https://bambudeleste.com.uy/wordpress/wp-json/wp/v2/pages/?slug=${url}&_fields=acf&acf_format=standard`
          );
          setData(response.data[0]);
          setIsLoading(false);
          localStorage.setItem(url, JSON.stringify(response.data[0]));
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading };
};

export default useApiData;
