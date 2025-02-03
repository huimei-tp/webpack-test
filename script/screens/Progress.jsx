import React, {useState} from 'react';
import { Col, Layout, Menu, Row } from 'antd';
const { Content, Sider } = Layout;
import Collapsables from '../components/Collapsables';
import Slideshow from '../components/Slideshow';
import Reflections from '../components/Reflections';
import milestoneProgressReport from '../../public/milestone_progress_report.pdf';


export default function Progress(){
    const [selectedKey, setSelectedKey] = useState('1');
        
        function getItem(label, key) {
            return {
              key,
              label,
            };
          }
    
        const items = [
            getItem('Planning', '1'),
            getItem('Performing', '2'),
            getItem('Monitoring', '3'),
            getItem('Reflecting', '4'),
        ]

        const handleMenuClick = (e) => {
            setSelectedKey(e.key);
        };
    
        const renderContent = () => {
            switch (selectedKey) {
                case '1':
                    return(
                        <div>
                            <h1>PLANNING  - 5W1H Project Planning Strategy</h1>
                            <Collapsables />
                        </div>
                    );
                case '2':
                    return(
                        <div>
                            <h1>PERFORMING - Proof Of Study</h1>
                            <p>Includes Evidence of Planning, Learning, and Storyboarding</p>
                            <Slideshow />
                        </div>
                    );
                case '3':
                    return(
                        <div>
                            <h1>MONITORING  - Milestone Progress Report + Learning Logs</h1>
                            <Row>
                                <Col span={12} className='column'>
                                    <iframe
                                        src={milestoneProgressReport}
                                        width="100%"
                                        height="400px"
                                        title="Proposal Document"
                                        style={{ border: 'none' }}
                                    />
                                </Col>
                                <Col span={12} className='column'>
                                {/* TODO - THIS IS TEMPORARY, REPLACE WITH LEARNING LOG */}
                                    <iframe
                                        src={milestoneProgressReport}
                                        width="100%"
                                        height="400px"
                                        title="Proposal Document"
                                        style={{ border: 'none' }}
                                    />
                                </Col>
                            </Row>
                        </div>
                    );
                    
                case '4':
                    return(
                        <div>
                            <h1>REFLECTING - Post-Course Certification Reflections</h1>
                            <Reflections />
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
                        maxHeight: '60vh',
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