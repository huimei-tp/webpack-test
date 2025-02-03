import React, {useState} from 'react';
import { Layout, Menu, Row, Col } from 'antd';
const { Content, Sider } = Layout;
import profile from '../../public/profile.png';
import proposal from '../../public/proposal.pdf';
import learningContract from '../../public/learning_contract.pdf';

const content = {
    "self-introduction": "Hello! My name is Sofia, I\’m a Year 2 Student at Temasek Polytechnic pursuing a Diploma in Information Technology. Unlike many of my peers, I only started coding when I entered Poly. So, with my limited coding experience, I was determined to work my way up, and now I have the opportunity to represent my school in the Mobile Application Development category at WorldSkills Singapore 2025. I created this e-portfolio to document my learning journey, and I hope that any aspiring coders who come across this site feel inspired to pursue their goals, even if it means starting by yourself :)",
    "project-introduction": "Guided Learning is a fundamental subject for students looking to pursue self-directed learning in their chosen area of inquiry The process focuses on four stages: planning, performing, monitoring, and reflecting. I have the opportunity to plan my individual learning project, refine and execute the learning plan, and monitor and reflect on my learning progress and project. The outcome of this subject would be this E-Portfolio as well as self-fulfillment.",
    "project-context": "My Guided Learning project focuses on studying the essential skill sets needed to develop a mobile application using Kotlin and Jetpack Compose. Afterwards, I will be building a Healthcare Mobile Application as part of the graded assignment for three of my mapped subjects — Full Stack Web Development (CIT2C20), IoT Application Development (CMC2C16), and DevOps Essentials (CIT2C22). Additionally, I will be participating in the internal qualifying round at Temasek Polytechnic to earn a spot in the official WorldSkills Competition in April 2025.",
}

export default function About(){
    const [selectedKey, setSelectedKey] = useState('1');
    
    function getItem(label, key) {
        return {
          key,
          label,
        };
      }

    const items = [
        getItem('About Me', '1'),
        getItem('Project', '2'),
        getItem('Context', '3'),
        getItem('Proposal', '4'),
        getItem('Learning Contract', '5'),
    ]

    const handleMenuClick = (e) => {
        setSelectedKey(e.key);
    };

    const renderContent = () => {
        const [numPages, setNumPages] = useState(null);
        const [pageNumber, setPageNumber] = useState(1);

        function onDocumentLoadSuccess({ numPages }) {
            setNumPages(numPages);
        }

        switch (selectedKey) {
            case '1':
                return(
                    <div>
                        <h1>Self-Introduction</h1>
                        <Row>
                            <Col span={16}>
                                <p>{content['self-introduction']}</p>
                            </Col>
                            <Col span={8} className='column'>
                                <img src={profile} alt='profile-photo' className='profile-photo'></img>
                            </Col>
                        </Row>
                    </div>
                );
            case '2':
                return(
                    <div>
                        <h1>Project Introduction - Guided Learning (GTP1302)</h1>
                        <p>{content['project-introduction']}</p>
                    </div>
                );
            case '3':
                return(
                    <div>
                        <h1>Project Context - Specific Background Introduction</h1>
                        <p>{content['project-context']}</p>
                    </div>
                );
            case '4':
                return(
                    <div>
                        <h1>Submitted Proposal</h1>
                        <iframe
                            src={proposal}
                            width="100%"
                            height="400px"
                            title="Proposal Document"
                            style={{ border: 'none' }}
                        />
                    </div>
                );
            case '5':
                return(
                    <div>
                        <h1>Learning Contract</h1>
                        <iframe
                            src={learningContract}
                            width="100%"
                            height="400px"
                            title="Proposal Document"
                            style={{ border: 'none' }}
                        />
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
                    <Sider style={{
                        background: "#FFFFFF",
                        borderRadius: 16,
                    }}>
                        <Menu 
                            defaultSelectedKeys={['1']} 
                            selectedKeys={[selectedKey]} 
                            onClick={handleMenuClick} 
                            items={items} style={{
                                padding:'16px 0px',
                                background: "#FFFFFF",
                                borderRadius: 16,
                        }}/>
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