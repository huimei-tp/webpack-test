import React from 'react';
import { Collapse } from 'antd';

const reflections = {
    "a": [
        "Git Certification",
        " Initially, I was hesitant to learn Git due to speculations about its steep learning curve. However, I pushed through and overcame this challenge, which turned out to be incredibly rewarding. Now, I can\’t imagine working on projects without Git and GitHub."
    ],
    "b": [
        "Figma Certification",
        "When I first started my UX/UI journey, I was using Adobe XD and felt comfortable with it. Because of that, I put off learning Figma. However, I soon realised the importance of staying adaptable and keeping up with the latest tech tools, which led me to aim for a Figma certification for this project. It turned out to be more intuitive than I expected, and it has now become my go-to design platform. You really never know unless you try."
    ],
    "c": [
        "Kotlin Certification",
        "Even though the WorldSkills competition emphasises memorisation, I believe that truly understanding code provides greater long-term benefits. That's why I prioritised mastering the fundamentals of Kotlin first, ensuring that I could apply and scale solutions effectively rather than relying solely on rote memorisation."
    ],
    "d": [
        "Jetpack Compose Certification",
        "This course taught me the importance of staying open-minded and not being afraid to explore alternate solutions independently. The lessons provided a great starting push, but the most valuable learning came from solving coding problems on my own. It reinforced the significance of gaining independent understanding rather than relying solely on fixed tutorials."
    ]

}

const reflection_items = [
    {
      key: '1',
      label: reflections['a'][0],
      children: <p>{reflections['a'][1]}</p>,
    },
    {
        key: '2',
        label: reflections['b'][0],
        children: <p>{reflections['b'][1]}</p>,
    },
    {
        key: '3',
        label: reflections['c'][0],
        children: <p>{reflections['c'][1]}</p>,
    },
    {
        key: '4',
        label: reflections['d'][0],
        children: <p>{reflections['d'][1]}</p>,
    }
  ];

export default function Reflections() {
    return (
        <Collapse defaultActiveKey={['1']} ghost>
            {reflection_items.map(item => (
                <Collapse.Panel key={item.key} header={<span style={{color: '#323a33'}}><strong>{item.label}</strong></span>}>
                    {item.children}
                </Collapse.Panel>
            ))}
        </Collapse>
    );
}

