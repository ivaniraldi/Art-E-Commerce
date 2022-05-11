import React, { useEffect, useState } from 'react'
import "./modal.scss"
import background from "../../../assets/background-cart-modal.png";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, updateProduct } from '../../../redux/actions';


export default function ModalCat({ setOpenModal, modalState, img, cat, desc, name, idP, price, released, technique, state, measures, sku, serie }) {
  const dispatch = useDispatch();
    const [errors , setErrors] = useState({});
    const [nameProduct, setNameProduct] = useState(name)
    const [serieProduct, setSerieProduct] = useState(serie)
    const [measuresProduct, setMeasuresProduct] = useState(measures)
    const [priceProduct, setPriceProduct] = useState(price)
    const [descProduct, setDescProduct] = useState(desc)
    const [techniqueProduct, setTechniqueProduct] = useState(technique)
    const [releasedProduct, setReleasedProduct] = useState(released)
    const [stateProduct, setStateProduct] = useState(state)
    const [imgProduct, setImgProduct] = useState(img)
    const [catProduct, setCatProduct] = useState(cat)
    const [skuProduct, setSkuProduct] = useState(sku)
    useEffect(() => {
        dispatch(getCategories())
    }, [])
    const categories = useSelector(state => state.categories)
    let product = {
        sku:skuProduct,
        name:nameProduct,
        serie:serieProduct,
        measures:measuresProduct,
        categories: catProduct,
        price:parseInt(priceProduct),
        description:descProduct,
        technique:techniqueProduct,
        released:releasedProduct,
        image:imgProduct,
        state:stateProduct,
        }
    function handleChange(e){
        if(e.target.name==="name"){
            setNameProduct(e.target.value)
        }
        if(e.target.name==="serie"){
          setSerieProduct(e.target.value)
        }
        if(e.target.name==="measures"){
            setMeasuresProduct(e.target.value)
          }
          if(e.target.name==="price"){
            setPriceProduct(e.target.value)
          }
          if(e.target.name==="desc"){
            setDescProduct(e.target.value)
          }
          if(e.target.name==="technique"){
            setTechniqueProduct(e.target.value)
          }
          if(e.target.name==="released"){
            setReleasedProduct(e.target.value)
          }
          if(e.target.name==="state"){
            setStateProduct(e.target.value)
          }
          if(e.target.name==="img"){
            setImgProduct(e.target.value)
          }
        if(e.target.name==="sku"){
            setSkuProduct(e.target.value)
          }
        }
        function handleSubmit(e){
          e.preventDefault()
          setOpenModal(false)
          console.log(idP, product)
          //reload the component
          dispatch(updateProduct(idP, product))
          window.location.reload()
          
        }
        function handleChangeCategories(e){
            setCatProduct([parseInt(e.target.value)])
        }
        function categoryName(id){
            let cat = categories.filter(cat => cat.id_category === id)
            return cat[0].name
        }

        
        
        
        return (
    <div
    className={`flex fixed w-full h-screen z-10 backdrop-blur top-0 left-0 bg-black bg-opacity-50 justify-center items-center ${
      !modalState ? `visible` : `invisible`
    }`}
  >
          <div
        style={{width: "55%",
          height: "90%",
         border: "4px solid #3a3f42",
         color: "white",
          backgroundColor: "#1b1b2e",backgroundImage: `url(${background})`, alignItems: "center", textAlign : "center", display: "flex", flexDirection: "column", }}
      >
  <button className="closeBtn flex items-center justify-center rounded-2xl mb-1 cursor-pointer" onClick={() => setOpenModal(false)}>
            X 
          </button>
          <div className='container'>
            <img src={imgProduct} alt="" srcset="" style={{
              width:"150px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",  
              margin: "auto",
              marginBottom: "10px",
              border: "3px solid #3a3f42",
              borderRadius: "8px",

              

              }}/>
              <div>
          <form action="submit" className="">

            <div>   
            <span>Nombre:</span>
          <input type="text" name="name" value={nameProduct} onChange={handleChange} className="text-black"style={{borderRadius:"4px", marginLeft:"15px", marginBottom:"5px"}}/>           
            </div>

            <div>
            <span>Serie:</span>
          <input type="text" name="serie" value={serieProduct} onChange={handleChange} className="text-black"style={{borderRadius:"4px", marginLeft:"15px", marginBottom:"5px"}} />              
            </div>
            
            <div>    
            <span>Medidas:</span>
          <input type="text" name="measures" value={measuresProduct} onChange={handleChange} className="text-black"style={{borderRadius:"4px", marginLeft:"15px", marginBottom:"5px"}}/>       
            </div>

            <div>    
              
          <span>Precio:</span>
          <input type="text" name="price" value={priceProduct} onChange={handleChange} className="text-black"style={{borderRadius:"4px", marginLeft:"15px", marginBottom:"5px"}}/>       
            </div>

            <div>
            <span>Descripción:</span>
          <input type="text" name="desc" value={descProduct} onChange={handleChange} className="text-black"style={{borderRadius:"4px", marginLeft:"15px", marginBottom:"5px"}}/>              
            </div>

            <div>                
          <span>Técnica:</span>
          <input type="text" name="technique" value={techniqueProduct} onChange={handleChange} className="text-black"style={{borderRadius:"4px", marginLeft:"15px", marginBottom:"5px"}}/>           
            </div>

            <div>  
            <span>Fecha de lanzamiento:</span>
          <input type="date" name="released" value={releasedProduct} onChange={handleChange} className="text-black"style={{borderRadius:"4px", marginLeft:"15px", marginBottom:"5px"}}/>            
            </div>

            <div>  
            <span>SKU:</span>
            <input type="text" name="sku" value={skuProduct} onChange={handleChange} className="text-black"style={{borderRadius:"4px", marginLeft:"15px", marginBottom:"5px"}}/>            
            </div>

            <div> 
            <span>Categorias:</span>
          <select name="cat" value={catProduct} onChange={handleChangeCategories} className="text-black"style={{borderRadius:"4px", marginLeft:"15px", marginBottom:"5px"}}>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id_category}>{cat.name}</option>
            ))}
          </select>
              <div className='flex justify-center'>

          <p style={{
            fontSize: "15px",
            fontWeight: "bold",
            textAlign: "center",
            width: "50%",
            height: "50px",
            backgroundColor: "#b1b1b196",
            color: "black",
            borderRadius: "8px",
            border: "2px solid #3a3f42",
          }}>
            
            {/* {categoryName(parseInt(catProduct))+ " "}  */}
          
          {
            catProduct.map(cat => (
              categories.map(cat2 => (
                cat2.id_category === cat ? cat2.name : null
              
            ))
          ))}</p>             
              </div>
            </div>

            <div>              
          <button onClick={handleSubmit} style={{
            marginTop: "10px",
            background: "#3a3f42",
            padding: "6px",
            borderRadius: "8px",
            boxShadow: "4px 4px 4px #00000087",
            fontSize: "20px",
            fontWeight: "bold",
          }}>Guardar</button>
            </div>
          <span>{errors? errors.data : null}</span>

          </form>
          </div>
          </div>
          
          </div>
      </div>      
  )
}
