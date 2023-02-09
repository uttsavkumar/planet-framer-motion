import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useMediaQuery } from "@material-ui/core";

const Header = () => {

    const style = {
        height: '5px',
        marginTop: '-7px',
    }

    const [hover, setHover] = useState(false)
    const [vhover, setVHover] = useState(false)
    const [ehover, setEHover] = useState(false)
    const [mhover, setMHover] = useState(false)
    const [jhover, setJHover] = useState(false)
    const [shover, setSHover] = useState(false)
    const [uhover, setUHover] = useState(false)
    const [nhover, setNHover] = useState(false)

    const page = useLocation().pathname
    let isSmall = useMediaQuery("(max-width:1000px)");


    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const navigate = useNavigate()

    useEffect(() => {
        if (isSmall === false) {
            setToggle(false)
        }

        // if(navigate.name ==== page){
        //     setToggle(false)
        // }
    }, [isSmall, navigate])



    return (
        <>
            <motion.div
                initial="hidden"
                animate={{ opacity: page === '/' ? [0, 1] : 1, transition: page === '/' && { duration: 3, delay: 1 } }}
                className="container-fluid p-0" style={{ position:'relative', zIndex: 100 }}>
                <nav class="navbar navbar-expand-lg bg-transparent p-4" style={{ borderBottom: '.5px solid #a6a6a654' }}>
                    <div class="container-fluid">
                        <Link to={'/'} class="navbar-brand text-white" style={{ fontFamily: 'Antonio', textTransform: "uppercase", fontSize: '30px' }} href="#">The planets</Link>

                        {isSmall === false ?
                            <ul className="navbar-nav navbarresponsive">
                                <motion.div
                                    filter="#mercury"
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                    style={{ height: 'auto' }}>
                                    <motion.div
                                        id='mercury'
                                        animate={{ x: 9, width: hover || page === '/mercury' ? 70 : 0, transition: { damping: 1 }, backgroundColor: "Gainsboro" }}
                                        initial={{ opacity: 1, width: 0 }}
                                        style={style}>
                                    </motion.div>
                                    <li className="nav-item me-3 planetitem"><Link to={{ pathname: '/mercury', prevPath: page }} className="nav-link  planetname">Mercury</Link></li>
                                </motion.div>


                                <motion.div
                                    filter="#venus"
                                    onMouseEnter={() => setVHover(true)}
                                    onMouseLeave={() => setVHover(false)}
                                    style={{ height: 'auto' }}>
                                    <motion.div
                                        id='venus'
                                        animate={{ x: 9, width: vhover || page === '/venus' ? 45 : 0, transition: { damping: 1 }, backgroundColor: "Tan" }}
                                        initial={{ opacity: 1, width: 0 }}
                                        style={style}>
                                    </motion.div>
                                    <li className="nav-item me-3 planetitem"><Link to={'/venus'} className="nav-link  planetname">Venus</Link></li>
                                </motion.div>

                                <motion.div
                                    filter="#earth"
                                    onMouseEnter={() => setEHover(true)}
                                    onMouseLeave={() => setEHover(false)}
                                    style={{ height: 'auto' }}>
                                    <motion.div
                                        id='earth'
                                        animate={{ x: 9, width: ehover || page === '/earth' ? 45 : 0, transition: { damping: 1 }, backgroundColor: "DodgerBlue" }}
                                        initial={{ opacity: 1, width: 0 }}
                                        style={style}>
                                    </motion.div>
                                    <li className="nav-item me-3 planetitem"><Link to={'/earth'} className="nav-link  planetname">Earth</Link></li>
                                </motion.div>

                                <motion.div
                                    filter="#mars"
                                    onMouseEnter={() => setMHover(true)}
                                    onMouseLeave={() => setMHover(false)}
                                    style={{ height: 'auto' }}>
                                    <motion.div
                                        id='mars'
                                        animate={{ x: 9, width: mhover || page === '/mars' ? 35 : 0, transition: { damping: 1 }, backgroundColor: "Tomato" }}
                                        initial={{ opacity: 1, width: 0 }}
                                        style={style}>
                                    </motion.div>
                                    <li className="nav-item me-3 planetitem"><Link to={'/mars'} className="nav-link  planetname">Mars</Link></li>
                                </motion.div>

                                <motion.div
                                    filter="#jupiter"
                                    onMouseEnter={() => setJHover(true)}
                                    onMouseLeave={() => setJHover(false)}
                                    style={{ height: 'auto' }}>
                                    <motion.div
                                        id='jupiter'
                                        animate={{ x: 9, width: jhover || page === '/jupiter' ? 55 : 0, transition: { damping: 1 }, backgroundColor: "Wheat" }}
                                        initial={{ opacity: 1, width: 0 }}
                                        style={style}>
                                    </motion.div>
                                    <li className="nav-item me-3 planetitem"><Link to={'/jupiter'} className="nav-link  planetname">jupiter</Link></li>
                                </motion.div>

                                <motion.div
                                    filter="#saturn"
                                    onMouseEnter={() => setSHover(true)}
                                    onMouseLeave={() => setSHover(false)}
                                    style={{ height: 'auto' }}>
                                    <motion.div
                                        id='saturn'
                                        animate={{ x: 9, width: shover || page === '/saturn' ? 55 : 0, transition: { damping: 1 }, backgroundColor: "SandyBrown" }}
                                        initial={{ opacity: 1, width: 0 }}
                                        style={style}>
                                    </motion.div>
                                    <li className="nav-item me-3 planetitem"><Link to={'/saturn'} className="nav-link  planetname">saturn</Link></li>
                                </motion.div>


                                <motion.div
                                    filter="#uranus"
                                    onMouseEnter={() => setUHover(true)}
                                    onMouseLeave={() => setUHover(false)}
                                    style={{ height: 'auto' }}>
                                    <motion.div
                                        id='uranus'
                                        animate={{ x: 9, width: uhover || page === '/uranus' ? 60 : 0, transition: { damping: 1 }, backgroundColor: "Aquamarine" }}
                                        initial={{ opacity: 1, width: 0 }}
                                        style={style}>
                                    </motion.div>
                                    <li className="nav-item me-3 planetitem"><Link to={'/uranus'} className="nav-link  planetname">uranus</Link></li>
                                </motion.div>


                                <motion.div
                                    filter="#neptune"
                                    onMouseEnter={() => setNHover(true)}
                                    onMouseLeave={() => setNHover(false)}
                                    style={{ height: 'auto' }}>
                                    <motion.div
                                        id='neptune'
                                        animate={{ x: 9, width: nhover || page === '/neptune' ? 65 : 0, transition: { damping: 1 }, backgroundColor: "RoyalBlue" }}
                                        initial={{ opacity: 1, width: 0 }}
                                        style={style}>
                                    </motion.div>
                                    <li className="nav-item me-3 planetitem"><Link to='/neptune' className="nav-link  planetname">neptune</Link></li>
                                </motion.div>




                            </ul>
                            :
                            <>
                                {toggle === false ?
                                    <motion.svg
                                    initial={{pathLength: 0}}
                                    animate={{pathLength: 1}}
                                        onClick={handleToggle} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                                        <motion.path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                    </motion.svg>
                                    :
                                    <svg onClick={handleToggle} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                }

                            </>
                        }
                    </div>
                </nav>
            </motion.div>
         
            {toggle &&


                <>

                    <motion.div

                        style={{ position: 'absolute', zIndex: 100000, background: '#070722', width: '100%', height: 700 }}>
                        <motion.ul
                            initial={{ opacity: 0, x: 500 }}
                            exit={{ opacity: [1, 0], transition: { duration: .5 } }}
                            animate={{ opacity: [0, 1], x: [500, 0], transition: { duration: 1.6, type: 'spring' } }}
                            style={{ width: '100%', borderBottom: '.5px solid #a6a6a654', height: 50, display: 'flex', marginTop: 13, cursor: 'pointer' }} onClick={() => navigate('/mercury')}>
                            <div style={{ width: 25, backgroundColor: 'Gainsboro', height: 25, borderRadius: '50%', marginTop: 5, marginLeft: 15 }}></div>
                            <li style={{ color: 'white', listStyle: 'none', fontSize: 22, fontWeight: 500, textTransform: 'uppercase', fontFamily: 'Antonio', letterSpacing: 1.5, marginLeft: 30 }}>Mercury</li>
                        </motion.ul>
                        <motion.ul
                            initial={{ opacity: 0, x: 500 }}
                            exit={{ opacity: [1, 0], transition: { duration: .5 } }}
                            animate={{ opacity: [0, 1], x: [500, 0], transition: { duration: 1.9, type: 'spring' } }}
                            style={{ width: '100%', borderBottom: '.5px solid #a6a6a654', height: 50, display: 'flex', cursor: 'pointer' }} onClick={() => navigate('/venus')}>
                            <div style={{ width: 25, backgroundColor: 'Tan', height: 25, borderRadius: '50%', marginTop: 5, marginLeft: 15 }}></div>
                            <li style={{ color: 'white', listStyle: 'none', fontSize: 22, fontWeight: 500, textTransform: 'uppercase', fontFamily: 'Antonio', letterSpacing: 1.5, marginLeft: 30 }}>Venus</li>
                        </motion.ul>
                        <motion.ul
                            initial={{ opacity: 0, x: 500 }}
                            exit={{ opacity: [1, 0], transition: { duration: .5 } }}
                            animate={{ opacity: [0, 1], x: [500, 0], transition: { duration: 2.1, type: 'spring' } }}
                            style={{ width: '100%', borderBottom: '.5px solid #a6a6a654', height: 50, display: 'flex', cursor: 'pointer' }} onClick={() => navigate('/earth')}>
                            <div style={{ width: 25, backgroundColor: 'DodgerBlue', height: 25, borderRadius: '50%', marginTop: 5, marginLeft: 15 }}></div>
                            <li style={{ color: 'white', listStyle: 'none', fontSize: 22, fontWeight: 500, textTransform: 'uppercase', fontFamily: 'Antonio', letterSpacing: 1.5, marginLeft: 30 }}>Earth</li>
                        </motion.ul>
                        <motion.ul
                            initial={{ opacity: 0, x: 500 }}
                            exit={{ opacity: [1, 0], transition: { duration: .5 } }}
                            animate={{ opacity: [0, 1], x: [500, 0], transition: { duration: 2.3, type: 'spring' } }}
                            style={{ width: '100%', borderBottom: '.5px solid #a6a6a654', height: 50, display: 'flex', cursor: 'pointer' }} onClick={() => navigate('/mars')}>
                            <div style={{ width: 25, backgroundColor: 'Tomato', height: 25, borderRadius: '50%', marginTop: 5, marginLeft: 15 }}></div>
                            <li style={{ color: 'white', listStyle: 'none', fontSize: 22, fontWeight: 500, textTransform: 'uppercase', fontFamily: 'Antonio', letterSpacing: 1.5, marginLeft: 30 }}>Mars</li>
                        </motion.ul>
                        <motion.ul
                            initial={{ opacity: 0, x: 500 }}
                            exit={{ opacity: [1, 0], transition: { duration: .5 } }}
                            animate={{ opacity: [0, 1], x: [500, 0], transition: { duration: 2.5, type: 'spring' } }}
                            style={{ width: '100%', borderBottom: '.5px solid #a6a6a654', height: 50, display: 'flex', cursor: 'pointer' }} onClick={() => navigate('/jupiter')}>
                            <div style={{ width: 25, backgroundColor: 'Wheat', height: 25, borderRadius: '50%', marginTop: 5, marginLeft: 15 }}></div>
                            <li style={{ color: 'white', listStyle: 'none', fontSize: 22, fontWeight: 500, textTransform: 'uppercase', fontFamily: 'Antonio', letterSpacing: 1.5, marginLeft: 30 }}>Jupiter</li>
                        </motion.ul>
                        <motion.ul
                            initial={{ opacity: 0, x: 500 }}
                            exit={{ opacity: [1, 0], transition: { duration: .5 } }}
                            animate={{ opacity: [0, 1], x: [500, 0], transition: { duration: 2.6, type: 'spring' } }}
                            style={{ width: '100%', borderBottom: '.5px solid #a6a6a654', height: 50, display: 'flex', cursor: 'pointer' }} onClick={() => navigate('/saturn')}>
                            <div style={{ width: 25, backgroundColor: 'SandyBrown', height: 25, borderRadius: '50%', marginTop: 5, marginLeft: 15 }}></div>
                            <li style={{ color: 'white', listStyle: 'none', fontSize: 22, fontWeight: 500, textTransform: 'uppercase', fontFamily: 'Antonio', letterSpacing: 1.5, marginLeft: 30 }}>Saturn</li>
                        </motion.ul>
                        <motion.ul
                            initial={{ opacity: 0, x: 500 }}
                            exit={{ opacity: [1, 0], transition: { duration: .5 } }}
                            animate={{ opacity: [0, 1], x: [500, 0], transition: { duration: 2.7, type: 'spring' } }}
                            style={{ width: '100%', borderBottom: '.5px solid #a6a6a654', height: 50, display: 'flex', cursor: 'pointer' }} onClick={() => navigate('/uranus')}>
                            <div style={{ width: 25, backgroundColor: 'Aquamarine', height: 25, borderRadius: '50%', marginTop: 5, marginLeft: 15 }}></div>
                            <li style={{ color: 'white', listStyle: 'none', fontSize: 22, fontWeight: 500, textTransform: 'uppercase', fontFamily: 'Antonio', letterSpacing: 1.5, marginLeft: 30 }}>Uranus</li>
                        </motion.ul>
                        <motion.ul
                            initial={{ opacity: 0, x: 500 }}
                            exit={{ opacity: [1, 0], transition: { duration: .5 } }}
                            animate={{ opacity: [0, 1], x: [500, 0], transition: { duration: 2.7, type: 'spring' } }}
                            style={{ width: '100%', borderBottom: '.5px solid #a6a6a654', height: 50, display: 'flex', cursor: 'pointer' }} onClick={() => navigate('/neptune')}>
                            <div style={{ width: 25, backgroundColor: 'RoyalBlue', height: 25, borderRadius: '50%', marginTop: 5, marginLeft: 15 }}></div>
                            <li style={{ color: 'white', listStyle: 'none', fontSize: 22, fontWeight: 500, textTransform: 'uppercase', fontFamily: 'Antonio', letterSpacing: 1.5, marginLeft: 30 }}>Neptune</li>
                        </motion.ul>

                    </motion.div>
                </>
            }
        </>
    )
}

export default Header