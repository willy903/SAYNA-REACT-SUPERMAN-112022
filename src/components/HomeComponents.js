import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/BodyHome.css';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png';
import img7 from '../assets/images/img7.png';
import img8 from '../assets/images/img8.png';
import img9 from '../assets/images/img9.png';
import img10 from '../assets/images/img10.png';
import img12 from '../assets/images/img12.png';
import img15 from '../assets/images/img15.png';
import rond from '../assets/images/rond.png';
import flech1 from '../assets/logos/icon_flèche_1.png';
import fleche2 from '../assets/logos/icon_flèche_2.png';
import iconPlayer from '../assets/logos/icon_player.png';
import supplogo from '../assets/logos/logoDC.png';

export const HomeComponents = () => {
    return (
        <>
            <div className='appliquebg'>

                <div className="container_a bg_add d-flex flex-row">
                    <div className=''>
                        <img src={supplogo} alt="" width={250} />
                    </div>
                    <div className='ps-3'>
                        <p className="container_paragraphe ">
                            SUPERMAN
                        </p>
                        <h2 className="">LHOMME D ACIER</h2>
                    </div>
                </div>
                <div className='home'>
                    <div className="container_a">
                        <div className="box">
                            <div className="box_paragraphe" id="batcine">
                                <h1>SUPERMAN AU CINEMA</h1>
                                <p>
                                    Dans la version actuelle de son histoire, Superman est né sur la planète Krypton sous le nom de « Kal-El ». Encore bébé, il fut placé dans un
                                    vaisseau spatial par son père, le scientifique Jor-El, et sa mère, Lara, car la planète était sous la menace d'une destruction totale.Le vaisseau quitta
                                    Krypton juste avant l'explosion fatidique... Au terme d'un très long voyage, il atterrit sur la planète Terre. Kal-El est trouvé par un couple de
                                    fermiers de Smallville, (Kansas). Jonathan et Martha Kent, qui n'ont pas d'enfant, décident alors de l'adopter et de garder le secret sur son origine.

                                    Kal-El est rebaptisé « Clark Joseph Kent » et grandit entouré de ses amis Lana Lang (son premier amour) et Pete Ross jusqu'à ce que ses pouvoirs
                                    se révèlent à lui au moment de son adolescence.Jeune adulte, Clark décide de s'installer à Metropolis pour devenir journaliste. Il y est engagé par
                                    Perry White, le rédacteur en chef du Daily Planet. Pour sauver les personnes qui lui sont chers ainsi que les habitants de la Terre, Clark revêt son
                                    costume et devient Superman, l’homme d’acier aux yeux du monde.
                                </p>
                            </div>
                            <div className="box_card">
                                <div className="card-item">
                                    <div className="item">
                                        <img src={img2} alt="" width="100%" height="auto" />
                                        <div className="item_actor">
                                            <div className="acteur">
                                                <img src={rond} alt="" width="40px" height="auto" />
                                                <h6>Robert Pattinson (2022)</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-item">
                                    <div className="item" style={{ 'width': '300px' }}>
                                        <img src={img3} alt="" width="100%" height="auto" />
                                        <div className="item_actor">
                                            <div className="acteur">
                                                <div className="acteur">
                                                    <img src={rond} alt="" width="40px" height="auto" />

                                                    <h6>Christian Bale (2006 2008 2012)</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-item">
                                    <div className="item">
                                        <img src={img4} alt="" width="100%" height="auto" />
                                        <div className="item_actor">
                                            <div className="acteur">
                                                <img src={rond} alt="" width="100%" height="auto" />
                                                <h6>Ben Affleck 20016- 2017/2020 2023</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="box" id="nemesis">
                            <div className="box_paragraphe">
                                <h1>NÉMÉSIS</h1>
                                <p>
                                    Superman mène une lutte sans fin contre de nombreux adversaires, son adversaire le plus connu étant le milliardaire Lex Luthor,
                                    fils de Lionel Luthor, qui déteste tout ce qu'incarne Superman et finira notamment par devenir président des États-Unis, ce qui
                                    participera à faire de lui le pire ennemi de Clark. Doomsday, une abomination génétique qui souhaite tout détruire sur son
                                    passage, sera celui qui réussira à tuer Superman. Zod est un kryptonien qui fut condamné à l'emprisonnement dans la Zone
                                    Fantôme pour s'être insurgé contre les autorités. Il est libéré et vient sur Terre pour la conquérir mais est arrêté par Superman.
                                    Étant kryptonien, Zod possède les mêmes pouvoirs que Superman, et constitue donc l'un de ses plus dangereux adversaires.
                                </p>
                            </div>
                            <div className="box_card caherOUI">
                                <div className="card-item">
                                    <div className="item">
                                        <img src={img5} alt="" width="100%" height="auto" />
                                        <div className="item_actor">
                                            <div className="acteur">
                                                <img src={rond} alt="" width="40px" height="auto" />
                                                <h6>The Riddler Paul Dano(2022)</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-item">
                                    <div className="item">
                                        <img src={img6} alt="" width="100%" height="auto" />
                                        <div className="item_actor">
                                            <div className="acteur">
                                                <div className="acteur">
                                                    <img src={rond} alt="" width="40px" height="auto" />

                                                    <h6>Le Joker Heath Ledger(2008)</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-item">
                                    <div className="item">
                                        <img src={img7} alt="" width="100%" height="auto" />
                                        <div className="item_actor">
                                            <div className="acteur">
                                                <img src={rond} alt="" width="100%" height="auto" />
                                                <h6>Darkseid Ray Porter(2022)</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box_paragraphe">
                                <h1>ALLIES</h1>
                                <p>
                                    Jor-El était le père biologique de Kal-El, ainsi que le savant le plus célèbre de Krypton et un membre influent du Conseil des
                                    Sciences. Lorsque Krypton s’effondre il place une version impuissante de lui même dans le vaisseau emportant Kal-El vers la
                                    Terre afin de lui apporter les réponses à ses questions quand il grandira. Sur Terre Clark est pris en charge par Jonathan et
                                    Martha Kent qui l’élèvent comme leur propre fils. Lorsque John sera mort, Clark pourra compter sur le soutien indéféctible de sa
                                    mère. Une fois engagé au Daily Planet, il rencontrera Loïs Lane qui deviendra sa partenaire et son seul “véritable amour”
                                </p>
                            </div>
                            <div className="box_card caherOUI">
                                <div className="card-item">
                                    <div className="item">
                                        <img src={img8} alt="" width="100%" height="auto" />
                                        <div className="item_actor">
                                            <div className="acteur">
                                                <img src={rond} alt="" width="40px" height="auto" />
                                                <h6>Alfred Pennyworth Michael Cain(2006 2008 2012)</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-item">
                                    <div className="item">
                                        <img src={img9} alt="" width="100%" height="auto" />
                                        <div className="item_actor">
                                            <div className="acteur">
                                                <div className="acteur">
                                                    <img src={rond} alt="" width="40px" height="auto" />

                                                    <h6>Catwoman Zoé Kravitz(2008)</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-item">
                                    <div className="item">
                                        <img src={img10} alt="" width="100%" height="auto" />
                                        <div className="item_actor">
                                            <div className="acteur">
                                                <img src={rond} alt="" width="100%" height="auto" />
                                                <h6>James Gordon(2014 2019)</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-g w-100 px-5'>
                    <div className="box">
                        <div className="box_paragraphe">
                            <h1>BATMAN V SUPERMAN</h1>
                            <p>
                                Le monde n’est pas assez grand pour deux super héros. Alors que Superman se battait contre Zod, l’affrontement fait des dégats
                                et détruit partiellement la ville de Métropolis. Bruce Wayne alors présent dans la ville assiste, impuissant, à l’effondrement de la
                                ville qui fait beaucoup de victimes. Wayne est alors persuadé que Superman causera un jour la perte de l'Humanité et qu'il est
                                inévitable de se préparer à l'éliminer. Devenu méfiant il se demande si l'homme de fer, cet extraterrestre de Krypton, qui peut à lui
                                seul détruire le monde d'une simple pichenette, décidera un jour de ne plus défendre la Terre, voire même de causer sa perte.
                            </p>
                            <p>
                                De son côté Superman d’une part cherche à se défendre mais retourne l’offensive contre Batman. Ce dernier n'est plus que
                                l'ombre de lui-même. Devenu un justicier impitoyable, mégalomane et cruel à la suite du meurtre de son ancien partenaire Robin
                                par le Joker, il n'hésite plus à violer son code moral en éliminant et marquant au fer les criminels. Superman souhaite simplement
                                lui rappeler le code moral des “justicier” en usant de la force s’il le faut pour que Batman cesse son comportement abusif.
                            </p>
                        </div>
                    </div>
                    <div className="Mutli">
                        <h1 className="txt_presentation">MULTIMÉDIA</h1>
                        <div className="cart_faddin">
                            <div className="controle">
                                <img src={flech1} alt="" />
                            </div>
                            <div className="controle">
                                <div className="cart1">
                                    <img src={img12} alt="" />
                                    <div className="article">
                                        <h1>Action, Adventure</h1>
                                        <h2>Superman Man of Steel</h2>
                                        <h3>IMDB: <span>8.2</span></h3>
                                        <p>
                                            Clark Kent, malgré son apparence humaine normale, est l'un
                                            des derniers membres d'une race éteinte. Il se retrouve forcé
                                            de révéler son identité lorsque la Terre est envahie par une
                                            armée de survivants qui menacent détruire la planète.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="controle">
                                <img src={fleche2} alt="" />
                            </div>
                        </div>
                        <div className="bande_annonce">
                            <img src={img15} alt="" width="100%" height="auto" />
                            <img src={iconPlayer} alt="" width="100%" height="auto" className="iconPlayer" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact">
                <div className="contact-bloc">
                    <form action="">
                        <h1>PRENONS CONTACT</h1>
                        <label htmlFor="mail" className="label1">ADDRESSE EMAIL</label>
                        <input type="text" id="mail" placeholder="Addresse email" />
                        <h3>NEWSLETTER</h3>
                        <label htmlFor="nws" className="label2">En cochant cette case vous acceptez de recevoir l’actualité concernant les
                            aventures de Batman : <input type="checkbox" id="nws" /></label>
                        <div className="dropdown">
                            <input type="text" className="dropdown-in" disabled placeholder="Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter" />
                            <div className="dropdown-content">
                                <NavLink to="#">Link 1</NavLink>
                                <NavLink to="#">Link 2</NavLink>
                                <NavLink to="#">Link 3</NavLink>
                            </div>
                        </div>
                        <p>Souhaitez vous recevoir des news </p>
                        <div className="btn-groupe">
                            <button className="allLogos">Des films</button><button className="allLogos">Des comics</button><button className="allLogos">De tout</button>
                        </div>
                        <h3>MESSAGE</h3>
                        <textarea name="" id="" placeholder="Laissez un commentaire pour la communauté"></textarea>
                        <div className="bloc-confirmer"><button className="confirmer allLogos">CONFIRMER</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}
