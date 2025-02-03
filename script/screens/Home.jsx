import { Layout } from 'antd';
import React from 'react';
import background from '../../public/background.png';
import title from '../../public/title.png';

export default function Home(){
    return(
        <Layout className='layout'>
            <div className="background-container">
                <img src={background} alt="background" className="background" />
                {/* <img src={title} alt="title" className="title" /> */}
            </div>
        </Layout>
    );
};