import React, { useEffect, useState } from 'react'
import Header from '../HomePages/Header'
import jupiterinternal from '../PlanetsImages/jupiter-internal.svg'
import jupiter from '../PlanetsImages/jupiter.svg'
import jupitergeology from '../PlanetsImages/jupiter-geology.png'
import '../App.css'
import { AnimatePresence, motion } from 'framer-motion'

const Jupiter = () => {


    const data = [
        {
            'id': 1,
            'img': jupiter,
            'title': 'Overview',
            'content': "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
        },
        {
            'id': 2,
            'img': jupiterinternal,
            'title': 'Internal Structure',
            'content': "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",

        },
        {
            'id': 3,
            'img': jupitergeology,
            'title': 'Surface Geology',
            'content': "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
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
                                src={contenttype.img} style={{ width: contenttype.id != 3 && '350px' }} className="img-fluid imageresponsive " alt="" />

                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: [50, 40, 30, 20, 10, 0], opacity: [0, .2, .4, .6, .8, 1], transition: { duration: 1, ease: 'linear', type: 'spring', bounce: 3 } }}
                                exit={{ x: [0, 10, 20, 30, 40, 50], opacity: [1, .8, .6, .4, .2, 0], transition: { duration: 1, ease: 'linear', type: 'spring', bounce: 3 } }}

                                style={{ marginTop: '15%', }}>
                                <h1 className='singleplanetname mb-4'>Jupiter</h1>
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
                                        animate={{ cursor: 'pointer', backgroundColor: contenttype.id === item.id ? '#d93b36' : 'transparent' }}
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
                                9.93 HOURS                            </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                revolution time
                            </div>
                            <div className='inforesult'>
                                11.86 YEARS                         </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                radius
                            </div>
                            <div className='inforesult'>
                                69,911 KM                           </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                Average Temp.
                            </div>
                            <div className='inforesult'>


                                -108°C
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default Jupiter