import Hero from "./hero";
const About=()=>{
    return(
        <>
        <Hero text="welcome to About page"/>
    <div className="ccontainer">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 my-5">
                    <p className="Lead">
                    lorem is not just a normal snippet—it’s actually a generator. Every time you expand it, it will generate a 30-words dummy text, splitted into a few sentences.
                    You can specify how many words should be generated right in the abbreviation. For example, lorem100 will generate a 100-words dummy text.                    
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}

export default About;