import React from 'react';
import './button.scss';
import { useCalc } from '../../hooks/useCalc';

const Button = ({ value }) => {
    const { calc, setCalc } = useCalc();

    const clearClick = () => {
        setCalc({
            sign: '',
            number: 0,
            result: 0,
        });
    };

    const invertClick = () => {
        setCalc({
            sign: '',
            number: calc.number ? calc.number * -1 : 0,
            result: calc.result ? calc.result * -1 : 0,
        });
    };

    const percentClick = () => {
        setCalc({
            sign: '',
            number: calc.number / 100,
            result: calc.result / 100,
        });
    };

    const operationClick = () => {
        setCalc({
            sign: value,
            number: 0,
            result: !calc.result && calc.number ? calc.number : calc.result,
        });
    };

    const commaClick = () => {
        setCalc({
            ...calc,
            number: !calc.number.toString().includes('.')
                ? calc.number + value
                : calc.number,
        });
    };

    const equalsClick = () => {
        if (calc.number && calc.result) {
            const math = (sign, result, number) => {
                const buttonValues = {
                    '÷': (a, b) => a / b,
                    '×': (a, b) => a * b,
                    '-': (a, b) => a - b,
                    '+': (a, b) => a + b,
                };

                return buttonValues[sign](result, number);
            };

            setCalc({
                sign: '',
                number: 0,
                result: math(calc.sign, calc.result, calc.number),
            });
        }
    };

    const numberClick = () => {
        const numberString = value.toString();
        let numberValue;

        if (numberString === '0' && calc.number === 0) {
            numberValue = '0';
        } else {
            numberValue = Number(calc.number + numberString);
        }

        setCalc({ ...calc, number: numberValue });
    };

    const handleClick = () => {
        const buttonValues = {
            C: clearClick,
            '⁺⁄₋': invertClick,
            '%': percentClick,
            '÷': operationClick,
            '×': operationClick,
            '-': operationClick,
            '+': operationClick,
            '.': commaClick,
            '=': equalsClick,
        };

        if (buttonValues[value]) {
            return buttonValues[value]();
        } else {
            return numberClick();
        }
    };

    return (
        <button className="button" onClick={handleClick}>
            {value}
        </button>
    );
};

export default Button;
