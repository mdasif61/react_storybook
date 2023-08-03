import { ChangeEvent, useEffect, useState } from "react";

const Multiselect = () => {
  const [show, setShow] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [options, setOptions] = useState<Array<T>>([
    { value: "Red", label: "Red" },
    { value: "Black", label: "Black" },
    { value: "Yellow", label: "Yellow" },
    { value: "Green", label: "Green" },
    { value: "Purple", label: "Purple" },
  ]);

  const handleOption = (label: string): void => {
    setSelectedOptions((prev) => [...prev, label]);
    setOptions((prev) => prev.filter((option) => option.label !== label));
  };

  const handleRemove = (option: string): void => {
    const remainOptions = selectedOptions.filter((op) => op !== option);
    setSelectedOptions(remainOptions);
    const reAdd = selectedOptions.find((op) => op == option);
    setOptions((prev) => [{ value: reAdd, label: reAdd }, ...prev]);
  };

  const handleAllRemove = (): void => {
    setSelectedOptions([]);
    setOptions([
      { value: "Red", label: "Red" },
      { value: "Black", label: "Black" },
      { value: "Yellow", label: "Yellow" },
      { value: "Green", label: "Green" },
      { value: "Purple", label: "Purple" },
    ]);
  };

  const [userText, setUserText] = useState<string>('')
  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputText = e.target.value;
    setUserText(inputText)
    if (inputText) {
      setShow(true)
      const filteredOptions = options.filter(
        (option) => option.label.toLowerCase().includes(inputText.toLowerCase())
      );
      setOptions(filteredOptions);
    } else {
      setShow(false)
      setOptions(options)
    }
  }

  useEffect(() => {
    setOptions([
      { value: "Red", label: "Red" },
      { value: "Black", label: "Black" },
      { value: "Yellow", label: "Yellow" },
      { value: "Green", label: "Green" },
      { value: "Purple", label: "Purple" },
    ])
    setShow(true)
  }, [userText == ''])

  return (
    <div className="w-96">
      <div className="w-full py-2 px-3 flex flex-wrap border border-red-600">
        {selectedOptions.map((option) => (
          <div
            onClick={() => handleRemove(option)}
            className="bg-black m-1 px-1 text-sm flex items-center cursor-pointer justify-center rounded text-white"
            key={option}
          >
            {option}
          </div>
        ))}
        <div className="flex-1 flex justify-between items-center">
          <input
            onChange={(e) => handleInput(e)}
            className="w-full border-none focus:outline-none h-full px-3 py-2"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
          <button
            onClick={handleAllRemove}
            className="text-2xl font-bold px-2 text-red-500"
          >
            &#215;
          </button>
          <div
            onClick={() => setShow(!show)}
            className="px-2 border-l border-gray-500"
          >
            <button className="text-2xl text-gray-500 font-bold">&#94;</button>
          </div>
        </div>
      </div>

      {show && (
        <div className="w-full mt-2 border rounded-lg flex flex-col justify-start items-start">
          {options.map(({ value, label }) => (
            <div
              onClick={() => handleOption(label)}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
              key={value}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Multiselect;
