import React from 'react'

function LeftSection({imageURL,prodcutName,prodcutDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( <div className="container">
        <div className="row ">
            <div className="col-6 p-5">
                <img src={imageURL} alt="" />
            </div>
            <div className="col-1"> </div>
            <div className="col-5 p-5 mt-5">
                <h1>
                    {prodcutName}
                </h1>

                <p>
                    {prodcutDescription}
                </p>

               <div className='mb-5'>
                 <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
                <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>learn More</a>
               </div>
                <div className='mt-3'>
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt=""  /></a>
                <a href={appStore}><img src="media/images/appStoreBadge.svg" alt="" style={{marginLeft:"50px"}}/></a>
                </div>
                
            </div>
        </div>
    </div> );
}

export default LeftSection;