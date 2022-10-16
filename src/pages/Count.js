import React from 'react';

function Count() {
    const [count, setCount] = React.useState(0);

    const onClickPlus = () => {
        setCount(count + 1);
    }

    return (
        <div className="count">
            <div>
                <h2>Счетчик:</h2>
                <h1>{count}</h1>
                <button disabled={count <= 0} onClick={() => setCount(count - 1)} className="minus">- Минус</button>
                <button onClick={onClickPlus} className="plus">Плюс +</button>
            </div>
        </div>
    );
}

export default Count;