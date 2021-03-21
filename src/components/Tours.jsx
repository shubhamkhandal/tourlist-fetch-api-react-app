import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeData, RemoveRefreshData}) => {
    return (
        <>
            <section>
                <div className="title-box">
                    <h2 className="title">Our Desc <button onClick={() => RemoveRefreshData()}>Remov all data</button></h2>
                </div>
                <div>
                    {
                        tours.map((tourElem)=>{
                            return <Tour key={tourElem.id} {...tourElem} removeData={removeData} />
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default Tours;