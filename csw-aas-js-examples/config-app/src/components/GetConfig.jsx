import React from 'react'
import IOOperationComponent from './IOOperationComponent'

const GetConfig = () => {
  const downloadURI = uri => {
    let link = document.createElement('a')
    link.href = uri
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getConfig = async input => {
    console.log(input)
    downloadURI(`http://localhost:5000/config/${input}`)
  }

  return (
    <IOOperationComponent
      txtId='get-config'
      btnId='get-config'
      componentNameProp='Get Config'
      operation='Get'
      output={null}
      api={getConfig}
    />
  )
}

export default GetConfig
