import "./styles.css";
import { runSaferEval } from "./runSaferEval";
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

const saferEval = async () => {
  const code = `!['1-4 Family', 'Multi-Family'].includes([{ "collateral_type_id": "6szwnTyBH5taZmbczThNvQ", "collateral_type_name": "1-4 Family", "id": "_lu5gdwcux_m09rz0wo", "collateral_description": "", "collateral_amount": "" }][0].collateral_type_name)`;
  const res = runSaferEval(code);
  console.log(" jexl::: ", res);
};

const jsIntEval = () => {
  // https://neil.fraser.name/software/JS-Interpreter/docs.html
  // https://neil.fraser.name/software/JS-Interpreter/demos/line.html
  // const code = `var a = ['1-4 Family', 'Multi-Family'].indexOf('1-4 Family'); a;`;
  const code = `var a = ['1-4 Family', 'Some', 'Another', 'Multi-Family']
    .indexOf([
      {
          "collateral_type_id":"6szwnTyBH5taZmbczThNvQ",
          "collateral_type_name":"Multi-Family",
          "id":"_lu5gdwcux_m09rz0wo",
          "collateral_description":"",
          "collateral_amount":""
      }
    ][0].collateral_type_name) === -1; a;`

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
      <button onClick={saferEval}>runSaferEval</button>
    </div>
  );
}
