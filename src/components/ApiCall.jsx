import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Data() { 
  const [sessionToken, setSessionToken] = useState(''); 
 
  useEffect(() => {
    const fetchSessionToken = async () => {
      const requestConfig = {
        method: 'POST',
        url: 'https://v2-api.obilet.com/api/client/getsession',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic JEcYcEMyantZV095WVc3G2JtVjNZbWx1'
        },
        withCredentials: true,
        data: {
          type: 1,
          connection: {
            "ip-address": '165.114.41.21',
            "port": '5117'
          },
          browser: {
            "name": 'Opera',
            "version": '47.0.0.12'
          } 
        }
      };

      try {
        const response = await axios(requestConfig);
        console.log(response);
        setSessionToken(response.data);
      } catch (error) {
        console.log('Error fetching session token: ', error);
      }
    };

    fetchSessionToken();
  }, []);

  return (
    <div>
      <p>Session token: {sessionToken}</p>
    </div>
  );
}

export default Data;
