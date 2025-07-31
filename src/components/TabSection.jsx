import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import TabContent from './TabContent'
import tabData from '../data/tabData.json'

const TabSection = ({ initialSelectedIndex = 0 }) => {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex)

  return (
    <div className="TablistSelected">
      <Tabs 
        selectedIndex={selectedIndex} 
        onSelect={(index) => setSelectedIndex(index)}
        className="react-tabs"
        data-rttabs="true"
      >
        <TabList className="react-tabs__tab-list" role="tablist">
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              className="react-tabs__tab"
              selectedClassName="react-tabs__tab--selected"
              role="tab"
              aria-selected={selectedIndex === index}
              aria-disabled="false"
              data-rttab="true"
              tabIndex={selectedIndex === index ? "0" : "-1"}
            >
              <img alt={tab.alt} src={tab.icon} />
            </Tab>
          ))}
        </TabList>

        <div className="TabItem fade-in">
          {tabData.map((tab, index) => (
            <TabPanel
              key={index}
              className="react-tabs__tab-panel"
              selectedClassName="react-tabs__tab-panel--selected"
              role="tabpanel"
            >
              <TabContent data={tab} />
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  )
}

export default TabSection
