import { useState } from "react";
import { add } from "../utils/string";

export default function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error) {
      setResult(error instanceof Error ? error.message : "Invalid input");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Calculate
      </button>
      {result !== "" && <div className="mt-4 text-xl">Result: {result}</div>}
    </div>
  );
}
