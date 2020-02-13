import React from 'react';


const producto=(props) =>{
    const{title,price,seller,thumbnail}=props.producto;
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={thumbnail} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">{title+"  "+price}

                    </p>
                </div>

                
            </div>
        </div>
    )
}

export default producto;