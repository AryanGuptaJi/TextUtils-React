// import React, {useState} from 'react'
import React from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })  

    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
    }

    // const [btnText, setbtnText] = useState("Enable Dark Mode")    
    
    // const darkMode = () => {
    //     if(myStyle.color === 'white'){
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText("Enable Dark Mode")
    //         console.log("Enable Light Mode was clicked");
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setbtnText("Enable Light Mode")
    //         console.log("Enable Dark Mode was clicked");
    //     }
    // }

  return ( 
    <div className="container" >
        <h2 className='my-3' style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h2>
        <div className = "accordion" id="accordionExample">
            <div className = "accordion-item">
                <h2 className = "acco rdion-header" id="headingOne">
                <button className = "accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    {/* Accordion Item #1 */}
                    <strong> Analyze Your Text </strong>
                </button>
                </h2>
                <div id="collapseOne" className = "accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className = "accordion-body" style={myStyle}>
                    Textuitls gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                    {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the 
                    appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and
                     hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth
                    noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                </div>
                </div>
            </div>
            <div className = "accordion-item">
                <h2 className = "accordion-header" id="headingTwo">
                <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    {/* Accordion Item #2 */}
                    <strong> Free to use </strong>
                </button>
                </h2>
                <div id="collapseTwo" className = "accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className = "accordion-body" style={myStyle}>
                    Tetutils is a free character counter tool that provides instant character count & word count statistics for a given text.
                    Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    {/* <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the 
                    appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and
                     hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth 
                     noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                </div>
                </div>
            </div>
            <div className = "accordion-item">
                <h2 className = "accordion-header" id="headingThree">
                <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong> Browser Compatible </strong>
                {/* Accordion Item #2 */}
                </button>
                </h2>
                <div id="collapseThree" className = "accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className = "accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to 
                    count characters in facebook, blog, excel document, pdf document, essays, etc.
                    {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the 
                    appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing 
                    and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth
                     noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                </div>
                </div>
            </div>
        </div>
        {/* <div>
            <button className="btn btn-primary my-2" onClick={darkMode}>{btnText}</button>
        </div>
        <div className = "form-check form-switch">
            <input className = "form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={darkMode}/>
            <label className = "form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div> */}
    </div>
  )
}
