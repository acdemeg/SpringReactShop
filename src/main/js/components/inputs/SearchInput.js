import React from 'react';
import InputIcon from './InputIcon';

const SearchInput = ({ sortList, placeholder }) => {
  return (
    <div className="field">
      <p className="control has-icons-right">
        <input 
          onChange={e => sortList(e)} 
          className="input" 
          placeholder={placeholder} 
        />
        <InputIcon side="right" icon="search" />
      </p>
    </div>
  );
};

export default SearchInput;
