import React from 'react'
import PropTypes from 'prop-types'
import CheckboxFacetGroup from './facetgroups/CheckboxFacetGroup'
import MultiselectDropdownFacetGroup from './facetgroups/MultiselectDropdownFacetGroup'
import _ from "lodash"

import {ResultPropTypes} from './ResultPropTypes'

const FilterSidebar = ({facets, checkboxFacetGroups, results, onChange}) => {
  const facetGroups =
      _(facets)
        .sortBy([`group`, `label`])
        .groupBy(`group`)
        .toPairs()
        .partition((facetGroup) => checkboxFacetGroups.includes(facetGroup[0]))
        .value()

  const cleanCheckboxFacetGroups = facetGroups[0].map(checkFacet => {
    const facet = checkFacet[0]===`Marker genes` ? `markerGenes` : `species`
    return !results.every((result,index,arr) => result.element[facet]===arr[0].element[facet]) && checkFacet
  })

  const cleanFacetGroups =  [cleanCheckboxFacetGroups ? cleanCheckboxFacetGroups : [], facetGroups[1]]
  // Facets as checkboxes go first by design
  return(
    [
      cleanFacetGroups[0]
        .map((facetGroup) => facetGroup &&
             <CheckboxFacetGroup facetGroupName={facetGroup[0]}
               facetGroupNameDescription={facetGroup[1][0].description}
               facets={facetGroup[1]}
               onChange={onChange}
               key={facetGroup[0]} />),
      cleanFacetGroups[1]
        .map((facetGroup) =>
          <MultiselectDropdownFacetGroup facetGroupName={facetGroup[0]}
            facetGroupNameDescription={facetGroup[1][0].description}
            facets={facetGroup[1]}
            onChange={onChange}
            key={facetGroup[0]} />)
    ]
  )
}

FilterSidebar.propTypes = {
  facets: PropTypes.arrayOf(PropTypes.array).isRequired,
  checkboxFacetGroups: PropTypes.arrayOf(PropTypes.string),
  results: PropTypes.arrayOf(ResultPropTypes).isRequired,
  onChange: PropTypes.func.isRequired
}

export default FilterSidebar