import React, { useState } from 'react';
import { TextField, Button, TextareaAutosize, Paper } from '@mui/material';
import { Box } from '@mui/system';
import generatePikumin from '../utils/generatePikumin';

function PikuminGenerator() {
  const [name, setName] = useState("");
  const [ability, setAbility] = useState("");
  const [eye, setEye] = useState("");
  const [body, setBody] = useState("");
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    const result = generatePikumin(name, ability, eye.charAt(0), body);
    setOutput(result);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Box display="flex" flexDirection="column" alignItems="flex-start" gap={2}>
        <TextField label="ピクミンの名前" value={name} onChange={e => setName(e.target.value)} />
        <TextField label="ピクミンの能力" value={ability} onChange={e => setAbility(e.target.value)} />
        <TextField label="ピクミンの目" value={eye} onChange={e => setEye(e.target.value)} />
        <TextField label="ピクミンの体(64字以内繰り返し)" value={body} onChange={e => setBody(e.target.value)} />
        <Button variant="outlined" onClick={handleGenerate}>生成</Button>
        <Box border={1} width="100%" padding={1} fontSize="16px">
          <TextareaAutosize value={output} readOnly style={{ width: '100%' }} />
        </Box>
        <Button variant="outlined" onClick={handleCopy}>コピー</Button>
      </Box>
    </Paper>
  );
}

export default PikuminGenerator;
