import Interpreter from "js-interpreter";

export function runJsIntCode(code) {
  let result = undefined;

  const interpreter = new Interpreter(code, function (interpreter, scope) {
    // const wrapper = function (text) {
    //   text = text ? text.toString() : "";
    //   console.log(text);
    // };
    // interpreter.setProperty(
    //   scope,
    //   "log",
    //   interpreter.createNativeFunction(wrapper)
    // );
  });

  interpreter.run();

  return interpreter.value;
}
