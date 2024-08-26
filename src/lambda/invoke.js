const invokeLambda = () => {
  const url = 'https://api-id.execute-api.region.amazonaws.com/dev'; // 
  const data = { inputString: "2+3" };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      setResponse(data);
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};