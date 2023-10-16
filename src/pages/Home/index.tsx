import React from 'react'
import styles from './style.module.css'
import rateLogo from "../../assets/rate-logo.svg"
import { FaUniversity } from "react-icons/fa"
import { BiSolidSchool } from "react-icons/bi"
import { IconContext } from "react-icons";
import DropDown from '../../components/DropDown'

const Home = () => {
    return (
        <div>
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
                
                <DropDown />
              
             
            </header>
          <div
          style={{
            width: '50px',
            height: "50px",
            border: "1px solid red",
            overflow: "auto"

          }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, sed molestiae impedit vero ad dignissimos fuga soluta quasi suscipit velit odio at enim, dolore ullam assumenda expedita accusamus illum nemo blanditiis veniam consequatur id laboriosam? Cupiditate ducimus nemo id possimus pariatur aspernatur mollitia dolorum minus exercitationem explicabo! Dignissimos, repellat ipsum quos maxime fugiat eum minus neque nam tempora et molestias, aperiam quibusdam sit. Fuga obcaecati nostrum ullam iusto placeat magnam quia totam molestias saepe hic enim exercitationem, commodi incidunt consequuntur a porro fugit, unde natus doloremque expedita voluptatum nemo officiis recusandae. Eos ex ullam sit similique commodi ducimus voluptas, laudantium cum est dignissimos repudiandae ut a assumenda culpa? Ex corrupti nesciunt rem modi odio inventore sit! Sed aperiam minus rem ducimus laborum necessitatibus provident maiores, cupiditate aliquid quos quis saepe, magnam quidem possimus numquam voluptates quam esse nesciunt optio officia praesentium totam? Commodi autem, eaque cupiditate quaerat molestias optio, laboriosam consequatur, architecto iusto inventore illo officia hic ullam impedit pariatur nemo maiores. Modi molestiae harum doloremque rem sapiente alias, id ut fugit itaque consequuntur corrupti esse, quia reprehenderit aliquid possimus quo pariatur placeat. Praesentium quidem voluptate nostrum fuga? Odio, quod excepturi repellendus consequatur rerum eius, ipsam mollitia necessitatibus incidunt quidem iure molestias. Repudiandae eaque quisquam voluptates earum sunt dolores modi id, voluptate laboriosam ad ullam deserunt perspiciatis esse natus ipsa quam aperiam cum harum ex totam! Sequi accusamus consequuntur quisquam perspiciatis accusantium veritatis? Illo aspernatur quae cupiditate autem, repudiandae nam alias debitis earum vero commodi voluptates, voluptatibus accusantium culpa nobis magni quos. Perspiciatis quia reiciendis pariatur in. Ab ad aliquid animi. Praesentium corporis qui culpa nulla consectetur explicabo voluptas, officiis eum fugiat provident eligendi saepe ullam, doloribus sit repellat recusandae nostrum eaque earum deleniti, tenetur cumque doloremque illo enim. Rerum necessitatibus totam quibusdam maiores accusamus perspiciatis. Sapiente quisquam eaque exercitationem quibusdam minus saepe nulla earum error quaerat hic! Quasi impedit nulla laudantium quidem minima iure corrupti maiores molestiae eos quos consectetur nemo fugiat, doloribus dolorum, harum alias cupiditate. Dolore quis, quae aspernatur corrupti quos saepe debitis vitae, perferendis pariatur repellendus hic praesentium nihil veniam, blanditiis illum culpa voluptas eos provident quas! Impedit esse aut corrupti quia assumenda quisquam ex ea obcaecati dicta dolor corporis necessitatibus quaerat amet laudantium magnam asperiores, autem deserunt voluptatum voluptatem explicabo nostrum numquam voluptas. Voluptatem blanditiis asperiores labore beatae? Molestiae natus excepturi ea tenetur fugit autem? Cum, laudantium! Incidunt, praesentium. Necessitatibus quaerat voluptatum sed veritatis vero aut, id natus quos nemo excepturi ratione a quod explicabo est qui error nam non placeat. Nobis veritatis architecto, nulla velit aut saepe dolorem odio accusantium ad sunt atque, dicta non enim reprehenderit dolore? Modi aperiam natus veritatis alias quas ratione suscipit, maiores placeat voluptatibus animi obcaecati iste eveniet, quos incidunt nam autem aliquid repudiandae, neque itaque ipsum voluptates quis minus. Consectetur sequi obcaecati libero eum maiores atque. Cupiditate impedit, exercitationem modi odit asperiores excepturi quidem voluptatum aut nemo ipsam officia fugiat reiciendis atque commodi tempora, id rem repellendus officiis rerum repudiandae molestiae numquam quo! Consequatur nihil maiores explicabo quaerat excepturi totam aperiam voluptates maxime recusandae eum error eligendi magnam libero amet dolorem, sapiente perspiciatis odit beatae nam quos, atque neque voluptas. Obcaecati deserunt alias illo nobis voluptas dignissimos cum iure corporis! Vitae corporis in beatae mollitia enim odit perspiciatis magnam totam. Eius corporis fugiat magnam sunt praesentium, enim voluptas vero, nulla autem sit officiis distinctio facilis quidem incidunt animi vel assumenda aliquid porro voluptatibus quod omnis aspernatur illo? Ipsam incidunt asperiores amet et magnam numquam quae ducimus, nesciunt aut eveniet, in omnis repellat debitis. Rerum deleniti modi, nulla mollitia quia obcaecati. In nesciunt ab doloremque sunt, id odio amet porro tenetur enim libero? Eius, et sit. Magni accusamus aliquid soluta pariatur quaerat maxime eos voluptatum itaque nesciunt libero quas a in delectus voluptas, ducimus dolorem voluptate aliquam esse placeat nulla commodi praesentium dolores nihil. Soluta quaerat quia consectetur culpa. Magnam, amet dignissimos quas laudantium quia eveniet molestias dolor culpa deleniti accusamus suscipit facilis, quo dicta tenetur ad consequatur cum quos architecto velit distinctio corrupti ex ratione nobis dolorem! Esse, repellendus. Eos vero voluptates quisquam voluptatibus repudiandae a temporibus enim! Aliquid veritatis necessitatibus reiciendis earum. Ipsum voluptates soluta, vero quisquam labore atque error illo ab deserunt exercitationem repellendus necessitatibus velit ut officiis voluptatum in. Dignissimos, maiores voluptatibus sunt libero molestias eligendi optio praesentium illum labore expedita odit voluptas eum iste quis officia iure voluptate culpa quae! Accusantium rem repellendus corporis quasi eum minima dolore, velit laborum? Accusamus nobis, iusto officia voluptatem nemo voluptatibus, ex unde a eaque tempora optio aperiam sed voluptates. Incidunt quo architecto velit officia voluptatem, labore unde rerum iste blanditiis illo facere, itaque, optio aliquam ad delectus corporis quaerat eos soluta quis voluptas possimus fugit natus consequuntur. Deleniti minima ipsa impedit reiciendis aut mollitia provident nostrum vitae assumenda a ipsam perspiciatis quod incidunt saepe harum suscipit sequi eius voluptatem aliquam vero dicta, rem labore voluptas sint! Eaque eligendi perferendis quis minus velit atque assumenda, architecto neque. Minima aspernatur tenetur cupiditate temporibus ullam. Dolor id, a repellat rem ducimus modi. Beatae perferendis animi in itaque! Nostrum, vero possimus nam optio eaque animi amet tempore iure quae perspiciatis ab? Similique quia veniam ipsa eos tempore. Voluptatum, fugiat quis asperiores esse nam, officiis delectus perspiciatis excepturi, dolor quo perferendis. Quae quam iste aliquid odio provident nihil alias asperiores quidem debitis explicabo! Eligendi pariatur nihil sequi vitae ratione. Impedit numquam nam mollitia recusandae voluptatibus officia, rerum maiores hic dolorum qui quia labore dignissimos dolores facilis? Fugiat eligendi nisi facilis asperiores autem! Ex nihil asperiores reprehenderit, corporis voluptate pariatur necessitatibus debitis laudantium perferendis, ab illum. Facere totam deleniti molestiae tenetur architecto hic obcaecati officia, a provident ex, cupiditate similique adipisci reprehenderit debitis dolores deserunt numquam. Dicta, perferendis labore! Labore doloribus maiores tempora, ipsum odit sunt numquam dicta quam quibusdam iste nisi qui assumenda suscipit consequatur voluptate dolores quo accusamus, amet temporibus nulla ex beatae repudiandae! Voluptas voluptates blanditiis ipsum fugiat ullam deserunt facere tempore quos quas! Doloribus quis impedit architecto minima ad quo, eligendi repudiandae libero mollitia, dolor incidunt quia culpa odit!
          </div>
        </div>
    )
}

export default Home;