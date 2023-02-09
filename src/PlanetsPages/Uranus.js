import React, { useEffect, useState } from 'react'
import Header from '../HomePages/Header'
import uranusinternal from '../PlanetsImages/uranus-internal.svg'
import uranus from '../PlanetsImages/uranus.svg'
import uranusgeology from '../PlanetsImages/uranus-geology.png'
import '../App.css'
import { AnimatePresence, motion } from 'framer-motion'

const Uranus = () => {


    const data = [
        {
            'id': 1,
            'img': uranus,
            'title': 'Overview',
            'content': "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        },
        {
            'id': 2,
            'img': uranusinternal,
            'title': 'Internal Structure',
            'content': "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",

        },
        {
            'id': 3,
            'img': uranusgeology,
            'title': 'Surface Geology',
            'content': "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
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
                                <h1 className='singleplanetname mb-4'>Uranus</h1>
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
                                        animate={{ cursor: 'pointer', backgroundColor: contenttype.id === item.id ? '#1ec2a4' : 'transparent' }}
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
                                17.2 HOURS                         </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                revolution time
                            </div>
                            <div className='inforesult'>
                                84 YEARS                 </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                radius
                            </div>
                            <div className='inforesult'>
                                25,362 KM                    </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                Average Temp.
                            </div>
                            <div className='inforesult'>


                                -195°C
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default Uranus