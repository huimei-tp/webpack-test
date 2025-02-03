import React, {useState} from 'react';
import { Col, Layout, Menu, Row } from 'antd';
const { Content, Sider } = Layout;
import curated_notes from '../../public/curated_notes.png';
import git from '../../public/certifications/git.png';
import figma from '../../public/certifications/figma.png';
import kotlin from '../../public/certifications/kotlin.png';
import compose from '../../public/certifications/compose.png';

export default function Summary(){
    const [selectedKey, setSelectedKey] = useState('1');
            
    function getItem(label, key) {
        return {
            key,
            label,
        };
        }

    const items = [
        getItem('Overall Reflection', '1'),
        getItem('Certifications', '2'),
        getItem('Curated Notes', '3'),
    ]

    const handleMenuClick = (e) => {
        setSelectedKey(e.key);
    };

    const renderContent = () => {
        switch (selectedKey) {
            case '1':
                return(
                    <div>
                        <h1>Overall Reflection</h1>
                        <p>This project has been an enriching experience that has contributed to my technical skills, problem-solving capabilities, and personal growth. When I first started, I had limited coding experiences and a lot of uncertainties ahead. However, through determination and consistency, I have since learnt a lot about Mobile Application Development in Kotlin and Jetpack Compose, which has provided me with a solid foundation in preparation for WorldSkills Singapore 2025. One of the most significant lessons I learned was the importance of adaptability and resilience. I’ve always been so afraid of finding my own solutions to debugging because I’m worried that it will take days and get me nowhere. However, even if it does take a long time, developing an independent understanding is essential in progressing as a programmer. I should not solely rely on the solutions provided by Google, but I should learn how to solve my own problems with my own methods. Overcoming these challenges will help me be more versatile in my area of expertise and help me better navigate complex environments. Likewise, I should remain open-minded in my tools and explore in order to stay relevant in this constantly evolving IT field. I also surprised myself with my persistence in emphasising understanding over memorisation because there were so many instances where I could have given up but I still followed through. I would say that my planning and time management also played a crucial role in balancing this project with my other academic commitments. I am proud of my progress and look forward to representing Temasek Polytechnic at the WorldSkills Singapore 2025 Competition.</p>
                    </div>
                );
            case '2':
                return(
                    <div>
                        <h1>Certifications</h1>
                        <Row>
                            <Col span={6} className='column'>
                                <img src={git} alt='git' className='cert'></img>
                            </Col>
                            <Col span={6} className='column'>
                                <img src={figma} alt='figma' className='cert'></img>
                            </Col>
                            <Col span={6} className='column'>
                                <img src={kotlin} alt='kotlin' className='cert'></img>
                            </Col>
                            <Col span={6} className='column'>
                                <img src={compose} alt='compose' className='cert'></img>
                            </Col>
                        </Row>
                    </div>
                    );
            case '3':
                return(
                <div>
                    <h1>Curated Notes</h1>
                    <Row>
                        <Col span={6}>
                            <p>After completing this guided learning project, I set up a local online learning system on the Obsidian productivity platform, organising notes on everything I've learned to make it easier to review and memorise before the WorldSkills competition.</p>
                        </Col>
                        <Col span={18} className='column'>
                            <img src={curated_notes} alt='curated-notes' className='curated-notes'></img>
                        </Col>
                    </Row>
                </div>
                );
            default:
                return <div>Select a tab to see content</div>;
        }
    };

    return(
        <Layout className='layout'>
            <Content className='context-box' style={{
                padding: '64px',
            }}>
                <Layout style={{
                    padding: '24px',
                    background: "#D0DDD0",
                    borderRadius: 24,
                    height: '70vh'
                }}>
                    <Sider 
                    style={{
                        background: "#FFFFFF",
                        borderRadius: 16,
                    }}
                    >
                        <Menu 
                            defaultSelectedKeys={['1']} 
                            selectedKeys={[selectedKey]} 
                            onClick={handleMenuClick} 
                            items={items} 
                            style={{
                                padding:'16px 0px',
                                background: "#FFFFFF",
                                borderRadius: 16,
                            }}
                        />
                    </Sider>
                    <Content
                        style={{
                        padding: '0 24px',
                        minHeight: 280,
                        overflowY: 'auto'
                        }}
                    >
                        {renderContent()}
                    </Content>
                </Layout>
            </Content>
        </Layout>
    )
};