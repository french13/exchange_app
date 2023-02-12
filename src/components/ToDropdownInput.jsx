import React, { useCallback, useState } from "react";
import styled from "styled-components";
import data from "../data/data";

const InputBox = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 5px;
  border: solid 2px lightgray;
  border-radius: 5px;
  margin: 10px;
`;

const InputStyle = styled.input`
  width: 50%;
  height: 80%;
  border: none;
  border-right: solid 2px lightgray;
  outline: none;
`;

const SelectStyle = styled.select`
  width: 50%;
  height: 80%;
  border: none;
`;

const ToDropdownInput = ({setToUnit, resultInput}) => {
  
  const onChangeSelect = useCallback((e)=>{
    setToUnit(e.target.value)
  },[])

const resultValue = (Number(resultInput)).toFixed(2)

let resultPrice = resultValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');


  return (
    <InputBox>
      <InputStyle value={resultPrice} readOnly />
      <SelectStyle onChange={onChangeSelect}>
        {data &&
          data.map((item) => {
            return <option key={item.id} value={item.unit}>{item.name}</option>;
          })}
      </SelectStyle>
    </InputBox>
  );
};

export default ToDropdownInput;
