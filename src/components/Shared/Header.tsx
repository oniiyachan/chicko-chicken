import React, {useState} from 'react';

interface RouteProps {
    name?: string;
  }
const Header:React.FC<RouteProps> = (props: any) => {

    const [name, setName] = useState(1);

    const changeName = () => {
        let current = name;
        setName(current + 1);
    }
    
    return (
        <div>
             <div>{name}</div>
            <button onClick={()=> changeName()}>Click</button>
        </div>
      
    )
}

export default Header;