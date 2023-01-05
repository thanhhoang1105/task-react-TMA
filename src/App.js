import { useState } from 'react'
import './App.css'

function App() {
    const [valueInputTwo, setValueInputTwo] = useState('')

    const [valueKInputTwo, setValueKInputTwo] = useState('')

    const [changeInputTwo, setChangeInputTwo] = useState('')

    const exportInputTaskTwo = (valueInputTwo, valueKInputTwo) => {
        return setChangeInputTwo(
            valueInputTwo && valueInputTwo.length > valueKInputTwo
                ? valueInputTwo
                      .slice(0, valueKInputTwo)
                      .split(' ')
                      .slice(0, -2)
                      .join(' ') +
                      ' ' +
                      '...'
                : valueInputTwo + ' ' + '...'
        )
    }

    console.log('valueInputTwo:', valueInputTwo)
    console.log(
        'test:',
        valueInputTwo.slice(0, valueKInputTwo).split(' ').slice(0, -1).join(' ')
    )
    // console.log(
    //     'test',
    //     valueInputTwo.slice(0, valueKInputTwo).split(' ').slice(0, -2)
    // )
    // console.log('changeInputTwo', changeInputTwo)

    return (
        <div className="Task_container">
            <div className="Task_1">
                <div>Task 1</div>
                <input type="text" className="" />
                <input type="text" className="" />
                <button>click</button>
                <div className="Task_result-1">result 1</div>
            </div>
            <div className="Task_2">
                <div>Task 2</div>
                <div className="Task_Input">
                    <div>String</div>
                    <input
                        type="text"
                        className=""
                        onChange={e => setValueInputTwo(e.target.value)}
                    />
                    <div>K</div>
                    <input
                        type="text"
                        className=""
                        onChange={e => setValueKInputTwo(e.target.value)}
                    />
                </div>
                <button
                    onClick={() =>
                        exportInputTaskTwo(valueInputTwo, valueKInputTwo)
                    }
                >
                    click
                </button>
                <div className="Task_result-2">{changeInputTwo}</div>
            </div>
        </div>
    )
}

export default App
