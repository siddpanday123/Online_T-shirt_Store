import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { product_filter } from '../../Redux/action';
import styles from './MobileFilter.module.css'
const MobileFilter=()=>{
    const dispatch=useDispatch();
    const [selectedCategory,setSelectedCategory]=useState([]);
    const SelectFilter=(e)=>{
        const {checked,value}=e.target;
             if(checked){
              setSelectedCategory([...selectedCategory,value]);
              
             }
             else{
                setSelectedCategory([...selectedCategory?.filter((e)=>e!=value)])
             }
    }

    useEffect(()=>{
        dispatch(product_filter(selectedCategory))
     },[selectedCategory])

    return <div className={styles.filter_Part}>
             {/* color filter box */}
            <div className={styles.checkBoxDiv}>
                <div className={styles.lable}>Color</div>
                <div className={styles.check_box}>
                <input type="checkbox" name=""  onChange={SelectFilter} value={'Red'} /> <label htmlFor="">Red</label>
                </div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={SelectFilter}  value={"Blue"} /> <label htmlFor="">Blue</label>
                </div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={SelectFilter} value={'Green'} /> <label htmlFor="">Green</label>
                </div>
            </div>
              {/* gender filter box */}
              <div className="checkBoxDiv">
                <div>Gender</div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={SelectFilter} value={'Men'} /> <label htmlFor="">Men</label>
                </div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={SelectFilter} value={"Women"} /> <label htmlFor="">Women</label>
                </div>
            </div>
            {/* price filter box */}
            <div className="checkBoxDiv">
                <div className={styles.lable}>Price</div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={SelectFilter} value={'250'} /> <label htmlFor="">0- Rs 250</label>
                </div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={SelectFilter} value={"251"} /> <label htmlFor="">251- Rs 450</label>
                </div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={SelectFilter} value={'450'} /> <label htmlFor=""> Rs 450</label>
                </div>
            </div>
             {/* type filter div */}
             <div className="checkBoxDiv">
                <div className={styles.lable}>Type</div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={SelectFilter} value={'Polo'} /> <label htmlFor="">Polo</label>
                </div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={SelectFilter} value={"Hoodie"} /> <label htmlFor="">Hoodie</label>
                </div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={SelectFilter} value={'Basic'} /> <label htmlFor="">Basic</label>
                </div>
            </div>
             
        </div>
}
export default MobileFilter;