import React, { useMemo } from 'react'
import { useLocation } from '@gatsbyjs/reach-router'
import NotFound from 'decentraland-gatsby/dist/components/Layout/NotFound'
import { toPoiType } from '../../entities/Proposal/types'
import ProposalSubmitPoiPage from '../../components/Proposal/Submit/ProposalSubmitPoiPage'
import './submit.css'

export default function poi() {
  const location = useLocation()
  const param = new URLSearchParams(useMemo(() => new URLSearchParams(location.search), [location.search]))
  const request = param.get('request')

  const poiType = toPoiType(request)

  if (poiType !== null) {
    return <ProposalSubmitPoiPage poiType={poiType} />
  }

  return <NotFound />
}
