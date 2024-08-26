import { getQuickJS } from "quickjs-emscripten";

export const runQuickJsCode = async (code) => {
  const QuickJS = await getQuickJS();
  const vm = QuickJS.newContext();

  const result = vm.evalCode(code);

  const res = result.error
    ? { error: `Error: ${vm.dump(result.error)}` }
    : { result: vm.dump(result.value) };

  result.error ? result.error.dispose() : result.value.dispose();
  vm.dispose();

  return res;
};
