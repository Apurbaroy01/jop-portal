import { easeOut, motion } from "motion/react"
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Home = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        src={team1}
                        animate={{ y: [40, 80, 50] }}
                        transition={{ duration: 10, delay: 0, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-br-3xl rounded-tl-3xl border-l-4 border-r-4 border-blue-400 shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{ x: [40, 80, 0] }}
                        transition={{ duration: 10, delay: 0, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-br-3xl rounded-tl-3xl border-l-4 border-r-4 border-blue-400 shadow-2xl"
                    />
                </div>
                <div className="flex-1">
                    
                    <motion.h1
                        animate={{ x: [0,50,50], y: 20 }}
                        transition={{ duration: 1, delay: 0, ease: easeOut,  }}
                        className="text-5xl font-bold">Box Office News!</motion.h1>

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;