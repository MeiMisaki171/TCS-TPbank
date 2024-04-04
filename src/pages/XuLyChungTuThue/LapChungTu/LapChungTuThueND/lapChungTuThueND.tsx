import React from 'react'
import Body from '~/components/Layout/Body'
import CtblFormLeft from '~/components/Layout/Body/CTBL/CtblFormLeft'
import ChungTuNdDetail from '~/components/Layout/Body/CTBL/NoiDia/FormNDBottom/chungTuNdDetail'
import NoiDia from '~/components/Layout/Body/CTBL/NoiDia/FormNoiDia/formNoiDia'
import Header from '~/components/Layout/Header'

const lapChungTuThueND = () => {
    return (
        <div>
            <Header></Header>
            <Body>
                <div className='form-content card border-ctbc'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <CtblFormLeft />
                            </div>
                            <div className='col-sm-8'>
                                <NoiDia></NoiDia>
                            </div>
                        </div>
                        <div>
                            <ChungTuNdDetail></ChungTuNdDetail>
                        </div>
                    </div>
                </div>
            </Body>
        </div>
    )
}

export default lapChungTuThueND