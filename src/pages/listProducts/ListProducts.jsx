import React, { useEffect, useState } from 'react'
import './ListProducts.scss'
import FindInput from '../../components/customFindInput/FindInput'
import { useSortAndFilter } from '../../customHooks/useSort'

const ListProducts = () => {
   const [products, setProducts] = useState([])
   const [searchValue, setSearchValue] = useState('')
   const [sortMethod, setSortMethod] = useState('')
   const data = useSortAndFilter(products, sortMethod, searchValue)
   let category = ['All', ...new Set(products.map(e => e.category))]

   useEffect(() => {
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              setProducts(json)
              console.log(json)
            })
   }, [])

  return (
    <div className='list-products'>
      <div className="header">
         <div className="actions">
            {category.map(e => (
               <div className={`category ${e === sortMethod ? 'active' : ''} 
                  ${sortMethod === '' ? 'active' : ''}`} 
                  key={e} 
                  onClick={() => {
                     e === category[0] ? setSortMethod('') : setSortMethod(e)}}>
                  {e}
               </div>
            ))}
         </div>
         <FindInput placeholder={'Find product'} value={searchValue} onChange={setSearchValue}/>
      </div>
      <div className="container">
         {data.length ? data.map((e, i) => (
            <div className="item" key={i}>
               <img src={e.image} alt="product" />
               <div className="info">
                  <h2 className='title'>{e.title}</h2>
                  <p className="category-name">{e.category}</p>
                  <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eligendi qui quo. Alias enim omnis veritatis quis, vel fuga eius numquam molestiae vero similique, nam suscipit harum repudiandae. Veniam, voluptates?</p>
                  <p className="cost">{e.price}$</p>
                  <div className="rating">Rating: 4</div>
               </div>
            </div>
         )) : <p className='warning'>No products found!</p>}
      </div>
    </div>
  )
}

export default ListProducts