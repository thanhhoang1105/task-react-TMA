import { useState } from 'react'
import './App.css'

function App() {
    const [valueInputOne, setValueInputOne] = useState('')

    const [valueInputTwo, setValueInputTwo] = useState('')

    const [valueKInputTwo, setValueKInputTwo] = useState('')

    const [changeInputOne, setChangeInputOne] = useState('')
    const [changeInputTwo, setChangeInputTwo] = useState('')

    const exportInputTaskTwo = (valueInputTwo, valueKInputTwo) => {
        if (valueKInputTwo >= 3 && valueKInputTwo <= 500) {
            setChangeInputTwo(
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
        } else {
            alert('Please enter a value K >= 3 and K <= 500')
        }
    }

    const exportInputTaskOne = valueInputOne => {
        const re = /[\W_]/g
        const lowRegStr = valueInputOne.toLowerCase().replace(re, '')
        var fre = new Array(26)

        var n = lowRegStr.length
        fre.fill(0)
        console.log('fre', fre)

        for (var i = 0; i < n; i++) {
            fre[lowRegStr[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            // console.log(
            //     `remove [${i} + ${lowRegStr[i]}]`,
            //     fre[lowRegStr[i].charCodeAt(0) - 'a'.charCodeAt(0)]
            // )
            // console.log(
            //     'lowRegStr[i].charCodeAt(0)',
            //     lowRegStr[i].charCodeAt(0) - 'a'.charCodeAt(0)
            // )
            // arr.push(lowRegStr[i])
            // console.log('arr', arr.sort())
        }

        var count = 0

        for (let i = 0; i < 26; i++) {
            if (fre[i] % 2) {
                count += 1

                console.log(
                    `fre [${i}]`,
                    i + 'a'.charCodeAt(0),
                    String.fromCharCode(i + 'a'.charCodeAt(0))
                )
                // console.log('count in', count)
            }
        }

        if (count === 0 || count === 1) {
            return {
                count: 0,
                fre: fre
            }
        } else {
            return {
                count: count - 1,
                fre: fre
            }
        }
    }

    const remove = valueInputOne => {
        var arr = []
        var arrCopy = []
        var result = exportInputTaskOne(valueInputOne).fre
        var count = exportInputTaskOne(valueInputOne).count

        if (exportInputTaskOne(valueInputOne).count > 0) {
            for (let i = 0; i < 26; i++) {
                if (result[i] > 0) {
                    arr.push(String.fromCharCode(i + 'a'.charCodeAt(0)))
                    arrCopy.push(String.fromCharCode(i + 'a'.charCodeAt(0)))
                }
            }

            for (let i = 0; i < count; i++) {
                result[
                    arr[arr.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)
                ] -= 1
                arr.pop()
            }
        }
        console.log('arr', arr)
        console.log('arrCopy', arrCopy)
        console.log('result', result)
        return count
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
                <button
                    onClick={() => setChangeInputOne(remove(valueInputOne))}
                >
                    click
                </button>
                <div className="Task_result-1">{changeInputOne}</div>
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
