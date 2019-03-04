import React from 'react'
import PropTypes from 'prop-types'
import {ResultPropTypes} from './ResultPropTypes'
import _ from 'lodash'

class FilterList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ascending: false
    }

    this.sortTable = this.sortTable.bind(this)
  }

  sortTable(sortOrder, attribute){
    this.setState({
      sortTitle: attribute,
      ascending: sortOrder
    })
  }

  render() {
    const {filteredResults, resultsMessage, ResultsHeaderClass, ResultElementClass} = this.props

    const filteredElements = _.sortBy(filteredResults.map((result) => result.element), this.state.sortTitle)
    const sortedElements = this.state.ascending ? filteredElements :  filteredElements.reverse()

    return (
      <div>
        <h4>{resultsMessage}</h4>
        { sortedElements.length && <ResultsHeaderClass onClick={this.sortTable}/> }
        { sortedElements.map((element, index) => <div key={index}><ResultElementClass {...element}/></div>) }
      </div>
    )
  }
}

FilterList.propTypes = {
  filteredResults: PropTypes.arrayOf(ResultPropTypes).isRequired,
  resultsMessage: PropTypes.string,
  ResultsHeaderClass: PropTypes.func,
  ResultElementClass: PropTypes.func.isRequired
}

FilterList.defaultProps = {
  resultsMessage: ``
}

export default FilterList
