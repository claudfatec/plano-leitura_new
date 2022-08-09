import React, { useState, useEffect } from 'react';

function ChamaApiTeste() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/teste1`)).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default ChamaApiTeste;