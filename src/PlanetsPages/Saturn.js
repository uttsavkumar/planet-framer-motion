import React, { useEffect, useState } from 'react'
import Header from '../HomePages/Header'
import saturninternal from '../PlanetsImages/saturn-internal.svg'
import saturn from '../PlanetsImages/saturn.svg'
import saturngeology from '../PlanetsImages/saturn-geology.png'
import '../App.css'
import { AnimatePresence, motion } from 'framer-motion'

const Saturn = () => {


    const data = [
        {
            'id': 1,
            'img': saturn,
            'title': 'Overview',
            'content': "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
        },
        {
            'id': 2,
            'img': saturninternal,
            'title': 'Internal Structure',
            'content': "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",

        },
        {
            'id': 3,
            'img': saturngeology,
            'title': 'Surface Geology',
            'content': "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
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
                                <h1 className='singleplanetname mb-4'>Saturn</h1>
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
                                        animate={{ cursor: 'pointer', backgroundColor: contenttype.id === item.id ? '#cb5020' : 'transparent' }}
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
                            10.8 HOURS                           </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                revolution time
                            </div>
                            <div className='inforesult'>
                            29.46 YEARS                     </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                radius
                            </div>
                            <div className='inforesult'>
                            58,232 KM                     </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                Average Temp.
                            </div>
                            <div className='inforesult'>


                            -138??C
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default Saturn