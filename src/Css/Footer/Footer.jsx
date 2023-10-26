
import './Footer.css'

function Footer(){
    return(
        <div className="FooterDiv">
            <footer>
            <table border={3} cellSpacing={'20px'} cellPadding={'10px'}>
            <thead>
               <tr>
                  <th colSpan={3}>Table</th>
               </tr>
               <tr>
                  <th>SLno</th>
                  <th>Name</th>
                  <th>Sal</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>01</td>
                  <td>A</td>
                  <td>100</td>
               </tr>
               <tr>
                  <td>02</td>
                  <td rowSpan={2}>B</td>
                  <td>1000</td>
               </tr>
               <tr>
                  <td>03</td>
                  {/* <td>C</td> */}
                  <td>10000</td>
               </tr>
            </tbody>
            <tfoot>
               <td colSpan={3}>dhkdjad</td>
            </tfoot>
            </table>
            </footer>
        </div>
                
  
    )
}
export default Footer