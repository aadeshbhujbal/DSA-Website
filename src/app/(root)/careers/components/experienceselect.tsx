import React, { useState } from 'react';

const ExperienceSelect = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    function handleChange(event) {
        const { value } = event.target;
        setSelectedValue(value);
    }
    
    
    //console.log('Selected values:', selectedValue);
    return (
        <div>
            <div className="inputs flex flex-col gap-2">
                <div className='flex items-center'>
                    <input
                        type='checkbox'
                        style={{ width: "16px", height: "16px" }}
                        value='Intern'
                        onChange={handleChange}
                        checked={selectedValue === 'Intern'}
                    />
                    <p className='pl-3'>Intern</p>
                </div>
                <div className='flex items-center'>
                    <input
                        type='checkbox'
                        style={{ width: "16px", height: "16px" }}
                        value='0-2 Yrs'
                        onChange={handleChange}
                        checked={selectedValue === '0-2 Yrs'}
                    />
                    <p className='pl-3'>0-2 Yrs</p>
                </div>
                <div className='flex items-center'>
                    <input
                        type='checkbox'
                        style={{ width: "16px", height: "16px" }}
                        value='3-5 Yrs'
                        onChange={handleChange}
                        checked={selectedValue === '3-5 Yrs'}
                    />
                    <p className='pl-3'>3-5 Yrs</p>
                </div>
                <div className='flex items-center'>
                    <input
                        type='checkbox'
                        style={{ width: "16px", height: "16px" }}
                        value='6-8 Yrs'
                        onChange={handleChange}
                        checked={selectedValue === '6-8 Yrs'}
                    />
                    <p className='pl-3'>6-8 Yrs</p>
                </div>
                <div className='flex items-center'>
                    <input
                        type='checkbox'
                        style={{ width: "16px", height: "16px" }}
                        value='9-12 Yrs'
                        onChange={handleChange}
                        checked={selectedValue === '9-12 Yrs'}
                    />
                    <p className='pl-3'>9-12 Yrs</p>
                </div>
                <div className='flex items-center'>
                    <input
                        type='checkbox'
                        style={{ width: "16px", height: "16px" }}
                        value='Above 12 Yrs'
                        onChange={handleChange}
                        checked={selectedValue === 'Above 12 Yrs'}
                    />
                    <p className='pl-3'>Above 12 Yrs</p>
                </div>
            </div>
        </div>
    );
}

export default ExperienceSelect;
