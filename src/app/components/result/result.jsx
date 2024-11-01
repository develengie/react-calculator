import React from 'react';
import { Textfit } from 'react-textfit';
import './result.scss';
import { useCalc } from '../../hooks/useCalc';

const Result = () => {
    const { calc } = useCalc();

    return (
        <Textfit className="result" mode="single" max={60}>
            {calc.number ? calc.number : calc.result}
        </Textfit>
    );
};

export default Result;
