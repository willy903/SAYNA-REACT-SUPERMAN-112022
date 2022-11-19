import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('http://localhost:4200/products');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
             }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col">
                    <Skeleton height={300} />
                </div>
                <div className="col">
                    <Skeleton height={300} />
                </div>
                <div className="col">
                    <Skeleton height={300} />
                </div>
            </>
        )
    }

    const FilterProduct = (cat) =>{
        const updateList = data.filter((x)=>x.Categorie === cat);
        setFilter(updateList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="butons text-center py-5">
                    <button className="btn btn-outline-dark text-white me-2" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark text-white me-2" onClick={()=>FilterProduct("Vêtements")}>Vêtements</button>
                    <button className="btn btn-outline-dark text-white me-2" onClick={()=>FilterProduct("Équipement")}>Équipement</button>
                    <button className="btn btn-outline-dark text-white me-2">Choose</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col mb-4 d-flex justify-content-center">
                                <div className="card" style={{"width" : "18rem"}} key={product.id} >
                                    <img src={product.imageUrl} className="card-img-top" alt="product" height={"300px"} />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{product.Nom_A}</h5>
                                            <h3 className="card-text lead fw-bold text-center">€{product.Prix}</h3>
                                            <div className='text-center'>
                                            <a t={'#'} className="btn btn-outline-dark">Ajouter au panier</a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='display-6 fw-bolder text-center'>Latest products</h1>
                    </div>
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products