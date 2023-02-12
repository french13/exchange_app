import "./App.css";
import FromDropdownInput from "./components/FromDropdownInput";
import ToDropdownInput from "./components/ToDropdownInput";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {SwapOutlined} from'@ant-design/icons';

const ExchangeContainer = styled.div`
  width: 500px;
  height: 200px;
  border: solid 2px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

function App() {

  const [fromUnit, setFromUnit] = useState('')
  const [toUnit, setToUnit] = useState('')

  const [amountInput, setAmountInput] = useState('')
  const [resultInput, setResultInput] = useState('')

  console.log(fromUnit)

  useEffect(()=>{
    var requestURL = `https://api.exchangerate.host/convert?from=${fromUnit}&to=${toUnit}`;
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
  
    request.onload = function () {
      var response = request.response;
      console.log(response);
      setResultInput(response.result*amountInput)
    };
  }, [fromUnit, toUnit, amountInput])

  

  return (
    <div className="App">
      <ExchangeContainer>
        <p>환율 계산기</p>
        <FromDropdownInput setFromUnit={setFromUnit} setAmountInput={setAmountInput} />
        <SwapOutlined style={{fontSize : '20px'}}/>
        <ToDropdownInput setToUnit={setToUnit} resultInput={resultInput} />
      </ExchangeContainer>
    </div>
  );
}

export default App;
