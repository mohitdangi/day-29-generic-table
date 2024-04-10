import React from 'react';
import "./styles.css";

const TableGenerator = ({ data})=>{

    if(!data || data.length === 0){
        return <div> No data available </div>;
    };
    console.log(data , " data");
    const columns = Object.keys(data[0]);
    console.log(columns ," col");

 return (
    <table>
        <thead>
            <tr>
                {columns.map((column,index)=>(
                    <th key = {index}>{column}</th>
                ))}
                </tr>
                </thead>
        <tbody>
     {
        data.map((row,index)=>(
            <tr key={index}>
               {
                columns.map((col,idx)=>(
                    <td key={idx}>
                         {row[col]}
                        </td>
                ))
               }
                </tr>
        ))
     }
            </tbody>
            </table>        
 )
};

export default TableGenerator;
