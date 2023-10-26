// const Html = () =>{
//    return(
//       <div className="Html">
//       <h1>Welcome to html</h1>
//      </div>
//    )  
// }
// export default Html
import Image1 from './Image/virat.jpg'
import Audio1 from './Audio/cheezbadi.mp3'
import Video1 from './Video/Video1.mp4'
const Html =()=>{
   return(
      <div className="Html">
         <h1>Welcome to Html</h1>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjjPIgNupM3Cq1VPoLaq_ji6ENkg2kUQtuYd5WL9gORmfwXsCi3HxETFK-kA2uoZCqyI&usqp=CAU" alt="name" height={'500px'} width={'49%'} />
         <img src={Image1} alt="" height={'500px'} width={'49%'} />
         <h1>Anchor tag</h1>
         <a href="https://www.flipkart.com/" target='_blank'>Flipkart</a>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/fukGbiPuBjU?si=rwBiBAsilgQ8uDk0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4964044841304!2d73.91112627488494!3d18.506456682584382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c1fceb8377%3A0xb160caad3213fedf!2sKumar%20Primus!5e0!3m2!1sen!2sin!4v1696922090855!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe>
         <br />
         <h1>Media tag</h1>
         <audio src={Audio1} controls loop muted></audio>
         <video src={Video1}  autoPlay loop width={'49%'} height={'400px'}></video>
         <h1>Table</h1>
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
         
      </div>
   )
}
export default Html