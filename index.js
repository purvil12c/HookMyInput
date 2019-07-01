import React, { useState } from 'react';

function useHookMyInput(initialValue, onChangeCallback, onSubmitCallback){
    let [ value, setValue ] = useState(initialValue);

    const onChangeHandler = (e) => {
        setValue(e.target.value);
        if(onChangeCallback){
            onChangeCallback();
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setValue(e.target.value);
        if(onChangeCallback){
            onChangeCallback();
        }
    }

    return {
        value: value,
        onChangeHandler: onChangeHandler,
        onSubmitHandler: onSubmitHandler
    }
}

export default useHookMyInput;