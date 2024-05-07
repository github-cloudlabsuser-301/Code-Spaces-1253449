import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('type markdown here');

  return (
    <div>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

  function reverseSentence(sentence) {
    // Reverse the sentence
    let reversed = sentence.split(' ').reverse().join(' ');
  
    // Capitalize the first letter and make sure the rest of the sentence is lower case
    reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1).toLowerCase();
  
    return reversed;
  }


  const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];
  
  const names = data.flatMap(arr => arr.map(obj => obj.name));
  console.log(names); // Outputs: ['John', 'Jane', 'Bob']

