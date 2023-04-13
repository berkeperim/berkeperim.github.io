import React, {useState} from 'react'
import './tabview.css'

const TabView = ({tabs = {}}) => {
    const [activeTabIndex, SetActiveTabIndex] = useState(0);
    const activateTab = (index) => {
        SetActiveTabIndex(index);
    };
    return (
        <div className="TabView">
                {
                    <div className="tabview__body">
                        <div className="tabview__body-tabs">
                            <ul>
                                {
                                    tabs.map((tab, index) => {
                                        return(
                                            <li key={index} className={index === activeTabIndex ? "active-tab" : "tab"} onClick={() => activateTab(index)}>{tab.title}</li>
                                        )
                                    })
                                }
                            </ul>
                            
                        </div>
                        <div className="tabview__body-content">
                            <h2>{tabs[activeTabIndex].job} <small>@{tabs[activeTabIndex].title}</small></h2>
                            <h5>{tabs[activeTabIndex].start_date} - {tabs[activeTabIndex].end_date}</h5>
                            <div className="tabview__body-content-rows">
                            {
                                tabs[activeTabIndex].content.map((row, index) => {
                                    return(
                                        <p>{row}</p>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div> 
                }
        </div>
    )
}

export default TabView