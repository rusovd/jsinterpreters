import Jexl from "jexl";
export const runJexlCode = async (expression, context) => {
  try {
    const res = await Jexl.eval(expression, context);
    return { result: res };
  } catch (error) {
    return { error };
  }
};
