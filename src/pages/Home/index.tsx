import {useState} from 'react'
import styles from './style.module.css'
import rateLogo from "../../assets/rate-logo.svg"
import { FaUniversity } from "react-icons/fa"
import { BiSolidSchool } from "react-icons/bi"
import { IconContext } from "react-icons";
import DropDown from '../../components/DropDown'

const Home = () => {
    const [profInput, setProfInput] = useState("")
    return (
        <div style={{position: 'relative'}}>
            <header>
                <section className={styles.heroHeader}>
                    <div className={styles.ratingCover}>
                        <img src={rateLogo} alt='rate-logo' />
                    </div>
                    <h1>Please Select Your School</h1>
                    <div className={styles.pointerFlex}>
                        <div className={styles.container} >
                            <IconContext.Provider
                                value={{ color: 'white', size: '50px' }}
                            >
                                <FaUniversity />
                            </IconContext.Provider>
                            <p>FUNAAB</p>
                        </div>
                        <div className={styles.container} >
                            <IconContext.Provider
                                value={{ color: 'white', size: '50px' }}
                            >
                                <BiSolidSchool />
                            </IconContext.Provider>
                            <p>OTHERS</p>
                        </div>
                    </div>
                </section>
                
                <DropDown profInput={profInput} setProfInput={setProfInput} />
              
                
            </header>
            <div className={styles.newDropDown} id="style-1">
             <input placeholder='enter ' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus repellat unde tempora, voluptatibus ratione atque, beatae magnam neque fugit vero iste illum mollitia aliquid, delectus eum explicabo eveniet odit! Nesciunt aspernatur sequi impedit repudiandae rem repellendus, quam aperiam necessitatibus delectus ab eligendi dolor iure enim fugiat. Ipsum numquam explicabo veritatis mollitia, facilis beatae? Animi dolores quas explicabo veritatis iusto, cupiditate accusamus neque nulla laudantium magni beatae aperiam corporis obcaecati eius consectetur eveniet, harum, maiores minima! Omnis blanditiis fuga eius, laboriosam obcaecati reprehenderit error, necessitatibus aspernatur aliquam mollitia molestiae impedit quisquam quibusdam odio sit dolore ipsam ullam libero. Nisi ab sapiente quos eius mollitia laboriosam deleniti, qui deserunt perspiciatis optio, adipisci, debitis accusantium assumenda at voluptatibus sit omnis ullam sequi exercitationem quisquam error ut enim voluptatum? Impedit eius quibusdam maiores incidunt fugiat perferendis assumenda officiis facilis nostrum repellat expedita laborum nam ipsam, minus perspiciatis deserunt omnis, id molestias debitis minima voluptatum ducimus veritatis ut recusandae? Minus vero tenetur iusto nostrum odit, laudantium temporibus dolorem minima quasi delectus fugiat fugit a, praesentium nisi magni? Beatae delectus mollitia ea libero voluptatum vitae quidem esse soluta eius. Consequuntur eum fugit, magni eligendi blanditiis, in dolor libero voluptate ut architecto provident dolorem consectetur nesciunt odio corporis quam recusandae natus. Dolorum magni aliquid recusandae? Assumenda, accusantium quod qui unde ad laboriosam provident beatae aperiam aspernatur soluta, dicta, saepe similique consectetur delectus deserunt! Repudiandae deleniti totam dicta saepe eos impedit, quisquam alias minus commodi quod, veniam dolorem nesciunt fugiat, ducimus iusto perferendis vitae ut quaerat corrupti. In harum, eius ex quasi eligendi quo recusandae blanditiis veniam impedit natus! Delectus, facere odit officiis neque doloribus ea eligendi doloremque totam expedita nihil repellat accusamus animi inventore quas non quibusdam, eius ut et sunt fugiat quae! Ratione sequi consectetur a sint. A tenetur qui quibusdam alias tempora fugit voluptatibus inventore libero quasi praesentium placeat voluptate repellendus et natus facere, ad dolore provident minus odit vitae quae. Vitae aspernatur assumenda fuga, aut dicta facilis quidem ipsa, eius cum minima quam. Autem, corporis? Hic esse sint temporibus aut odio corporis vitae unde obcaecati, placeat odit libero itaque animi. Rerum iste saepe laboriosam nesciunt aliquam in! Tempore magnam culpa amet et. Non laudantium voluptas porro maiores possimus nostrum id, nisi facilis corporis quidem ipsa? Laboriosam obcaecati maxime commodi voluptatibus porro quibusdam, iste officia? Fuga aliquid, laudantium facere enim magnam beatae, corrupti libero rerum earum dolor soluta similique aut minima perspiciatis debitis suscipit cupiditate tenetur ducimus commodi ex. Excepturi sed aliquam ipsum voluptatem molestiae, rerum laudantium totam, dolore repellendus sequi aspernatur enim quis optio nihil molestias, neque officiis rem? Modi maiores eum exercitationem voluptatem iusto ipsa esse molestiae hic, corrupti provident, inventore nihil neque aliquid repellat doloremque amet perspiciatis ipsam enim placeat quia porro quis omnis at error. Vitae, officiis enim? Incidunt expedita quo labore minus doloribus ad accusantium perferendis quia laboriosam! Quam, asperiores sit est corporis magni totam, sed quia placeat deserunt cum aliquid ipsa accusamus nesciunt rem architecto laborum quibusdam id quaerat reiciendis veniam nemo, explicabo autem! Vel debitis eveniet eum.</p>
            </div>
       
        </div>
    )
}

export default Home;