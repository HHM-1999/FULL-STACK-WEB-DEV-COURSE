import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './WebdevDetails.css';
import useStore from '../Card/zustand';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const WebdevDetails = () => {
    const { data } = useStore();
    console.log(data);
    return (
        <div ref={ref}>
            <div>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>

            <Container className='mt-5'>

                <h2>TITLE: <br></br><span className='text-primary'>{data.title_name} </span></h2>
                <h3>Description :<br></br>{data.Description}:</h3>
                <Image src={data.img} style={{ width: '250px', height: '200px' }}></Image>

                <Link to="/checkout" class="btn btn-primary mx-4 mt-5 justify-content-center">Get Premium Acccess</Link>

            </Container>

        </div>
    );
};

export default WebdevDetails;