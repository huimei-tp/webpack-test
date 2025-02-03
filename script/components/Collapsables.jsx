import React from 'react';
import { Collapse } from 'antd';

const planning_content = {
    "a": [
        "Why am I doing this project? Why do I want to achieve these goals?",
        "I am doing this project because the WorldSkills learning process is self-paced so I would like to use this Guided Learning subject as an opportunity to stay accountable. This way, I can ensure that I meet my deadlines. I also want to achieve these goals so that I can represent the School of Informatics and IT in WorldSkills, making my school proud."
    ],
    "b": [
        "What do I want to cover?",
        [
            "Kotlin Syntax and Data Binding",
            "Forms and Validation",
            "Notifications, Snackbars, and Progress Indicators",
            "Scrolling Items (both horizontal and vertical)",
            "Scrollable Lists",
            "CRUD (local database), Filtering, and Preloading JSON data",
            "Navigation styles and Menus (Options Menu, Bottom Sheet Dialog)",
            "View Models, Themes, and Shared Preferences",
            "Creating Charts/Graphs from scratch",
            "Working with RESTful APIs"
        ]
    ],
    "c": [
        "Where do I find my resources? Where is my starting point?",
        "I\’ll mostly be using online resources such as YouTube, Udemy, and the official documentation for Jetpack Compose, Kotlin, and Android. I will follow said documentation and use it as a study guide on where I should start and how I should progress."
    ],
    "d": [
        "Where do I want to take my project?",
        "One of my goals this year is to be able to establish a strong personal portfolio that I can present when applying for university next year. I want to showcase this elaborate and complex project on GitHub as my first public repository."
    ],
    "e": [
        "When should I get started?",
        "When the semester begins."
    ],
    "f": [
        "Who can I seek help from?",
        "Ms Huimei Hu, my teacher in charge of the guided learning subject, who also happens to be the teacher overseeing the Mobile Application Development specialty for WorldSkills."
    ],
    "g": [
        "How do I juggle this project with my other modules?",
        "Every Monday, I create a detailed plan on what I wish to accomplish for the week on my Muji Planner and Google Calendar. This helps my organise my time more efficiently."
    ]

}

const items = [
    {
      key: '1',
      label: planning_content['a'][0],
      children: <p>{planning_content['a'][1]}</p>,
    },
    {
        key: '2',
        label: planning_content['b'][0],
        children: <p>{planning_content['b'][1]}</p>,
    },
    {
        key: '3',
        label: planning_content['c'][0],
        children: <p>{planning_content['c'][1]}</p>,
    },
    {
        key: '4',
        label: planning_content['d'][0],
        children: <p>{planning_content['d'][1]}</p>,
    },
    {
        key: '5',
        label: planning_content['e'][0],
        children: <p>{planning_content['e'][1]}</p>,
    },
    {
        key: '6',
        label: planning_content['f'][0],
        children: <p>{planning_content['f'][1]}</p>,
    },
    {
        key: '7',
        label: planning_content['d'][0],
        children: <p>{planning_content['d'][1]}</p>,
    },
  ];

export default function Collapsables() {
    return (
        <Collapse defaultActiveKey={['1']} ghost>
            {items.map(item => (
                <Collapse.Panel key={item.key} header={<span style={{color: '#323a33'}}><strong>{item.label}</strong></span>}>
                    {item.children}
                </Collapse.Panel>
            ))}
        </Collapse>
    );
}

