import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import { addToCart } from '../../Redux/action';
import { productList } from '../../Redux/productAction';
import styles from './product.module.css'

function Product() {
  const dispatch = useDispatch();
  let {fetchData,filterData,searchData} = useSelector((state)=>state.productData);
  let mappingData=filterData[0]?.length?filterData[0]:fetchData;
  if(searchData[0]?.length>0){
    mappingData=searchData[0]?.length?searchData[0]:fetchData;
  }
  else{
    mappingData=filterData[0]?.length?filterData[0]:fetchData;
  }

  useEffect(()=>{
    dispatch(productList())
  },[])

  return (
    <>
      {
        mappingData.length===0?<div>Loading....</div>:    <div className={styles.product_page}>
        {mappingData.map((e,index)=>{ 
             return <div className={styles.card} key={index}>
                 <div>{e?.name}</div>
                 <img height={200} weigth={150} src={e?.imageURL} />
                 <div style={{display:'flex',justifyContent:'space-around',padding:'5px',padding:'1px'}}>
                     <div>Rs {e?.price}</div>
                     <div><button  style={{background:" rgb(138, 198, 228)"}} onClick={() => dispatch(addToCart({...e,currentQuentity:1,InitialPrice:e.price},e.id))}>Add to Cart</button></div>
                 </div>
             </div>
        })}
     </div>
      }
    </>
  );
}

export default Product;