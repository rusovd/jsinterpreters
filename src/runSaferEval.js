import { SaferEval } from 'safer-eval';

export const runSaferEval = (code) => {
  const saferEvalInstance = new SaferEval();
  return saferEvalInstance.runInContext(code);
}