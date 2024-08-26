import "./styles.css";
import { runJexlCode } from "./runJexlCode";
import { runJsIntCode } from "./runJsIntCode";
import { runQuickJsCode } from "./runQuickJsCode";

//!
// const code = `!['1-4 Fam2ily', 'Multi-Family']
//   .includes([
//     {
//         "collateral_type_id":"6szwnTyBH5taZmbczThNvQ",
//         "collateral_type_name":"1-4 Family",
//         "id":"_lu5gdwcux_m09rz0wo",
//         "collateral_description":"",
//         "collateral_amount":""
//     }
//   ][0].collateral_type_name)`;
//!

const jexlEval = async () => {
  const data = [
    {
      collateral_type_id: "6szwnTyBH5taZmbczThNvQ",
      collateral_type_name: "1-4 Family",
      id: "_lu5gdwcux_m09rz0wo",
      collateral_description: "",
      collateral_amount: "",
    },
  ];
  const context = data[0];
  const expression = `!(collateral_type_name == "1-4 Family" || collateral_type_name == "Multi-Family")`;

  const res = await runJexlCode(expression, context);
  console.log(" jexl::: ", res);
};

const jsIntEval = () => {
  const code = `var a = 2*2; a;`;

  const res = runJsIntCode(code);
  console.log("jsint::: ", res);
};

const quickJsEval = async () => {
  const code = `!['1-4 Family', 'Multi-Family'].includes([{ "collateral_type_id": "6szwnTyBH5taZmbczThNvQ", "collateral_type_name": "1-4 Family", "id": "_lu5gdwcux_m09rz0wo", "collateral_description": "", "collateral_amount": "" }][0].collateral_type_name)`;
  const res = await runQuickJsCode(code);
  console.log("quick::: ", res);
};

export default function App() {
  return (
    <div className="App">
      <button onClick={quickJsEval}>quickJsEval</button>
      <button onClick={jsIntEval}>runJsIntCode</button>
      <button onClick={jexlEval}>runJexlCode</button>
    </div>
  );
}
