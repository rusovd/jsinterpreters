import Interpreter from "js-interpreter";

export function runJsIntCode(code) {
  let result = null;

  const interpreter = new Interpreter(code, function (interpreter, scope) {
    const wrapper = function (text) {
      text = text ? text.toString() : "";
      console.log(text);
    };
    interpreter.setProperty(
      scope,
      "log",
      interpreter.createNativeFunction(wrapper)
    );
  });

  interpreter.run();

  if (interpreter.value) {
    result = interpreter.value.toString();
  }

  return result;
}
