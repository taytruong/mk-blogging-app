import React from 'react';
import { useDropdown } from './dropdown-context';

const List = (props) => {
    const {show} = useDropdown() 
    return (
        <>
        {show && (
            <div className="absolute top-full left-0 w-full bg-white shadow-sm">
              {props.children}
            </div>
          )}
        </>
    );
};

export default List;