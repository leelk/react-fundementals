import React from "react";

const TableOne = () => {
   return(
       <div>
           <table>
               <tr>
                   <th>Firstname</th>
                   <th>Lastname</th>
                   <th>Age</th>
               </tr>
               <tr>
                   <td>Jill</td>
                   <td>Smith</td>
                   <td>50</td>
               </tr>
               <tr>
                   <td>Eve</td>
                   <td>Jackson</td>
                   <td>94</td>
               </tr>
           </table>
       </div>
   )
}

export default TableOne