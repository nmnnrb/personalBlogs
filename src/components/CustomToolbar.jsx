import React from 'react';
import { ColorContext } from '../context/ColorContext'
const CustomToolbar = () => {
    
    const {theme} = React.useContext(ColorContext);
    
    
    return (
  <div id="toolbar" className={`text-white  sticky border border-gray-900 
   rounded-md shadow-sm p-2 mb-4`}>
   
    <select className="ql-header text-white" defaultValue="Select">
      <option value="1">Heading 1</option>
      <option value="2">Heading 2</option>
    </select>
   
    <select className="ql-font"  />
    <select className="ql-size" />
    <button className="ql-bold" />
    <button className="ql-italic" />
    <button className="ql-underline" />
    <button className="ql-list" value="ordered" />
    <button className="ql-list" value="bullet" />
    <button className="ql-align" value="" />
    <button className="ql-align" value="center" />
    <button className="ql-align" value="right" />
    <button className="ql-link" />
    <button className="ql-image" />
    <button className="ql-blockquote" />
    <button className="ql-color" />
    <button className="ql-background" />
    <button className="ql-code-block" />
    {/* HR button */}
    <button className='bg-white p-2'>Hello</button>
  </div>
);

}
export default CustomToolbar;