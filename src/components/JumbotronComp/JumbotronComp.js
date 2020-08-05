import React from 'react';
import {Container} from 'react-bootstrap';
import {codingpicture} from "../../images"
import './jumbo.css';

function JumbotronComp(){
return (
<div>
<Container className='contain'>
{/* <Jumbotron>
  
</Jumbotron> */}
<img src={codingpicture} alt="" className="coding-picture"></img>
</Container>
</div>
)
}


export default JumbotronComp;