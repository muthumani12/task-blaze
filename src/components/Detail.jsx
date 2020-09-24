import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions'

 const Filters = ['all', 'completed', 'incomplete']

function Detail({ activeFilter, setFilter }) {
    return (
        Filters.map((filter, i) => (
            <button
                className={filter === activeFilter ? 'active' : ''}
                onClick={() => setFilter(filter)}
                key={`filter-${i}`}>
                {filter}
            </button>
        ))
    )
}

const mapState = (state) => ({ activeFilter: state.Detail.activeFilter })
export default connect(mapState, { setFilter })(Detail)
