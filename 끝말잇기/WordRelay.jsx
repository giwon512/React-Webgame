const React = require('react');
const { Component, useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState("jiwon");
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length - 1] === value[0]){
            setValue('');
            setWord(value);
            setResult('Good');
        }
        else {
            setValue('');
            setResult('Wrong');
        }
        inputRef.current.focus();
    }


    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value={value} 
                onChange={(e) => {setValue(e.target.value)}} />
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>
    )
};

module.exports = WordRelay;