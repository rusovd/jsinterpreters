// import { quickJS } from "@sebastianwessel/quickjs";

// export const runQuickJsCode = async (code) => {
//   try {
//     const { createRuntime } = await quickJS();
//     const { evalCode } = await createRuntime({
//       allowFetch: false,
//       allowFs: false,
//       // env: {
//       //   MY_ENV_VAR: 'env var value'
//       // },
//     });

//     const res = await evalCode(code);
//     return { result: res };
//   } catch (error) {
//     return { error };
//   }
// };
