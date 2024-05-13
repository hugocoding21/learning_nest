"use client";
import { useState } from "react";

export default function CalculettePage() {
  const [result, setResult] = useState<string>("");

  function appendToResult(e: any) {
    setResult(result.concat(e.target.value));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Erreur");
      setTimeout(() => {
        setResult("");
      }, 1000);
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-full bg-slate-500'>
      <div className='bg-slate-600 border-[rgb(15,15,38)] border-4 rounded-xl p-6 font-medium '>
        <input
          className='rounded-xl w-full mb-4 outline-none text-right pr-4 h-10 border-[rgb(15,15,38)] border-2'
          type='text'
          value={result}
          readOnly
        />
        <div>
          <div>
            <button onClick={appendToResult} value='7'>
              7
            </button>
            <button onClick={appendToResult} value='8'>
              8
            </button>
            <button onClick={appendToResult} value='9'>
              9
            </button>
            <button onClick={appendToResult} value='*'>
              *
            </button>
            <button onClick={clear}>C</button>
          </div>
          <div>
            <button onClick={appendToResult} value='4'>
              4
            </button>
            <button onClick={appendToResult} value='5'>
              5
            </button>
            <button onClick={appendToResult} value='6'>
              6
            </button>
            <button onClick={appendToResult} value='/'>
              ÷
            </button>
          </div>
          <div>
            <button onClick={appendToResult} value='1'>
              1
            </button>
            <button onClick={appendToResult} value='2'>
              2
            </button>
            <button onClick={appendToResult} value='3'>
              3
            </button>
            <button onClick={appendToResult} value='+'>
              +
            </button>
          </div>
          <div>
            <button onClick={appendToResult} value='.'>
              ,
            </button>
            <button onClick={appendToResult} value='0'>
              0
            </button>
            <button onClick={calculate}>=</button>
            <button onClick={appendToResult} value='-'>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
