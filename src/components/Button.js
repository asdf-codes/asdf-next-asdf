import Link from 'next/link'

export default function Button() {
    return(
        <div className="hello">
            <Link href='/collaborate' >
            <button>
                
                collaborate
             </button>
             </Link>
            <style jsx>{` 
                .hello {
                    width: 100%; 
                    display: flex;
                    justify-content: center;
                }

                button {
                    margin-top: 1rem;
                    border: none;
                    background-color: black;
                    color: white;
                    border-radius: 100px;
                    cursor: pointer;
                    padding: 0.7rem;
                    min-width: 125px;    
                    font-family: Courier;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 21px;
                    font-weight: 400;   
                    text-align: center;
                    transition: 0.3s;
                    width: max(15rem, 90%);
                    position: fixed;
                    bottom: 0;
                    margin: 1rem;
                    justify-content: center;
                    display: flex;
                }

                button:hover {
                    background-color: grey;
                    color: black;
                }
            `}</style>
        </div>
    )
}