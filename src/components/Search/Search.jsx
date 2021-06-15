import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
    onSearch: PropTypes.func,
};

function Search(props) {
    const { onSearch } = props;
    const [value, setValue] = useState('');
    const typingValueRef = useRef(null);

    function onChangeValue(e) {
        const value = e.target.value;
        setValue(value);

        if (typingValueRef.current) {
            clearTimeout(typingValueRef.current);
        }

        typingValueRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: value,
            }
            onSearch(formValue);
        }, 800)

    }

    return (
        <input type="text" value={value} onChange={onChangeValue} />
    );
}

export default Search;