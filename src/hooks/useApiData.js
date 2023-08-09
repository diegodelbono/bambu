import { useState, useEffect, useRef } from "react";
import axios from 'axios';

const useApiData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const effectRan = useRef(false);

  useEffect(() => {
      if (!effectRan.current) {
          const fetchData = async () => {
              try {
                  setIsLoading(true);
                  const response = await axios.get(
                      `https://bambudeleste.com.uy/wordpress/wp-json/wp/v2/pages/?slug=${url}&_fields=acf&acf_format=standard`
                  );
                  setData(response.data[0]);
                  setIsLoading(false);
              } catch (error) {
                  setIsLoading(false);
                  console.error("Error fetching data:", error);
              }
          };
          if (!isLoading) {
              fetchData();
          }
      }
      return () => (effectRan.current = true);
  }, [url, isLoading]);

  return { data, isLoading };
};

export default useApiData;