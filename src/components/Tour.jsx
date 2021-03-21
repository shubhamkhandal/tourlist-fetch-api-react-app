import React, { useState } from 'react';

const Tour = ({id,title,body,removeData}) => {
    const [readMore, setReadMore] = useState(false);


    return (
        <>
            <div className="card-box">
                <h5>{title}</h5>
                <p>{readMore ? body : `${body.substring(0,100)}...`}
                    <button onClick={()=> setReadMore(!readMore)} className="ml-10">
                        {readMore ? 'Show Less':'Read More'}
                    </button>
                </p>
                <button onClick={() => removeData(id)}>not interested</button>
            </div>
        </>
    )
}
export default Tour;