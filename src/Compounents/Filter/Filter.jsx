import React from 'react';

const Filter = ({value, onChange}) => {

    return (

        <div>
            <input type='text'
                   name='filter'
                   onChange={onChange}
                   value={value} // значение = вводимые символы в инпуте
            />
        </div>

    );

}

export default Filter;