import React, { Component } from 'react'
import '../style/banner.css'

export default class Banner extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            bannerImgSrc :'../../public/images/banner.jpeg',
        }
    }
    
    render() {
        return (
            <div className='bannerWrap'>
                {/* <h2>Banner</h2> */}
                {/* <img src={require('../../public/images/banner.jpeg')}/> */}
                <img src='/images/banner.jpg' className='banner'/>
                {/* <img src={this.state.bannerImgSrc} alt='this is banner'/> */}
            </div>
        )
    }
}

