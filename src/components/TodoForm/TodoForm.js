import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {

};

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    const onHandleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formValue = {
            title: value
        }
        onSubmit(formValue);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={onHandleChange} />
        </form>
    );
}

export default TodoForm;