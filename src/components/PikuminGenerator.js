//PikuminAA/src/components/PikuminGenerator.js
import React, { useState } from 'react';
import { TextField, Button, TextareaAutosize } from '@mui/material';
import generatePikumin from '../utils/generatePikumin';

function PikuminGenerator() {
  const [name, setName] = useState("");
  const [ability, setAbility] = useState("");
  const [eye, setEye] = useState("");
  const [body, setBody] = useState("")
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    const result = generatePikumin(name, ability, eye.charAt(0), body);
    setOutput(result);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div>
      <TextField label="ピクミンの名前" value={name} onChange={e => setName(e.target.value)} />
      <TextField label="ピクミンの能力" value={ability} onChange={e => setAbility(e.target.value)} />
      <TextField label="ピクミンの目" value={eye} onChange={e => setEye(e.target.value)} />
      <TextField label="ピクミンの体(64字以内繰り返し)" value={body} onChange={e => setBody(e.target.value)} />
      <Button onClick={handleGenerate}>生成</Button>
      <TextareaAutosize value={output} readOnly />
      <Button onClick={handleCopy}>コピー</Button>
    </div>
  );
}

export default PikuminGenerator;
