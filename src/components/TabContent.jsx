import React from 'react'
import PropTypes from 'prop-types'

const TabContent = ({ data }) => {
  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        // Show success feedback
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
    }
  }

  return (
    <div className="TabItem fade-in">
      <div className="TabItem_Left">
        <div className="TabItem_Text_Left">
          <div className="TabItem_Text_Left_Title">{data.title}</div>
          <div className="TabItem_Text_Left_Description">{data.description}</div>
        </div>
        
        <div className="TabItem_Left_Step">
          <div className="Step_Content">
            <div className="Step_Content_Number">1</div>
            <div className="Step_Content_Text">
              <span>Bước 1:</span> Tải App trên App Store/Google Play
            </div>
          </div>
          
          <div className="TabItem_Left_Title">
            <img alt={data.title} width="150" src="/images/Monplayer.png" />
            <div className="TabItem_Left_Image">
              <a 
                className="highlight" 
                href="https://apps.apple.com/vn/app/monplayer/id6590610364?l=vi" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img alt="App Store" src="/images/as.png" />
              </a>
              <a 
                className="highlight" 
                href="https://play.google.com/store/apps/details?id=org.monplayer.mpapp" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img alt="Google Play" src="/images/gp.png" />
              </a>
            </div>
          </div>
          
          <div className="Step_Content">
            <div className="Step_Content_Number">2</div>
            <div className="Step_Content_Text">
              <span>Bước 2:</span> Click vào nút xem ngay để trải nghiệm.
            </div>
          </div>
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
                    onClick={() => copyToClipboard(service.url)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img title="Copy" alt="Copy" src="/images/document-copy.png" />
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
