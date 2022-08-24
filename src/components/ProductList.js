import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import { FilterProvider } from './../context/filter_context';
import { products_url } from './../utils/constants';

const ProductList = () => {
  const {filtered_products:products,grid_view}=useFilterContext();
  if(products.length<1){
    return <h5 style={{textTransform:'none'}}>
      Sorry, no products match your search...
    </h5>
  }
  if(grid_view===false){
    return <ListView products={products} />
  }
  return <GridView products={products}> product list</GridView>
}

export default ProductList
