import { useState } from 'react'
type OptionType = {
    value: string;
    label: string;
}

const Multiselect = () => {

    const [selectedOptions, setSelectedOptions] = useState([])

    const options: OptionType[] = [
        { value: 'red', label: 'Red' },
        { value: 'black', label: 'Black' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'green', label: 'Green' },
        { value: 'purple', label: 'Purple' },
    ]

    const handleOption = (label: string) => {
        setSelectedOptions(prev => [...prev, label])
        conso
    }

    return (
        <div className="w-96">

            <div className="w-full py-2 px-3 flex flex-wrap border border-red-600">
                {
                    selectedOptions.map((option) => (
                        <div className='bg-black m-1 px-1 text-sm flex items-center justify-center rounded text-white' key={option}>{option}</div>
                    ))
                }
                <div className='flex-1'>
                    <input className="w-full border-none focus:outline-none h-full px-3 py-2" type="text" name="" id="" placeholder="text" />
                </div>
            </div>

            <div className="w-full mt-2 border rounded-lg flex flex-col justify-start items-start">
                {
                    options.map(({ value, label }) => (
                        <div onClick={() => handleOption(label)} className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer" key={value}>{label}</div>
                    ))
                }
            </div>
        </div>
    );
};

export default Multiselect;