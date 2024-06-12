import React, { Children } from 'react';

export default function ParentComponent({ children }) {
  const childrenArray = Children.toArray(children);

  return (
    <div>
      <h2>Дочерние элементы:</h2>
      {console.log(children)}
      {children}
      {childrenArray[1]}
      {childrenArray[0]}
    </div>
  );
}
