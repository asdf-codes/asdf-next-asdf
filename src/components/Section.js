import {Path} from './SVG/Path'

export default function Section() {
    return (
        <>
         <div>
             <div className="container">
                 <div className="content">
                    <div className="contentVisual"> <Path/></div>
                    <div className="contentWritten">eventually we recogize that 
we can go anywhere 
We can Do anything. we just help you explore the options  </div>
                 </div>
             </div>

         
            <style jsx>{` 
                .container {
                    
                    height: 50vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .contentWritten {
                    font-style: uppercase;
                    padding-top: 2rem;
                    font-size: 18px;
                    line-height: 21px;
                    text-align: center;
                    text-transform: uppercase;
                }
                
            `}</style>
         </div>
        </>
    )
}