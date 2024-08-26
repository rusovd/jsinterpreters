exports.handler = async (event) => {
  const restricted = ['require', 'fetch', 'import', 'function'];
  let inputString = event.body ? JSON.parse(event.body).inputString : event.inputString;

  if (!inputString || inputString.includes(restricted)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "No input string provided" })
    };
  }

  let res = {};
  try {
    const func = new Function("return " + inputString)();
    res.result = func;
  } catch (err) {
    res.error = err.message;
  }


  return {
    statusCode: 200,
    body: JSON.stringify(res)
  };
};
