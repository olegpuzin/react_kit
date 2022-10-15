import React, { useEffect, useRef, useState } from 'react';
import { ConvertorBlock } from '../../components/ConvertorBlock';
import './currencyConvertor.scss';

function CurrencyConvertor() {


    const ratesRef = useRef({});
    const [fromCurrency, setFromCurrency] = useState('UAH');
    const [toCurrency, setToCurrency] = useState('USD');
    const [fromAmount, setFromAmount] = useState(0);
    const [toAmount, setToAmount] = useState(1);


    useEffect(() => {
        fetch('https://cdn.cur.su/api/latest.json')
        .then(res => res.json())
        .then(json => {
            ratesRef.current = json.rates;
            onChangeToAmount(1);
        })
        .catch(err => {
            console.warn(err);
            alert('Не удалось получить актуальный курс :(')
        })
    }, []);


    useEffect(() => {
        onChangeFromAmount(fromAmount)
    }, [fromCurrency]);

    useEffect(() => {
        onChangeToAmount(toAmount)
    }, [toCurrency])


    const onChangeFromAmount = (value) => {
        const result = ratesRef.current[toCurrency] / ratesRef.current[fromCurrency] * value;
        setToAmount(result.toFixed(3));
        setFromAmount(value);
    };

    const onChangeToAmount = (value) => {
        const result = ratesRef.current[fromCurrency] / ratesRef.current[toCurrency] * value;
        setFromAmount(result.toFixed(3));
        setToAmount(value);
    };


    return (
        <div className="convertor">
            <ConvertorBlock value={fromAmount} onChangeValue={onChangeFromAmount} currency={fromCurrency} onChangeCurrency={setFromCurrency} />
            <ConvertorBlock value={toAmount} onChangeValue={onChangeToAmount} currency={toCurrency} onChangeCurrency={setToCurrency} />
        </div>
    );
};

export default CurrencyConvertor;
