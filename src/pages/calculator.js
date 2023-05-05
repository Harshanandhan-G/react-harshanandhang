import styles from "@/styles/calc.module.css";
import Input from "@/components/input";
import Button from "@/components/button";
import { useState } from "react";
const Calculator = () =>{
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
    const[result, setResult] = useState(0);
    const firstHandleChange = e =>{
        setFirstValue(Number(e.target.value));
    };
    const secondHandleChange = e =>{
        setSecondValue(Number(e.target.value));
    };
    const onButtonClick =() => {
        setResult(firstValue+secondValue);
    }
    return (
    <div className={styles.calcu}>
        <h1 className={styles.calcuHead}>Calculator</h1>
        <div className={styles.inputBox}>
            <input onHandleChange={firstHandleChange}/>
            <input onHandleChange={secondHandleChange}/>
            </div>
            <div className={styles.btnBox}>
                <Button name="+" onBtnClick={onButtonClick}/>
                <Button name="-" onBtnClick={onButtonClick}/>
                <Button name="*" onBtnClick={onButtonClick}/>
                <Button name="/" onBtnClick={onButtonClick}/>
            </div>
            <h1 className={styles.reHead}>{result}</h1>
        </div>
    );
};
export default Calculator;