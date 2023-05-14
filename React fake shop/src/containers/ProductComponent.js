import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Row,Button } from 'reactstrap';


const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
  const { id, title, image, price, category } = product;

    const sepeteEkle=()=>{
      return(
        alert("Eklendi: "+product.title)
      )
    }

    return (
      <div className="four wide column" key={id}>
        
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
              <Link to={`/product/${id}`}>
                <div className="header">{title}</div>
                <div className="meta price">{price} TL</div>
                <div className="meta">{category}</div>
                </Link>
                
                <Row>
                  <Col><div className="meta price">
                    <Button color="success" style={{
                      width:"35%",
                      border:"none",
                      borderRadius:"20px",
                      padding:"5px",
                      }} onClick={()=>sepeteEkle()}>Ekle</Button>

                    <Button  style={{
                      width:"35%",
                      border:"none",
                      borderRadius:"20px",
                      padding:"5px"}} 
                      onClick={sepeteEkle}
                      >Fav</Button>
                  </div></Col>
                  
                  </Row>
                
                
                
                
                
              </div>
            </div>
          </div>
        
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
