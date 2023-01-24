import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
<script src="https://bitnodes.io/api/v1/snapshots/"></script>;

function App() {
  const [price, setPrice] = useState(null);
  const [nodes, setNodes] = useState(null);
  const [tip, setTip] = useState(null);
  const [time, setTime] = useState(null);

  const getPrice = () => {
    // Axios is a library that makes it easy to make http requests
    // After we make a request, we can use the .then() method to handle the response asynchronously
    // This is an alternative to using async/await
    axios
      .get("https://api.coinbase.com/v2/prices/BTC-USD/spot")
      // .then is a promise that will run when the API call is successful
      .then((res) => {
        console.log(res.data.data.amount);
        setPrice(res.data.data.amount);
      })
      // .catch is a promise that will run if the API call fails
      .catch((err) => {
        console.log(err);
      });
  };

  const getNodes = () => {
    // Axios is a library that makes it easy to make http requests
    // After we make a request, we can use the .then() method to handle the response asynchronously
    // This is an alternative to using async/await
    axios
      .get("https://bitnodes.io/api/v1/snapshots/latest/")
      // .then is a promise that will run when the API call is successful
      .then((res) => {
        console.log(res.data.total_nodes);
        setNodes(res.data.total_nodes);
      })
      // .catch is a promise that will run if the API call fails
      .catch((err) => {
        console.log(err);
      });
  };

  const getTip = () => {
    // Axios is a library that makes it easy to make http requests
    // After we make a request, we can use the .then() method to handle the response asynchronously
    // This is an alternative to using async/await
    axios
      .get("https://bitnodes.io/api/v1/snapshots/latest/")
      // .then is a promise that will run when the API call is successful
      .then((res) => {
        console.log(res.data.latest_height);
        setTip(res.data.latest_height);
      })
      // .catch is a promise that will run if the API call fails
      .catch((err) => {
        console.log(err);
      });
  };

  const getTime = () => {
    // Axios is a library that makes it easy to make http requests
    // After we make a request, we can use the .then() method to handle the response asynchronously
    // This is an alternative to using async/await
    axios
      .get("https://bitnodes.io/api/v1/snapshots/latest/")
      // .then is a promise that will run when the API call is successful
      .then((res) => {
        console.log(res.data.timestamp);
        setTime(res.data.timestamp);
      })
      // .catch is a promise that will run if the API call fails
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect is a 'hook' or special function that will run code based on a trigger
  // The brackets hold the trigger that determines when the code inside of useEffect will run
  // Since it is empty [] that means this code will run once on page load
  useEffect(() => {
    getPrice();
    getNodes();
    getTip();
    getTime();
  }, []);

  useEffect(() => {
    // setInterval will run whatever is in the callback function every 5 seconds
    const interval = setInterval(() => {
      getPrice();
      getNodes();
      getTip();
      getTime();
    }, 50000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    getPrice();
    getNodes();
    getTip();
    getTime();
  }, []);

  // Run these functions every 5 seconds after initial page load
  useEffect(() => {
    const interval = setInterval(() => {
      getPrice();
      getNodes();
      getTip();
      getTime();
    }, 50000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getPrice();
    getNodes();
    getTip();
    getTime();
  }, []);

  // Run these functions every 5 seconds after initial page load
  useEffect(() => {
    // setInterval will run whatever is in the callback function every 5 seconds
    const interval = setInterval(() => {
      getPrice();
      getNodes();
      getTip();
      getTime();
    }, 50000);
    return () => clearInterval(interval);
  }, []);

  const date = moment({ time }).format("L");
  console.log(date);

  return (
    <div class="hwrap">
      <div class="hmove">
        <div class="hitem">Price ${price}</div>
        <div class="hitem">Longest Proof of Work Chain {tip} Blocks </div>
        <div class="hitem">Network Nodes {nodes}</div>
        <div class="hitem">Date {date}</div>
      </div>
    </div>
  );
}

export default App;
