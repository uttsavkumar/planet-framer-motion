import React, { useEffect, useState } from 'react'
import Header from '../HomePages/Header'
import earthinternal from '../PlanetsImages/earth-internal.svg'
import earth from '../PlanetsImages/earth.svg'
import earthgeology from '../PlanetsImages/earth-geology.png'
import '../App.css'
import { AnimatePresence, motion } from 'framer-motion'

const Earth = () => {


    const data = [
        {
            'id': 1,
            'img': earth,
            'title': 'Overview',
            'content': "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        },
        {
            'id': 2,
            'img': earthinternal,
            'title': 'Internal Structure',
            'content': "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",

        },
        {
            'id': 3,
            'img': earthgeology,
            'title': 'Surface Geology',
            'content': "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
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
                                src={contenttype.img} style={{ width:contenttype.id != 3 &&'350px' }} className= "img-fluid imageresponsive " alt="" />

                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: [50, 40, 30, 20, 10, 0], opacity: [0, .2, .4, .6, .8, 1], transition: { duration: 1, ease: 'linear', type: 'spring', bounce: 3 } }}
                                exit={{ x: [0, 10, 20, 30, 40, 50], opacity: [1, .8, .6, .4, .2, 0], transition: { duration: 1, ease: 'linear', type: 'spring', bounce: 3 } }}

                                style={{ marginTop: '15%', }}>
                                <h1 className='singleplanetname mb-4'>Earth</h1>
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
                                        animate={{ cursor: 'pointer', backgroundColor: contenttype.id === item.id ? '#6f2ed6' : 'transparent' }}
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
                            0.99 DAYS                            </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                revolution time
                            </div>
                            <div className='inforesult'>
                            365.26 DAYS                            </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                radius
                            </div>
                            <div className='inforesult'>
                            6,371 KM                            </div>
                        </div>
                        <div className="mt-4 planetinfo">
                            <div className='info'>
                                Average Temp.
                            </div>
                            <div className='inforesult'>

                            16°C
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default Earth