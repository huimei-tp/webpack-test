import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;
import hifi from '../../public/hifi.png';
import projectProposal from '../../public/project_proposal.pdf';

export default function Prototype(){
    const [selectedKey, setSelectedKey] = useState('1');
        
    function getItem(label, key) {
        return {
            key,
            label,
        };
        }

    const items = [
        getItem('High-Fidelity Prototype', '1'),
        getItem('Project Proposal', '2'),
        getItem('Self-Directed Learning Report', '3'),
        getItem('Test Report', '4'),
        getItem('Powerpoint Presentation Slides', '5'),
        getItem('Final Working Application', '6'),
    ]

    const handleMenuClick = (e) => {
        setSelectedKey(e.key);
    };

    const renderContent = () => {
        switch (selectedKey) {
            case '1':
                return(
                    <div>
                        <h1>High-Fidelity Prototype</h1>
                        <img src={hifi} alt='hi-fi' className='hi-fi'></img>
                    </div>
                );
            case '2':
                return(
                    <div>
                        <h1>Project Proposal</h1>
                        <iframe
                            src={projectProposal}
                            width="100%"
                            height="400px"
                            title="Project Proposal"
                            style={{ border: 'none' }}
                        />
                    </div>
                );
            case '3':
                return(
                    <div>
                        <h1>Self-Directed Learning Report</h1>
                        <p>Work in Progress</p>
                    </div>
                );
            case '4':
                return(
                    <div>
                        <h1>Test Report</h1>
                        <p>Work in Progress</p>
                    </div>
                );
            case '5':
                return(
                    <div>
                        <h1>Powerpoint Presentation Slides</h1>
                        <p>Work in Progress</p>
                    </div>
                );
            case '6':
                return(
                    <div>
                        <h1>Final Working Application</h1>
                        <p>Work in Progress</p>
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
                    width={260}
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