import Image1 from './Image/turtle.jpg'
import Video1 from './Video/video1.mp4'
import Image2 from './Image/elephant.jpg'
import Video2 from './Video/video2.mp4'



const Html =()=>{
    return(
        <div>
            <nav>
               
                <center>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>

                </center>
            </nav>
            <header>
                <center><h1 id="home">Home</h1></center>
                <img src={Image1} alt="" width={'100%'} height={'600px'}/>
                <p>Lorem, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae magni eligendi quasi fuga minus voluptas, aliquid modi dolorum quae iure culpa exercitationem laboriosam. Asperiores est delectus saepe facere, odit hic. A libero obcaecati aliquid reiciendis! Fuga cupiditate rem nam dicta hic accusantium voluptas aliquam quibusdam, veniam earum saepe ducimus illo. Eligendi, praesentium alias delectus quisquam mollitia rem quae iure exercitationem libero aut suscipit fugit nulla amet et unde culpa nemo, ratione aperiam voluptatum ex nisi. Fugit aspernatur aperiam in libero, reiciendis dolores ipsa non tenetur ad sed placeat voluptate nostrum nesciunt adipisci, rerum vitae. Architecto inventore numquam totam quae reprehenderit.ipsum dolor sit amet consectetur adipisicing elit. Nemo laborum voluptas voluptatem commodi odio ut eum corporis, iusto ratione! Maxime excepturi consequuntur error rerum sunt nisi saepe mollitia ipsa, assumenda quasi. Consectetur id perferendis odio sed nobis laboriosam at, praesentium nesciunt molestias exercitationem officia inventore. Culpa hic recusandae nobis quibusdam nostrum laudantium? Ipsum similique sequi fugit qui repellendus ratione est consectetur at. Commodi corporis doloribus amet odio sit quidem, quibusdam eligendi. Reiciendis esse laudantium earum. Alias deleniti iusto maiores tenetur est. Enim aspernatur quasi dicta ex quod eligendi consequuntur aliquid est iure, commodi soluta architecto fugiat. Sapiente vero explicabo eos?</p>
            </header>
            <center><h1 id='about'>About</h1></center>
            <h2>Youtube video</h2>
            <iframe width="110%" height="515px" src="https://www.youtube.com/embed/fNy2Gv-mzoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ratione sed eius dolore quod quam cumque sit beatae ipsum, repellat voluptas tempora unde, 
                quidem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, debitis voluptas hic earum laboriosa
                m fugiat mollitia in quam ad veritatis ipsam qui, commodi, eos aperiam repellat aliquid nobis vitae fuga ipsa 
                eius pariatur? Pariatur quaerat deserunt neque, ducimus inventore quisquam sit nam temporibus delectus distinctio 
                hic consectetur voluptatum rem perferendis ex eveniet dicta dolorem quam commodi voluptatibus adipisci nihil ullam 
                molestiae! Adipisci deleniti tenetur saepe quas laudantium placeat quasi reprehenderit fuga corporis, tempora animi
                 non soluta sapiente ipsam temporibus, officia libero quae dignissimos? Aperiam sunt quisquam quam. Omnis non quaerat qui
                  sint debitis assumenda, consequuntur aut hic inventore modi quam. minus architecto, dolor at harum id. Quis, a dicta. Doloremque id alias dolorem cumque quas ut illum voluptas, sed tenetur explicabo aspernatur, consectetur dicta eveniet laudantium nam nostrum eius mollitia, ad obcaecati? Neque autem a repellat illum sunt minus iste sint reprehenderit dolore, deleniti, ullam voluptatum? Magnam praesentium corporis ducimus, soluta fugiat ut eveniet aliquid sint?</p>
            <video src={Video2} width={'100%'} height={'700px'} controls autoPlay loop muted></video>


            <center><h1 id='gallery'>Gallery</h1></center>
            <figure>
                <img src={Image2} alt="" height={'49%'} width={'49%'}/>
                <img src={Image2} alt="" height={'49%'} width={'49%'}/>
                <img src={Image2} alt="" height={'49%'} width={'49%'}/>
                <img src={Image2} alt="" height={'49%'} width={'49%'}/>
            </figure>
            
            <center><h1 id='contact'>Contact</h1></center>
            <footer>
                <table border={1} cellSpacing={'10px'} cellPadding={'40px'} width={'100%'}>
                    <thead>
                        <tr>
                            <th>Home</th>
                            <th>About</th>
                            <th>Gallery</th>
                            <th>Contact</th>
                            <th>Service</th>
                            <th>Help</th>
                            <th>Rating</th>
                            <th>Mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><b>home</b></td>
                        <td><b>about</b></td>
                        <td><b>gallery</b></td>
                        <td><input type="tel" name="phono" id=""value={+91}></input></td>
                        <td><b>Service</b></td>
                        <td><b><a href="tel:+9119425124">Call</a></b></td>
                        <td><b>3.75</b></td>
                        <td><b><a href="mailto:hrutiksargar@gmail.com">Mail</a></b></td>
                        </tr>
                        <tr>
                            <td><b>Home</b></td>
                            <td><b>About</b></td>
                            <td><b>Gallery</b></td>
                            <td colspan="2"><b><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.687762314327!2d73.85822277488354!3d18.45248068262792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac307f7a82f%3A0x3ac431343224b00b!2sRajiv%20Gandhi%20Zoological%20Park!5e0!3m2!1sen!2sin!4v1689744400267!5m2!1sen!2sin" width="100%" height="100"   loading="lazy" ></iframe></b></td>
                            {/* <!-- <td><b>Service</b></td> --> */}
                            <td><b><a href="tel:+9119425124">Call</a></b></td>
                            <td><b>4</b></td>
                            <td><b><a href="mailto:hrutiksargar@gmail.com">Mail</a></b></td>
                        </tr>
                        <tr>
                            <td><b>home</b></td>
                            <td><b>about</b></td>
                            <td><b>gallery</b></td>
                            <td><input type="tel" name="phono" id=""value={+91}/></td>
                            <td><b>Service</b></td>
                            <td><b><a href="tel:+9119425124">Call</a></b></td>
                            <td><b></b>5.33</td>
                            <td><b><a href="mailto:hrutiksargar@gmail.com">Mail</a></b></td>
                        </tr>
                    </tbody>
                </table>
            </footer>
        </div>
    )
}

export default Html