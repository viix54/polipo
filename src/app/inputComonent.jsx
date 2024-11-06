'use client';

import {F} from "polipo/react";

export default function InputComponent() {
  return (
    <F layout="Page1/InputResting">
    {{
      Box: <F><input type="text" style={{width:'100%', position:'absolute', left:'100px'}}/></F>
    }}
  </F>
  );
}
