// function Html(){
//     return(
//         <div>
//             <nav>

//             </nav>

//         </div>
//     )
// }

import "./Clone.css";
function Html() {
    return (
        <div className="Navbar">
            <section className="sec-1">
                <nav className="navbar">
                    <hr className="line2"></hr>
                    <article className="navart">
                        <div className="image">
                            <a href="">
                                <img
                                    src="https://assets.website-files.com/63f38a8c92397a024fcb9ae8/65142d5754eafa29699ca491_logo.svg"
                                    alt="Company Logo"
                                    className="logo"
                                />
                            </a>
                        </div>
                        <div className="menubar">
                            <a href="#SERVICES" className="navdiv">
                                SERVICES<i class="fa-solid fa-chevron-down"></i>
                            </a>
                            <a href="#PROJECTS" className="navdiv">
                                PROJECTS
                            </a>
                            <a href="#OPEN SOURCE" className="navdiv">
                                OPEN SOURCE
                            </a>
                            <a href="#OUR BLOG" className="navdiv">
                                OUR BLOG
                            </a>
                        </div>
                        <div className="roundb">
                            <div className="c1">
                                <a href="GET IN TOUCH">GET IN TOUCH</a>
                            </div>
                            <div className="c2">
                                <i class="fa-solid fa-pen"></i>
                            </div>
                        </div>
                    </article>
                </nav>
                <hr className="line1"></hr>
                <br />
                <div className="d1">
                    <div className="DD1">
                        <a href="#Projects">ALL_PROJECTS</a>
                    </div>
                    <div className="DD2">/</div>
                    <div className="DD3">RAVEN.GG</div>
                </div>

                <div className="pk">
                    <div className="pk1">
                        <h1>
                            RAVEN.GG — THE <br /> LEADING BRAND FOR <br />
                            CUSTOM ESPORTS <br /> CLOTHING DESIGN
                        </h1>
                    </div>
                </div>

                <br />
                <div className="pk3">
                    <div className="e1">
                        <i class="fa-regular fa-clock"></i> 2021-2022
                    </div>
                    {/* <div className='e1'><img src="https://assets.website-files.com/63f38a8c92397a024fcb9ae8/64ab067899da5ef06caa9eea_icon-time.svg" alt="" className='clock' />2020–2022</div> */}
                    <div className="e2">INDUSTRY:E-COMMERCE</div>
                    <div className="e3">
                        <i class="fa-solid fa-arrow-down"></i> SCROLL
                    </div>
                </div>
            </section>
            {/* <nav className='navbar'>

                <hr className='line2'></hr>
                <article className='navart'>
                 <div className='image'><a href=""><img src="https://assets.website-files.com/63f38a8c92397a024fcb9ae8/65142d5754eafa29699ca491_logo.svg" alt="Company Logo" className="logo"  /></a>
                 </div>
                 <div className='menubar'>
                    <a href="#SERVICES" className='navdiv'>SERVICES<i class="fa-solid fa-chevron-down"></i></a>
                    <a href="#PROJECTS" className='navdiv'>PROJECTS</a>
                    <a href="#OPEN SOURCE" className='navdiv'>OPEN SOURCE</a>
                    <a href="#OUR BLOG" className='navdiv'>OUR BLOG</a>
                    </div>
                    <div className='roundb'>
                    <div className='c1'><a href="GET IN TOUCH">GET IN TOUCH</a></div>
                    <div className='c2'><i class="fa-solid fa-pen"></i></div>
                    </div>
                </article>
            </nav>
            <hr className='line1'></hr>
            <br />
            <div className='d1'>
                <div className='DD1'><a href="#Projects">ALL_PROJECTS</a></div>
                <div className='DD2'>/</div>
                <div className='DD3'>RAVEN.GG</div>
            </div>

            <div className='pk'>
                <div className='pk1'><h1>RAVEN.GG — THE <br /> LEADING BRAND FOR <br />CUSTOM ESPORTS <br /> CLOTHING DESIGN</h1></div>
            </div>

        <br />
        <div className='pk3'>
            <div className='e1'><i class="fa-regular fa-clock"></i> 2021-2022</div>
           
            <div className='e2'>INDUSTRY:E-COMMERCE</div>
            <div className='e3'><i class="fa-solid fa-arrow-down"></i>   SCROLL</div>
        </div> */}

            {/* <div className='div-2'>

        </div> */}
        </div>
    );
}
export default Html;
