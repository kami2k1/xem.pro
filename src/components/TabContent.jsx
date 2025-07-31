import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TabContent = ({ data }) => {
  const [copiedStates, setCopiedStates] = useState({})

  const copyToClipboard = (text, serviceIndex) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        // Show success feedback
        setCopiedStates(prev => ({ ...prev, [serviceIndex]: true }))
        setTimeout(() => {
          setCopiedStates(prev => ({ ...prev, [serviceIndex]: false }))
        }, 2000)
        console.log('Copied to clipboard:', text)
      }).catch(err => {
        console.error('Failed to copy:', err)
      })
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      
      // Show success feedback
      setCopiedStates(prev => ({ ...prev, [serviceIndex]: true }))
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [serviceIndex]: false }))
      }, 2000)
    }
  }

  return (
    <div className="TabItem fade-in">
      <div className="TabItem_Left">
        <div className="TabItem_Text_Left">
          <div className="TabItem_Text_Left_Title">{data.title}</div>
          <div className="TabItem_Text_Left_Description">{data.description}</div>
        </div>
        
        <div className="TabItem_Left_Content">
          {data.services.map((service, index) => (
            <div key={index} className="Content_SubInfo">
              <div className="SubInfo_Wrapper">
                <div className="SubInfo_Left_Head">
                  <div className="SubInfo_Left_Head_Icon">
                    <img alt="" src={service.icon} />
                  </div>
                  <span>{service.name}</span>
                </div>
                <div className="SubInfo_Left_Content">
                  <span>{service.url}</span>
                  <div 
                    className="TablistSelected_SubInfo_Right"
                    onClick={() => copyToClipboard(service.url, index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img 
                      title={copiedStates[index] ? "Copied!" : "Copy"} 
                      alt={copiedStates[index] ? "Copied!" : "Copy"} 
                      src={copiedStates[index] ? "/images/tick-circle1.png" : "/images/document-copy.png"} 
                    />
                  </div>
                </div>
                <span className="SubInfo_Des">{service.description}</span>
              </div>
              <div className="Content_Button_Wrapper">
                <a 
                  href={service.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="Content_Button"
                >
                  Xem ngay
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img className="TabItem_Right_Image" alt={data.title} src={data.backgroundImage} />
    </div>
  )
}

TabContent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })).isRequired
  }).isRequired
}

export default TabContent
