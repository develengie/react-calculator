import Button from './components/button/button';
import ButtonGroup from './components/buttonGroup/buttonGroup';
import Result from './components/result/result';
import Screen from './components/screen/screen';
import CalcProvider from './hooks/useCalc';

const buttonValues = [
    ['C', '⁺⁄₋', '%', '÷'],
    [7, 8, 9, '×'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
];

function App() {
    return (
        <CalcProvider>
            <Screen>
                <Result />
                <ButtonGroup>
                    {buttonValues.flat().map((button, index) => (
                        <Button key={index} value={button} />
                    ))}
                </ButtonGroup>
            </Screen>
        </CalcProvider>
    );
}

export default App;
