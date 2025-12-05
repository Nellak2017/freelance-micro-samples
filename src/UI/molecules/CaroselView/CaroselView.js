import React from 'react'
// This component will have one of the components on the screen at once
export const CaroselView = ({ index = 0, children }) => {
    const ChildArray = React.Children.toArray(children)
    return (<>{ChildArray[index % ChildArray.length]}</>)
}