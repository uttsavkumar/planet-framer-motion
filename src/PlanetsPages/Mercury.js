import React, { useEffect, useState } from 'react'
import Header from '../HomePages/Header'
import mercuryinternal from '../PlanetsImages/mercury-internal.svg'
import mercury from '../PlanetsImages/mercury.svg'
import mercurygeology from '../PlanetsImages/mercury-geology.png'
import saturn from '../PlanetsImages/saturn.svg'
import '../App.css'
import { AnimatePresence, motion } from 'framer-motion'

const Mercury = () => {


    const data = [
        {
            'id': 1,
            'img': mercury,
            'title': 'Overview',
            'content': "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        },
        {
            'id': 2,
            'img': mercuryinternal,
            'title': 'Internal Structure',
            'content': "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",

        },
        {
            'id': 3,
            'img': mercurygeology,
            'title': 'Surface Geology',
            'content': "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
        }
    ]

    const [contenttype, setContentType] = useState(data[0])

    const handleComponent = (item) => {
        setContentType(item)
    }
    const variant = {
        initial: { x: 300, y: 90, scale: 0, rotate: 200, opacity: 0 },
        animate: { x: [300, 200, 100, 0], y: [90, 50, 20, 0], opacity: [0, .2, .4, .6, .8, 1], scale: [0, .2, .4, .6, .8, 1], rotate: [200, 150, 100, 50, 0], transition: { duration: 1, ease: 'linear', type: 'spring', bounce: 3 } },
        exit: { x: [0, -100, -200, -300], y: [0, 20, 50, 90], opacity: [1, .8, .6, .4, .2, 0], scale: [1, .8, .6, .4, .2, 0], rotate: [0, 50, 100, 150, 200], transition: { duration: 1, ease: 'linear', type: 'spring', bounce: 3 } }
    }

    return (
        <>
            <div className="container-fluid p-0 backgroundheight" style={{ height: '180vh', backgroundColor: "hsl(240,67%,8%)" }}>
                <div className="star1">
                </div>
                <Header />
                <div className="container">
                    <div className="row" >

                        <div className="col-xl-7 col-lg-6">

                            <motion.img
                                key={contenttype.id}
                                variants={variant}
                                initial="initial"
                                animate={"animate"}
                                exit="exit"
                                src={contenttype.img} className={contenttype.id != 3 ? "img-fluid imageresponsive" : "img-fluid thirdimageresponsive"} alt="" />

                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: [50, 40, 30, 20, 10, 0], opacity: [0, .2, .4, .6, .8, 1], transition: { duration: 1, ease: 'linear', type: 'spring', bounce: 3 } }}
                                exit={{ x: [0, 10, 20, 30, 40, 50], opacity: [1, .8, .6, .4, .2, 0], transition: { duration: 1, ease: 'linear', type: 'spring', bounce: 3 } }}

                                style={{ marginTop: '15%', }}>
                                <h1 className='singleplanetname mb-4'>Mercury</h1>
                                <motion.span
                                    key={contenttype.id}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: [50, 40, 30, 20, 10, 0], opacity: [0, .2, .4, .6, .8, 1], transition: { duration: 1, ease: 'linear', type: 'spring', bounce: 3 } }}
                                    exit={{ x: [0, 10, 20, 30, 40, 50], opacity: [1, .8, .6, .4, .2, 0], transition: { duration: 1, ease: 'linear', type: 'spring', bounce: 3 } }}
                                    className='singleplanetdesc'>
                                    {contenttype.content}
                                </motion.span><br />
                                <div className='source mb-5'>
                                    Source: <a rel="noreferrer" href="https://en.wikipedia.org/wiki/Mercury_(planet)" target="_blank" className='wiki'>Wikipedia</a>
                                </div>


                                {data.map((item, key) => (
                                    <motion.div
                                        onClick={() => handleComponent(item)}
                                        whileHover={{ backgroundColor: contenttype.title === item.title ? '#343440' : "#6d6d80" }}
                                        animate={{ cursor: 'pointer', backgroundColor: contenttype.id === item.id ? '#419db9' : 'transparent' }}
                                        key={item.id}
                                        className='contentselectdiv d-flex col-12 mt-4'>
                                        <span className='contentorder'>0{item.id}</span>
                                        <span className='contenttitle'>{item.title}</span>
                                    </motion.div>
                                ))}

                            </motion.div>
                        </div>

                    </div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: [50, 40, 30, 20, 10, 0], opacity: [0, .2, .4, .6, .8, 1], transition: { duration: 1, ease: 'linear', type: 'spring', bounce: 3 } }}
                        exit={{ y: [0, 10, 20, 30, 40, 50], opacity: [1, .8, .6, .4, .2, 0], transition: { duration: 1, ease: 'linear', type: 'spring', bounce: 3 } }}

                        className="row " style={{ marginTop: 60 }}>
                        <div className=" mt-4 planetinfo">
                            <div className='info'>
                                Rotation Time
                            </div>
                            <div className='inforesult'>
                                58 Days
                            </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                revolution time
                            </div>
                            <div className='inforesult'>
                                87.97 Days
                            </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                radius
                            </div>
                            <div className='inforesult'>
                                2,439.7 km
                            </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                Average Temp.
                            </div>
                            <div className='inforesult'>

                                430°C
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default Mercury