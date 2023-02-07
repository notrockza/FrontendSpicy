import React , {useEffect , useState} from 'react';
import { GetProductList } from '../../../services/Order.Service';


const OrderProductList = (props) => {
    const [dataList , setDataList] = useState([]);
    useEffect(()=>{
        loadProductLis(props.idOrder);
    },[]);

    async function loadProductLis(id) {
        var result = await GetProductList(id);
        if(result){
            setDataList(result);
            console.log(result)
        }
    }

    const showData = dataList.map((data)=>{
        return (
          <>
            <div className="time d-flex flex-row align-items-center justify-content-between mt-3">
              <div className="d-flex align-items-center">
                <i className="fa fa-clock-o clock"></i>
              </div>

              <div>
                <span className="font-weight-bold ">{data.product.price} ฿</span>
              </div>
            </div>
            <div className="second d-flex flex-row mt-2">
              <div className="image mr-3">
                <img src={data.imageProduct} width="80" />
              </div>

              <div className="">
                <div className="d-flex flex-row mb-1">
                  <span>{data.product.name}</span>
                </div>

                <div>x{data.productAmount}</div>
              </div>
            </div>
            <hr className="line-color" />
          </>
        );
    })
  return (
    <React.Fragment>
      
      {showData}
    </React.Fragment>
  );
}

export default OrderProductList