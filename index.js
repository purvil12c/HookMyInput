import React, { useState } from 'react';

function useHookMyInput(initialValue){
    let [ value, setValue ] = useState(initialValue);

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }

    return {
        value: value,
        onChangeHandler: onChangeHandler
    }
}

export default useHookMyInput;