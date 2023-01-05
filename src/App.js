import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [valueInputOne, setValueInputOne] = useState('')

    const [valueInputTwo, setValueInputTwo] = useState('')

    const [valueKInputTwo, setValueKInputTwo] = useState('')

    const [changeInputOne, setChangeInputOne] = useState('')
    const [changeInputTwo, setChangeInputTwo] = useState('')

    const exportInputTaskTwo = (valueInputTwo, valueKInputTwo) => {
        return setChangeInputTwo(
            valueInputTwo && valueInputTwo.length > valueKInputTwo
                ? valueInputTwo
                      .slice(0, valueKInputTwo - 3)
                      .split(' ')
                      .slice(0, -1)
                      .join(' ') +
                      ' ' +
                      '...'
                : valueInputTwo
        )
    }

    useEffect(() => {
        if (valueKInputTwo <= 3) {
            setValueKInputTwo(3)
        }
        if (valueKInputTwo >= 500) {
            setValueKInputTwo(500)
        }
    }, [valueKInputTwo])

    const exportInputTaskOne = str => {
        return setChangeInputOne(
            str.replace(/[\W_]/g, '').toLowerCase() ===
                str
                    .replace(/[\W_]/g, '')
                    .toLowerCase()
                    .split('')
                    .reverse()
                    .join('')
        )
    }

    return (
        <div className="Task_container">
            <div className="Task_1">
                <div>Task 1</div>
                <input
                    type="text"
                    className=""
                    onChange={e => setValueInputOne(e.target.value)}
                />
                <button onClick={() => exportInputTaskTwo(valueInputOne)}>
                    click
                </button>
                <div className="Task_result-1">{valueInputOne}</div>
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
                        type="number"
                        className=""
                        value={valueKInputTwo}
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
