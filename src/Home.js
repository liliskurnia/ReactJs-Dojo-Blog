import { useState } from "react";

const Home = () => {
    const [name, setName] = useState ('Lilis');
    const [age, setAge] = useState (22);

    const handleClick = (e) => {
        setName ('Kurniasari');
        setAge (25);
    }
    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;