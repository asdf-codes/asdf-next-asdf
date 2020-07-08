export default function Button() {
    return(
        <div className="hello">
            <button>
                collaborate
            </button>
            <style jsx>{` 
                .hello {
                    width: 100%;
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
                    width: max(100%, 250px);
                    font-family: Courier;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 21px;
                    font-weight: 400;   
                    text-align: center;
                    transition: 0.3s;
                }

                button:hover {
                    background-color: grey;
                    color: black;
                }
            `}</style>
        </div>
    )
}