import React, { useState } from 'react';

export function App(props) {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const [words, setWords] = useState('');

  const handleChange = e => {
    const inputNumber = e.target.value;
    setNumber(inputNumber);
    if (inputNumber) {
      setWords(numberToWords(parseInt(inputNumber, 10)));
    } else {
      setWords('');
    }
  };

  const numberToWords = num => {
    if (num === 0) return 'zero';

    const units = [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ];

    const tens = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety',
    ];

    const scales = [
      '',
      'thousand',
      'million',
      'billion',
      'trillion',
      'quadrillion',
      'quintillion',
      'sextillion',
      'septillion',
      'octillion',
      'nonillion',
    ];

    const convertHundreds = num => {
      let words = '';
      if (num > 99) {
        words += units[Math.floor(num / 100)] + ' hundred ';
        num %= 100;
      }
      if (num > 19) {
        words += tens[Math.floor(num / 10)] + ' ';
        num %= 10;
      }
      if (num > 0) {
        words += units[num] + ' ';
      }
      return words.trim();
    };

    const convert = num => {
      let words = '';
      let scaleIndex = 0;

      while (num > 0) {
        let chunk = num % 1000;
        if (chunk > 0) {
          words =
            convertHundreds(chunk) +
            (scales[scaleIndex] ? ' ' + scales[scaleIndex] + ' ' : '') +
            words;
        }
        num = Math.floor(num / 1000);
        scaleIndex++;
      }

      return words.trim();
    };

    return convert(num);
  };

  return (
    <div className='App'>
      <h1>Enter a Number</h1>
      <input
        type='number'
        value={number}
        onChange={handleChange}
        placeholder='Enter a number'
      />

      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        {words && <p>{words}</p>}
      </div>
    </div>
  );
}

// Log to console
console.log('Hello console');
