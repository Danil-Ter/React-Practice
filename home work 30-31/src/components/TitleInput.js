import React, { useState } from 'react';

const TitleInput = ({ value, onChange, setIsValid }) => {
  const [isValid, setIsValidState] = useState(true);

  const handleInput = (e) => {
    const title = e.target.value;
    const regExp = /^(?=.*[a-zа-я])(?=.*[A-ZА-Я])[a-zA-Zа-яА-Я]{2,15}$/;
    setIsValidState(regExp.test(title));
    if (onChange) {
      onChange(title);
    }
    if (setIsValid) {
      setIsValid(regExp.test(title));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleInput}
        style={{ border: isValid ? '1px solid green' : '1px solid red' }}
      />
      {!isValid && (
        <p className='error' style={{ color: 'red' }}>
          Title must have at least 2 characters, maximum 15 characters, and contain at least one uppercase and one lowercase letter.
        </p>
      )}
    </div>
  );
};

export default TitleInput;


