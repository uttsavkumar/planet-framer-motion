import React, { useState } from 'react'
import sun from '../PlanetsImages/sun.png'
import mercury from '../PlanetsImages/mercury.svg'
import neptune from '../PlanetsImages/neptune.svg'
import uranus from '../PlanetsImages/uranus.svg'
import saturn from '../PlanetsImages/saturn.svg'
import jupiter from '../PlanetsImages/jupiter.svg'
import mars from '../PlanetsImages/mars.svg'
import earth from '../PlanetsImages/earth.svg'
import venus from '../PlanetsImages/venus.svg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'



const Planets = () => {

  const [nephover, setNepHover] = useState(false)
  const [urahover, setUraHover] = useState(false)
  const [sathover, setSatHover] = useState(false)
  const [juphover, setJupHover] = useState(false)
  const [marshover, setMarsHover] = useState(false)
  const [earthhover, setEarthHover] = useState(false)
  const [venushover, setVenusHover] = useState(false)
  const [merhover, setMerHover] = useState(false)


  const animate = {
    rotate: 360
  }

  const navigate = useNavigate()
  return (
    <>
      <motion.div
        initial={{ opacity: 0, zoom: 1.9, x: -160, y: -80 }}
        animate={{ zoom: [1.9, 1], x: [-160, 0], y: [-80, 60], opacity: [0, 0.1, .2, .25, .28, .3, .35, .6, .8, 1], transition: { duration: 2.2, ease: 'linear', delay: 1 } }}
        className="container-fluid  p-0" style={{ position: 'absolute',top:20}}>
        {/* sun */}

        <div className='main-planet-div'>

          <motion.div
            filter="url(#scaleneptune)"
            onMouseEnter={() => setNepHover(true)}
            onMouseLeave={() => setNepHover(false)}
            animate={animate}
            exit={{ rotate: 126, transition: { duration: 1 }, opacity: [1, 0] }}
            whileHover={{ border: 1, borderColor: 'RoyalBlue', transition: { delay: .02, ease: 'easeInOut' } }}
            transition={{ repeat: Infinity, repeatDelay: 0, duration: 200, ease: 'linear' }}
            className="neptune-div" onClick={() => navigate("neptune")}>

            <motion.img id='scaleneptune'
              initial={false}
              animate={{ scale: nephover ? 2 : 1, transition: { type: 'spring', duration: 1 } }}
              src={neptune} className="neptune-image" alt="" />


          </motion.div>


          <motion.div
            initial={{ rotate: 200 }}
            animate={animate}
            filter="url(#scaleuranus)"
            onMouseEnter={() => setUraHover(true)}
            onMouseLeave={() => setUraHover(false)}
            exit={{ rotate: 280, transition: { duration: 1 }, opacity: [1, 0] }}
            whileHover={{ border: 1, borderColor: 'Aquamarine', transition: { delay: .02, ease: 'easeInOut' } }}
            transition={{ repeat: Infinity, repeatDelay: 0, duration: 150, ease: 'linear' }}

            className="uranus-div" onClick={() => navigate("uranus")}>
            <motion.img
              id='scaleuranus'
              initial={false}
              animate={{ scale: urahover ? 2 : 1, transition: { type: 'spring', duration: 1 } }}
              src={uranus} className="uranus-image" alt="" />

          </motion.div>


          <motion.div
            initial={{ rotate: 100 }}
            animate={animate}
            transition={{ repeat: Infinity, repeatDelay: 0, duration: 120, ease: 'linear' }}
            filter="url(#scalesaturn)"
            onMouseEnter={() => setSatHover(true)}
            onMouseLeave={() => setSatHover(false)}
            exit={{ rotate: 3, transition: { duration: 1 }, opacity: [1, 0] }}

            whileHover={{ border: 1, borderColor: 'SandyBrown', transition: { delay: .02, ease: 'easeInOut' } }}

            className="saturn-div " onClick={() => navigate("saturn")}>
            <motion.img
              id='scalesaturn'
              initial={false}
              animate={{ scale: sathover ? 1.5 : 1, transition: { type: 'spring', duration: 1 } }}
              src={saturn} className="saturn-image" alt="" />

          </motion.div>


          <motion.div
            initial={{ rotate: 250 }}
            animate={animate}
            transition={{ repeat: Infinity, repeatDelay: 0, duration: 100, ease: 'linear' }}
            filter="url(#scalejupiter)"
            onMouseEnter={() => setJupHover(true)}
            onMouseLeave={() => setJupHover(false)}
            exit={{ rotate: 190, transition: { duration: 1 }, opacity: [1, 0] }}

            whileHover={{ border: 1, borderColor: 'Wheat', transition: { delay: .02, ease: 'easeInOut' } }}
            className="jupiter-div" onClick={() => navigate("jupiter")}>
            <motion.img
              id='scalejupiter'
              initial={false}
              animate={{ scale: juphover ? 1.5 : 1, transition: { type: 'spring', duration: 1 } }}
              src={jupiter} className="jupiter-image" alt="" />

          </motion.div>


          <motion.div
            animate={animate}
            transition={{ repeat: Infinity, repeatDelay: 0, duration: 56, ease: 'linear' }}
            filter="url(#scalemars)"
            onMouseEnter={() => setMarsHover(true)}
            onMouseLeave={() => setMarsHover(false)}
            exit={{ rotate: 256, transition: { duration: 1 }, opacity: [1, 0] }}

            whileHover={{ border: 1, borderColor: 'Tomato', transition: { delay: .02, ease: 'easeInOut' } }}

            className="mars-div" onClick={() => navigate('mars')}>
            <motion.img
              id='scalemars'
              initial={false}
              animate={{ scale: marshover ? 2 : 1, transition: { type: 'spring', duration: 1 } }}
              src={mars} className="mars-image" alt="" />

          </motion.div>


          <motion.div
            animate={animate}
            transition={{ repeat: Infinity, repeatDelay: 0, duration: 30, ease: 'linear' }}
            filter="url(#scaleearth)"
            onMouseEnter={() => setEarthHover(true)}
            onMouseLeave={() => setEarthHover(false)}
            exit={{ rotate: 151, transition: { duration: 1 }, opacity: [1, 0] }}

            whileHover={{ border: 1, borderColor: 'DodgerBlue', transition: { delay: .02, ease: 'easeInOut' } }}
            className="earth-div" onClick={() => navigate('earth')}>
            <motion.img
              id='scaleearth'
              initial={false}
              animate={{ scale: earthhover ? 1.7 : 1, transition: { type: 'spring', duration: 1 } }}
              src={earth} className="earth-image" alt="" />
          </motion.div>


          <motion.div
            animate={animate}
            transition={{ repeat: Infinity, repeatDelay: 0, duration: 15, ease: 'linear' }}
            filter="url(#scalevenus)"
            onMouseEnter={() => setVenusHover(true)}
            onMouseLeave={() => setVenusHover(false)}
            exit={{ rotate: 20, transition: { duration: 1 }, opacity: [1, 0] }}

            whileHover={{ border: 111, borderColor: 'Tan', transition: { delay: .02, ease: 'easeInOut' } }}
            className="venus-div" onClick={() => navigate('venus')}>
            <motion.img
              id='scalevenus'
              initial={false}
              animate={{ scale: venushover ? 1.7 : 1, transition: { type: 'spring', duration: 1 } }}
              src={venus} className="venus-image" alt="" />

          </motion.div>


          <motion.div
            animate={{ rotate: 360, borderColor: merhover ? 'Gainsboro' : null }}
            filter="url(#scalemer)"
            onMouseEnter={() => setMerHover(true)}
            onMouseLeave={() => setMerHover(false)}
            exit={{ rotate: 156, transition: { duration: 1 }, opacity: [1, 0] }}

            transition={{ repeat: Infinity, repeatDelay: 0, duration: 8, ease: 'linear' }}
            className="mercury-div" onClick={() => navigate('mercury')}>
            <motion.img
              id='scalemer'
              initial={false}
              animate={{ scale: merhover ? 2.5 : 1, transition: { type: 'spring', duration: 1 } }}
              src={mercury} className="mercury-image" alt="" />
          </motion.div>


          <motion.div filter="url(#scalemer)"
            onMouseEnter={() => setMerHover(true)}
            onMouseLeave={() => setMerHover(false)}
            exit={{ transition: { duration: 1 }, opacity: [1, 0] }}
            whileHover={{ border: 1, borderColor: 'Gainsboro', transition: { delay: .02, ease: 'easeInOut' } }}
            className="sun-div" onClick={() => navigate('mercury')}>
            <img src={sun} className="sun-image" />
          </motion.div>


          <motion.div
            exit={{ transition: { duration: 1 }, opacity: [1, 0] }}
            animate={{ rotate: 360, transition: { duration: 100, repeat: Infinity, repeatDelay: 0, ease: 'linear' } }}
            className="saturn-div-stars"></motion.div>
        </div>


      </motion.div>
    </>
  )
}

export default Planets